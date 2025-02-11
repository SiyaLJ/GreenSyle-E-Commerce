-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 05, 2022 at 08:27 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electroniks`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `email_address` varchar(50) NOT NULL,
  `cell_number` varchar(20) NOT NULL,
  `customer_first_name` varchar(50) NOT NULL,
  `customer_last_name` varchar(50) NOT NULL,
  `SA_ID_number` bigint(14) NOT NULL,
  `delivery_address` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`email_address`, `cell_number`, `customer_first_name`, `customer_last_name`, `SA_ID_number`, `delivery_address`) VALUES
('4056535@myuwc.ac.za', '0607474535', 'Ridhaa', 'Peters', 104124084917, '12 Hoek Street, Belville, Cape Town'),
('andrew@oldmutal.com', '0825065061', 'Andrew', 'Williams', 8542458495077, '6, Shelly Street, Walmer Estate, Cape Town'),
('jamie@hotmail.com', '0215059066', 'Jamie', 'Richards', 9806234598623, '64, Woody Road, Midrand, Johannesburg'),
('msamuels@gmail.com', '0823751811', 'Michael', 'Samuels', 9904065076499, '74 Good Street, Sea Point, Cape Town'),
('mzuma@gmail.com', '0855431111', 'Michael', 'Zuma', 543013409855, '2 Robert Subukwe Road, Belville, Cape Town'),
('qsalie@unicef.com', '0623634188', 'Qaasiem', 'Salie', 9912244068014, '12 Chatem road, Salt River, Cape Town');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `order_id` int(11) NOT NULL,
  `product_id` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`order_id`, `product_id`) VALUES
(448, 1),
(449, 2),
(450, 3),
(451, 1),
(452, 2),
(453, 3),
(454, 4),
(455, 4),
(456, 5),
(457, 1),
(458, 2),
(459, 3),
(460, 4),
(461, 5),
(462, 1),
(463, 2),
(464, 1),
(465, 2),
(466, 1),
(467, 2),
(468, 1),
(469, 2),
(470, 1),
(471, 2),
(472, 1),
(473, 2),
(474, 5),
(475, 1),
(476, 2),
(477, 5),
(478, 1),
(479, 2),
(480, 5),
(481, 1),
(482, 2),
(483, 4),
(484, 1),
(485, 2),
(486, 1),
(487, 2),
(488, 3),
(489, 2),
(490, 3),
(491, 1),
(492, 2),
(493, 1),
(494, 2),
(495, 1),
(496, 2),
(497, 1),
(498, 2),
(499, 1),
(500, 2),
(501, 1),
(502, 2),
(503, 3);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `email_address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `email_address`) VALUES
(103, 'qsalie@unicef.com'),
(104, 'msamuels@gmail.com'),
(108, 'jamie@hotmail.com'),
(109, 'msamuels@gmail.com'),
(110, '4056535@myuwc.ac.za'),
(111, '4056535@myuwc.ac.za'),
(112, '4056535@myuwc.ac.za'),
(113, '4056535@myuwc.ac.za'),
(114, 'qsalie@unicef.com'),
(115, 'qsalie@unicef.com'),
(116, 'qsalie@unicef.com'),
(117, '4056535@myuwc.ac.za'),
(118, '4056535@myuwc.ac.za'),
(119, '4056535@myuwc.ac.za'),
(120, 'jamie@hotmail.com'),
(121, 'mzuma@gmail.com'),
(122, 'mzuma@gmail.com'),
(123, 'mzuma@gmail.com'),
(124, 'mzuma@gmail.com'),
(125, 'mzuma@gmail.com'),
(126, 'mzuma@gmail.com'),
(127, 'mzuma@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` smallint(6) NOT NULL,
  `product_name` tinytext NOT NULL,
  `product_price` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`) VALUES
(1, '65-inch OLED 4K UHD TV', '9000.00'),
(2, 'Apple iPhone 7, 32GB, Silver', '5000.00'),
(3, 'Power Bank Charger', '700.00'),
(4, 'Vebos floor stand Harman Kardon Surround', '3000.00'),
(5, 'Focal Clear Open-Back Headphones', '1500.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`email_address`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=504;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
