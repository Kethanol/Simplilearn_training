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
                 AND  TABLE_NAME = 'Cart'))
BEGIN
    CREATE TABLE [dbo].[Cart] (
	Id INT IDENTITY(1,1) PRIMARY KEY,
	UserId INT
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