-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 27, 2022 at 01:27 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Movie`
--

-- --------------------------------------------------------

--
-- Table structure for table `Actor`
--

CREATE TABLE `Actor` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Actor`
--

INSERT INTO `Actor` (`id`, `name`) VALUES
(1, 'Chris Hemsworth'),
(2, 'Scarlett Johansson'),
(3, 'Robert Downey Jr.'),
(4, 'Chris Evans'),
(5, 'Jeremy Renner'),
(6, 'Mark Ruffalo'),
(7, 'Tom Hiddleston'),
(8, 'Anthony Mackie'),
(9, 'Tom Holland'),
(10, 'Benedict Cumberbatch'),
(11, 'Paul Rudd'),
(12, 'Chris Pratt');

-- --------------------------------------------------------

--
-- Table structure for table `Director`
--

CREATE TABLE `Director` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Director`
--

INSERT INTO `Director` (`id`, `name`) VALUES
(1, 'Jon Favreau'),
(2, 'Taika Waititi'),
(3, 'Kevin Feige'),
(4, 'Joss Whedon'),
(5, 'Alan Taylor'),
(6, 'James Gunn'),
(7, 'Anthony Russo'),
(8, 'Joe Russo');

-- --------------------------------------------------------

--
-- Table structure for table `Genre`
--

CREATE TABLE `Genre` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Genre`
--

INSERT INTO `Genre` (`id`, `name`) VALUES
(1, 'Action'),
(2, 'Fantasy'),
(3, 'Science Fiction'),
(4, 'Adventure '),
(5, 'Comedy '),
(6, 'Drama'),
(7, 'Horror ');

-- --------------------------------------------------------

--
-- Table structure for table `Movie`
--

CREATE TABLE `Movie` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `description` text NOT NULL,
  `year` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Movie`
--

INSERT INTO `Movie` (`id`, `name`, `description`, `year`) VALUES
(1, 'iron man 1', 'Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity.', '2008'),
(2, 'Iron Man 2', 'With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father\'s legacy.', '2010'),
(3, 'Iron Man 3', 'When Tony Stark\'s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.', '2013'),
(4, 'Iron Man 4', 'The Movie will start 2 years after the Infinity War. Tony Stark started to make suits again. Now James Rhodes (War Machine) helps him with this. Tony Stark creates the ultimate suit but The Mandarin is against this. He tries to stop Tony Stark with his new ally. Tony also wants his relationship back with Pepper. Also a new threat is coming.', '2019'),
(5, 'The Avengers ', 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.', '2012'),
(6, 'Avengers: Age of Ultron', 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.', '2015'),
(7, 'Avengers: Infinity War', 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.', '2018'),
(8, 'Avengers: Endgame', 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.', '2019');

-- --------------------------------------------------------

--
-- Table structure for table `Movie_Actor`
--

CREATE TABLE `Movie_Actor` (
  `movie_id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Movie_Actor`
--

INSERT INTO `Movie_Actor` (`movie_id`, `actor_id`) VALUES
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(1, 1),
(1, 1),
(8, 1),
(8, 2),
(8, 7),
(2, 4),
(2, 10),
(6, 1);

-- --------------------------------------------------------

--
-- Stand-in structure for view `movie_dir`
-- (See below for the actual view)
--
CREATE TABLE `movie_dir` (
`name` varchar(40)
,`year` varchar(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `Movie_Director`
--

CREATE TABLE `Movie_Director` (
  `movie_id` int(11) NOT NULL,
  `director_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Movie_Director`
--

INSERT INTO `Movie_Director` (`movie_id`, `director_id`) VALUES
(5, 4),
(6, 4),
(1, 1),
(7, 7),
(7, 8),
(8, 7),
(8, 8);

-- --------------------------------------------------------

--
-- Table structure for table `Movie_Genre`
--

CREATE TABLE `Movie_Genre` (
  `movie_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Movie_Genre`
--

INSERT INTO `Movie_Genre` (`movie_id`, `genre_id`) VALUES
(5, 1),
(5, 4),
(5, 5),
(5, 2),
(5, 3),
(1, 1),
(2, 5),
(1, 5),
(2, 3),
(3, 1),
(3, 5),
(3, 2),
(3, 3),
(8, 2);

-- --------------------------------------------------------

--
-- Structure for view `movie_dir`
--
DROP TABLE IF EXISTS `movie_dir`;

CREATE ALGORITHM=UNDEFINED DEFINER=`genius`@`%` SQL SECURITY DEFINER VIEW `movie_dir`  AS SELECT `movie`.`name` AS `name`, `movie`.`year` AS `year` FROM `movie` WHERE (`movie`.`year` > '2015') ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Actor`
--
ALTER TABLE `Actor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Director`
--
ALTER TABLE `Director`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Genre`
--
ALTER TABLE `Genre`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Movie_Actor`
--
ALTER TABLE `Movie_Actor`
  ADD KEY `actor_id` (`actor_id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- Indexes for table `Movie_Director`
--
ALTER TABLE `Movie_Director`
  ADD KEY `director_id` (`director_id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- Indexes for table `Movie_Genre`
--
ALTER TABLE `Movie_Genre`
  ADD KEY `genre_id` (`genre_id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Movie_Actor`
--
ALTER TABLE `Movie_Actor`
  ADD CONSTRAINT `movie_actor_ibfk_1` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`),
  ADD CONSTRAINT `movie_actor_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`);

--
-- Constraints for table `Movie_Director`
--
ALTER TABLE `Movie_Director`
  ADD CONSTRAINT `movie_director_ibfk_1` FOREIGN KEY (`director_id`) REFERENCES `Director` (`id`),
  ADD CONSTRAINT `movie_director_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`);

--
-- Constraints for table `Movie_Genre`
--
ALTER TABLE `Movie_Genre`
  ADD CONSTRAINT `movie_genre_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `Genre` (`id`),
  ADD CONSTRAINT `movie_genre_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
