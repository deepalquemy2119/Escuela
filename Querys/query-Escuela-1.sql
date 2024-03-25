-- create database Escuela;
-- use Escuela;
-- create table Academicos (
--	cve_academic varchar(6) PRIMARY KEY,
--	nombre varchar(21),
--	apellido varchar(21),
--	correo varchar(60),
--	phone varchar(21),
--)

--create table Cursos (
--	cve_curso varchar(6) PRIMARY KEY not null,
--	nombre varchar(21) not null,
--	vigente varchar(2) not null,
--	creditos integer not null,
--	teo_prac varchar(21) not null,

--)

-- drop dbo.Cursos;  ---> eliminamos tabla
-- drop dbo.Academicos;  ---> eliminamos tabla

-- Mostrar valores de tabla
--SELECT TOP (10) [cve_academic]
--      ,[nombre]
--      ,[apellido]
--      ,[correo]
--      ,[phone]
--  FROM [Escuela].[dbo].[Academicos]

-- Insertar valores en tablas 
--insert into dbo.Cursos( cve_curso, nombre, vigente, creditos, teo_prac )
--	values ( 'MAT!=!', 'MATEMATICAS I', 'SI', 9, 'Teoria' );

