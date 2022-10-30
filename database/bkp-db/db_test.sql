﻿USE [master]
GO
/****** Object:  Database [db_test]    Script Date: 10/29/22 8:43:43 PM ******/
CREATE DATABASE [db_test]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'db_test', FILENAME = N'/var/opt/mssql/data/db_test.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'db_test_log', FILENAME = N'/var/opt/mssql/data/db_test_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [db_test].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [db_test] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [db_test] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [db_test] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [db_test] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [db_test] SET ARITHABORT OFF 
GO
ALTER DATABASE [db_test] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [db_test] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [db_test] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [db_test] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [db_test] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [db_test] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [db_test] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [db_test] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [db_test] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [db_test] SET  ENABLE_BROKER 
GO
ALTER DATABASE [db_test] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [db_test] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [db_test] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [db_test] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [db_test] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [db_test] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [db_test] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [db_test] SET RECOVERY FULL 
GO
ALTER DATABASE [db_test] SET  MULTI_USER 
GO
ALTER DATABASE [db_test] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [db_test] SET DB_CHAINING OFF 
GO
ALTER DATABASE [db_test] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [db_test] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [db_test] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'db_test', N'ON'
GO
ALTER DATABASE [db_test] SET QUERY_STORE = OFF
GO
USE [db_test]
GO
ALTER DATABASE SCOPED CONFIGURATION SET ACCELERATED_PLAN_FORCING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET BATCH_MODE_ADAPTIVE_JOINS = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET BATCH_MODE_MEMORY_GRANT_FEEDBACK = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET BATCH_MODE_ON_ROWSTORE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET DEFERRED_COMPILATION_TV = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET ELEVATE_ONLINE = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET ELEVATE_RESUMABLE = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET GLOBAL_TEMPORARY_TABLE_AUTO_DROP = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET INTERLEAVED_EXECUTION_TVF = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET ISOLATE_SECURITY_POLICY_CARDINALITY = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LAST_QUERY_PLAN_STATS = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LIGHTWEIGHT_QUERY_PROFILING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET OPTIMIZE_FOR_AD_HOC_WORKLOADS = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET ROW_MODE_MEMORY_GRANT_FEEDBACK = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET TSQL_SCALAR_UDF_INLINING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET VERBOSE_TRUNCATION_WARNINGS = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET XTP_PROCEDURE_EXECUTION_STATISTICS = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET XTP_QUERY_EXECUTION_STATISTICS = OFF;
GO
USE [db_test]
GO
/****** Object:  Table [dbo].[gouvernorats]    Script Date: 10/29/22 8:43:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gouvernorats](
	[code] [nvarchar](255) NOT NULL,
	[libelle] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NULL,
	[updatedAt] [datetimeoffset](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Params]    Script Date: 10/29/22 8:43:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Params](
	[id] [nvarchar](255) NOT NULL,
	[value] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NULL,
	[updatedAt] [datetimeoffset](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[role-permissions]    Script Date: 10/29/22 8:43:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[role-permissions](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[permission] [nvarchar](255) NULL,
	[createdAt] [datetimeoffset](7) NULL,
	[updatedAt] [datetimeoffset](7) NULL,
	[roleId] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[roles]    Script Date: 10/29/22 8:43:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[roles](
	[role] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NULL,
	[updatedAt] [datetimeoffset](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[role] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 10/29/22 8:43:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [nvarchar](255) NOT NULL,
	[firstName] [nvarchar](255) NULL,
	[lastName] [nvarchar](255) NULL,
	[email] [nvarchar](255) NULL,
	[password] [nvarchar](255) NULL,
	[role] [nvarchar](255) NULL,
	[belongsTo] [nvarchar](255) NULL,
	[birthDate] [datetimeoffset](7) NULL,
	[createdAt] [datetimeoffset](7) NULL,
	[updatedAt] [datetimeoffset](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[gouvernorats] ([code], [libelle], [createdAt], [updatedAt]) VALUES (N'1000', N'TUNIS', CAST(N'2022-10-29T19:21:27.8420000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:27.8420000+00:00' AS DateTimeOffset))
INSERT [dbo].[gouvernorats] ([code], [libelle], [createdAt], [updatedAt]) VALUES (N'1100', N'ARIANA', CAST(N'2022-10-29T19:21:27.8870000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:27.8870000+00:00' AS DateTimeOffset))
INSERT [dbo].[gouvernorats] ([code], [libelle], [createdAt], [updatedAt]) VALUES (N'1200', N'BEN AROUS', CAST(N'2022-10-29T19:21:27.8970000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:27.8970000+00:00' AS DateTimeOffset))
INSERT [dbo].[Params] ([id], [value], [createdAt], [updatedAt]) VALUES (N'PARAM1', N'ABCDEF', CAST(N'2022-10-29T19:21:27.7670000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:27.7670000+00:00' AS DateTimeOffset))
SET IDENTITY_INSERT [dbo].[role-permissions] ON 

INSERT [dbo].[role-permissions] ([id], [permission], [createdAt], [updatedAt], [roleId]) VALUES (1, N'USER_CREATE', CAST(N'2022-10-29T19:21:28.0050000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:28.0050000+00:00' AS DateTimeOffset), N'ADMIN')
INSERT [dbo].[role-permissions] ([id], [permission], [createdAt], [updatedAt], [roleId]) VALUES (2, N'USER_CREATE', CAST(N'2022-10-29T19:21:28.0230000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:28.0230000+00:00' AS DateTimeOffset), N'MANAGER')
INSERT [dbo].[role-permissions] ([id], [permission], [createdAt], [updatedAt], [roleId]) VALUES (3, N'USER_DELETE', CAST(N'2022-10-29T19:21:28.0740000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:28.0740000+00:00' AS DateTimeOffset), N'ADMIN')
INSERT [dbo].[role-permissions] ([id], [permission], [createdAt], [updatedAt], [roleId]) VALUES (4, N'USER_DELETE', CAST(N'2022-10-29T19:21:28.0820000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:28.0820000+00:00' AS DateTimeOffset), N'MANAGER')
INSERT [dbo].[role-permissions] ([id], [permission], [createdAt], [updatedAt], [roleId]) VALUES (5, N'USER_CREATE', CAST(N'2022-10-29T19:21:28.0910000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:28.0910000+00:00' AS DateTimeOffset), N'USER')
INSERT [dbo].[role-permissions] ([id], [permission], [createdAt], [updatedAt], [roleId]) VALUES (6, N'USER_DELETE', CAST(N'2022-10-29T19:21:28.1380000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:28.1380000+00:00' AS DateTimeOffset), N'USER')
SET IDENTITY_INSERT [dbo].[role-permissions] OFF
INSERT [dbo].[roles] ([role], [createdAt], [updatedAt]) VALUES (N'ADMIN', CAST(N'2022-10-29T19:21:27.9220000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:27.9220000+00:00' AS DateTimeOffset))
INSERT [dbo].[roles] ([role], [createdAt], [updatedAt]) VALUES (N'MANAGER', CAST(N'2022-10-29T19:21:27.9710000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:27.9710000+00:00' AS DateTimeOffset))
INSERT [dbo].[roles] ([role], [createdAt], [updatedAt]) VALUES (N'USER', CAST(N'2022-10-29T19:21:28.0130000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:28.0130000+00:00' AS DateTimeOffset))
INSERT [dbo].[users] ([id], [firstName], [lastName], [email], [password], [role], [belongsTo], [birthDate], [createdAt], [updatedAt]) VALUES (N'seif', N'seif', N'ben khaled', N'seif_09@yahoo.com', N'Test.123', N'ADMIN', NULL, NULL, CAST(N'2022-10-29T19:21:28.1160000+00:00' AS DateTimeOffset), CAST(N'2022-10-29T19:21:28.1160000+00:00' AS DateTimeOffset))
ALTER TABLE [dbo].[role-permissions]  WITH CHECK ADD FOREIGN KEY([roleId])
REFERENCES [dbo].[roles] ([role])
ON DELETE SET NULL
GO
USE [master]
GO
ALTER DATABASE [db_test] SET  READ_WRITE 
GO