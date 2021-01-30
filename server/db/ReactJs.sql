-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 30-01-2021 a las 10:10:26
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ReactJs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `drinks`
--

CREATE TABLE `drinks` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `logo` varchar(500) NOT NULL,
  `leftColor` varchar(50) NOT NULL,
  `rightColor` varchar(50) NOT NULL,
  `Categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `drinks`
--

INSERT INTO `drinks` (`id`, `title`, `description`, `logo`, `leftColor`, `rightColor`, `Categoria`) VALUES
(3, 'Monster', 'drink de prueba ReactJS', 'https://1000marcas.net/wp-content/uploads/2020/03/Monster-Energy-Logo.png', '#0F2027', '#2C5364', 0),
(4, 'Red Bull', 'drink de prueba ReactJS', 'https://cdn.iconscout.com/icon/free/png-512/redbull-282301.png', '#f12711', '#f5af19', 0),
(5, 'Brahma', 'drink de prueba ReactJS', 'https://image.winudf.com/v2/image/Yml6LmFwcDRtb2JpbGUuYXBwX2U4YzNmZGMxNTRmMDQyNTE4M2JlZmZkODQ3MTkwZmM2LmFwcF9pY29uX29jZWpsa3My/icon.png?w=170&fakeurl=1', '#200122', '#6f0000', 0),
(6, 'Quilmes', 'drink de prueba ReactJS', 'https://www.sucosorder.com/media/images/org/quilmes-.png', '#000428', '#004e92', 0),
(24, 'pepsi', 'carga de practica de componente reactjs', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/744px-Pepsi_logo_2014.svg.png', '#0575E6', '#021B79', 0),
(25, 'Manaos', 'radiactivo antioxidante', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Manaos_Logo.svg/1200px-Manaos_Logo.svg.png', '#dd1818', '#333333', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `drinks`
--
ALTER TABLE `drinks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `drinks`
--
ALTER TABLE `drinks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
