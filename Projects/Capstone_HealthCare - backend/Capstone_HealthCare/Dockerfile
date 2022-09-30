#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Capstone_HealthCare/Capstone_HealthCare.csproj", "Capstone_HealthCare/"]
COPY ["BusinessLogicTier/BusinessLogicTier/BusinessLogicTier.csproj", "BusinessLogicTier/BusinessLogicTier/"]
COPY ["DataAccessTier/Repository/Repository.csproj", "DataAccessTier/Repository/"]
COPY ["Entities/Entities.csproj", "Entities/"]
RUN dotnet restore "Capstone_HealthCare/Capstone_HealthCare.csproj"
COPY . .
WORKDIR "/src/Capstone_HealthCare"
RUN dotnet build "Capstone_HealthCare.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Capstone_HealthCare.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Capstone_HealthCare.dll"]