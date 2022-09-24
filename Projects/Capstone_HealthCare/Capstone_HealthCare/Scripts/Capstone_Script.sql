IF (NOT EXISTS (SELECT * 
                 FROM INFORMATION_SCHEMA.TABLES 
                 WHERE TABLE_SCHEMA = 'dbo' 
                 AND  TABLE_NAME = 'Medicine'))
BEGIN
    CREATE TABLE [dbo].[Medicine] (
	Id INT IDENTITY(1,1) PRIMARY KEY,
	[Name] VARCHAR(30),
	[Description] VARCHAR(120),
	[SchemaOfTreatment] VARCHAR (50),
	[MinimumAge] INT,
	[Price] DECIMAL(18,2)
	)
END

IF (NOT EXISTS (SELECT * 
                 FROM INFORMATION_SCHEMA.TABLES 
                 WHERE TABLE_SCHEMA = 'dbo' 
                 AND  TABLE_NAME = 'User'))
BEGIN
    CREATE TABLE [dbo].[User] (
	Id INT IDENTITY(1,1) PRIMARY KEY,
	[Username] VARCHAR(30),
	[Password] VARCHAR(256),
	[Email] VARCHAR(50),
	[FirstName] VARCHAR(30),
	[LastName] VARCHAR(30),
	[Role] VARCHAR(30)
	)
END

IF (NOT EXISTS (SELECT * 
                 FROM INFORMATION_SCHEMA.TABLES 
                 WHERE TABLE_SCHEMA = 'dbo' 
                 AND  TABLE_NAME = 'Cart'))
BEGIN
    CREATE TABLE [dbo].[Cart] (
	Id INT IDENTITY(1,1) PRIMARY KEY,
	UserId INT FOREIGN KEY References [dbo.User](Id),
	)
END

IF (NOT EXISTS (SELECT * 
                 FROM INFORMATION_SCHEMA.TABLES 
                 WHERE TABLE_SCHEMA = 'dbo' 
                 AND  TABLE_NAME = 'CartXMedicine'))
BEGIN
    CREATE TABLE [dbo].[CartXMedicine] (
	CartId INT FOREIGN KEY References dbo.Cart(Id),
	MedicineId INT FOREIGN KEY References dbo.Medicine(Id),
	)
END