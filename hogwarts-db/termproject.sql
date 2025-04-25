-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2024 at 12:28 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `termproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `hpcharactersinfo`
--

CREATE TABLE `hpcharactersinfo` (
  `ID` int(11) NOT NULL,
  `CharacterName` varchar(100) NOT NULL,
  `ActorName` varchar(100) NOT NULL,
  `House` varchar(50) DEFAULT NULL,
  `RoleType` varchar(50) DEFAULT NULL,
  `FirstAppearance` varchar(100) DEFAULT NULL,
  `FinalAppearance` varchar(100) DEFAULT NULL,
  `WandType` varchar(255) DEFAULT NULL,
  `BloodStatus` varchar(50) DEFAULT NULL,
  `Occupation` varchar(100) DEFAULT NULL,
  `Species` varchar(50) DEFAULT NULL,
  `Pet` varchar(100) DEFAULT NULL,
  `Skills` varchar(255) DEFAULT NULL,
  `BirthDate` date DEFAULT NULL,
  `Parents` varchar(255) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hpcharactersinfo`
--

INSERT INTO `hpcharactersinfo` (`ID`, `CharacterName`, `ActorName`, `House`, `RoleType`, `FirstAppearance`, `FinalAppearance`, `WandType`, `BloodStatus`, `Occupation`, `Species`, `Pet`, `Skills`, `BirthDate`, `Parents`, `Gender`) VALUES
(1, 'Harry James Potter', 'Daniel Radcliffe', 'Gryffindor', 'Main Character', 'Sorcerer\'s Stone', 'Deathly Hallows – Part 2', '11\" Holly, Phoenix feather & 15\" Elder, Thestral tail hair', 'Half-blood', 'Auror', 'Human', 'Hedwig (Owl)', 'Parseltongue', '1980-07-31', 'James Potter, Lily Potter (Muggle)', 'Male'),
(2, 'Hermione Jean Granger', 'Emma Watson', 'Gryffindor', 'Main Character', 'Sorcerer\'s Stone', 'Deathly Hallows – Part 2', '10¾\" Vine, Dragon heartstring', 'Muggle-born', 'Minister for Magic', 'Human', 'Crookshanks (Cat)', 'Intelligence', '1979-09-19', 'Mr. Granger, Mrs. Granger (Muggle)', 'Female'),
(3, 'Ronald Bilius Weasley', 'Rupert Grint', 'Gryffindor', 'Main Character', 'Sorcerer\'s Stone', 'Deathly Hallows – Part 2', '12\" Ash, Unicorn hair (broken in 1992) & 14\" Willow, Unicorn hair', 'Pure-blood', 'Auror & Partner at Weasleys\' Wizard Wheezes', 'Human', 'Scabbers (Rat)', 'Loyalty', '1980-03-01', 'Arthur Weasley, Molly Weasley (Muggle)', 'Male'),
(4, 'Draco Malfoy', 'Tom Felton', 'Slytherin', 'Main Antagonist', 'Sorcerer\'s Stone', 'Deathly Hallows – Part 2', '10\" Hawthorn, Unicorn hair', 'Pure-blood', 'Death Eater', 'Human', 'None', 'Duelling', '1980-06-05', 'Lucius Malfoy, Narcissa Malfoy (Pure-blood)', 'Male'),
(5, 'Albus Percival Wulfric Brian Dumbledore', 'Richard Harris', 'Gryffindor', 'Supporting Character', 'Sorcerer\'s Stone', 'Deathly Hallows – Part 2', '15\" Elder, Thestral tail hair', 'Half-blood', 'Headmaster', 'Human', 'Fawkes (Phoenix)', 'Powerful Magic', '1881-07-31', 'Percival Dumbledore, Kendra Dumbledore (Muggle)', 'Male'),
(6, 'Severus Snape', 'Alan Rickman', 'Slytherin', 'Supporting Character', 'Sorcerer\'s Stone', 'Deathly Hallows – Part 2', '14\" Maple, Dragon heartstring', 'Half-blood', 'Potions Master', 'Human', 'None', 'Potions Mastery', '1960-01-09', 'Tobias Snape, Eileen Prince (Muggle)', 'Male'),
(7, 'Luna Lovegood', 'Evanna Lynch', 'Ravenclaw', 'Supporting Character', 'Order of the Phoenix', 'Deathly Hallows – Part 2', '9\" Willow, Thestral hair', 'Muggle-born', 'Magizoologist', 'Human', 'None', 'Unique Perspective', '1981-02-13', 'Xenophilius Lovegood, Pandora Lovegood (Muggle)', 'Female'),
(8, 'Neville Longbottom', 'Matthew Lewis', 'Gryffindor', 'Supporting Character', 'Sorcerer\'s Stone', 'Deathly Hallows – Part 2', '13\" Yew, Dragon heartstring', 'Pure-blood', 'Herbology Professor', 'Human', 'Trevor (Toad)', 'Herbology', '1980-07-30', 'Frank Longbottom, Alice Longbottom (Muggle)', 'Male'),
(9, 'Ginny Weasley', 'Bonnie Wright', 'Gryffindor', 'Supporting Character', 'Chamber of Secrets', 'Deathly Hallows – Part 2', '14\" Yew, Phoenix feather', 'Pure-blood', 'Professional Quidditch Player', 'Human', 'Pigwidgeon (Owl)', 'Charms', '1981-08-11', 'Arthur Weasley, Molly Weasley (Muggle)', 'Female'),
(10, 'Minerva McGonagall', 'Maggie Smith', 'Gryffindor', 'Supporting Character', 'Sorcerer\'s Stone', 'Deathly Hallows – Part 2', '10\" Pine, Dragon heartstring', 'Half-blood', 'Transfiguration Professor', 'Human', 'None', 'Transfiguration', '1935-10-04', 'Unknown', 'Female');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hpcharactersinfo`
--
ALTER TABLE `hpcharactersinfo`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hpcharactersinfo`
--
ALTER TABLE `hpcharactersinfo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
