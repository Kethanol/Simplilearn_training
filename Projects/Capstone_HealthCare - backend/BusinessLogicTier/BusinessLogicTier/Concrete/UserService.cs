﻿using BusinessLogicTier.Contracts;
using BusinessLogicTier.Models;
using Entities.Entities;
using Entities.Constants;
using Repository.Contracts;

namespace BusinessLogicTier.Concrete
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAuthorizationService _authorizationService;
        private readonly IValidationService _validationService;

        public UserService(IUnitOfWork unitOfWork, IAuthorizationService authorizationService, IValidationService validationService)
        {
            _unitOfWork = unitOfWork;
            _authorizationService = authorizationService;
            _validationService = validationService;
        }

        public async Task<LoginResponseModel> SignIn(UserLogin loginInformation)
        {
            var response = new LoginResponseModel();
            var hashedPassword = _validationService.Hash(loginInformation.Password!);

            var existingUser = await _unitOfWork.UserRepository.GetSingleByAsync(u => (u.Username!.ToUpper() == loginInformation!.UsernameOrEmail!.ToUpper() || u.E_mail!.ToUpper() == loginInformation.UsernameOrEmail!.ToUpper())
          && u.Password == hashedPassword && u.Role == (loginInformation.IsAdmin ? Constants.Roles.ADMINISTRATOR : Constants.Roles.BASIC));

            if (existingUser != null)
            {
                var token = _authorizationService.GenerateToken(existingUser);

                response.HasSuccess = true;
                response.Token = token;
                response.UserId = existingUser.Id;
                response.IsAdmin = existingUser.Role == Constants.Roles.ADMINISTRATOR;
            }       
            else
            {
                response.ErrorReason = "User does not exist!";
            }

            return response;
        }

        public async Task<SignUpResponseModel> SignUp(User user)
        {
            var response = new SignUpResponseModel();

            var isValid = _validationService.ValidateUsername(user.Username!) && _validationService.ValidatePassword(user.Password!) && _validationService.ValidateMail(user.E_mail!);
            if (!isValid)
            {
                response.ErrorReason = "Invalid data!";
                return response;
            };

            var hashedPassword = _validationService.Hash(user.Password!);
            var existingUser = await _unitOfWork.UserRepository.GetSingleByAsync(u => u.Username!.ToUpper() == user.Username!.ToUpper() || u.E_mail!.ToUpper() == user.E_mail!.ToUpper());

            if (existingUser != null)
            {
                response.ErrorReason = $"There is already an existing user with the username {user.Username} or the email ${user.E_mail}!";
                return response;
            }

            // Insert new user
            var newUser = new User()
            {
                Id = user.Id,
                Username = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                E_mail = user.E_mail,
                Role = Constants.Roles.BASIC,
                Password = hashedPassword
            };


            // Insert new cart
            var newCart = new Cart()
            {
                User = newUser
            };

            await _unitOfWork.CartRepository.InsertAsync(newCart);
            await _unitOfWork.SaveChangesAsync();

            response.HasSuccess = true;

            return response;
        }
    }
}
