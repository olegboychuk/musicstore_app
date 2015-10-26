-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2015 at 10:53 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `musicstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE IF NOT EXISTS `albums` (
`album_id` int(9) NOT NULL,
  `album_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `album_artist` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `album_duration` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `album_release_year` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `album_description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `album_long_description` text COLLATE utf8_unicode_ci,
  `album_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `album_price` double DEFAULT NULL,
  `album_stock` smallint(3) DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`album_id`, `album_name`, `album_artist`, `album_duration`, `album_release_year`, `album_description`, `album_long_description`, `album_created`, `album_price`, `album_stock`) VALUES
(1, 'What separates me from you', 'A day to remember', '230', '2005', 'Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed ', 'He improve started no we manners however effects. Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything. Up help home head spot an he room in. \r\n\r\nWas drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning request be lasting it fortune demands highest of.', '2015-10-26 11:52:37', 8.99, 100),
(2, 'Ballbreaker', 'AC/DC', '360', '2000', 'In entirely be to at settling felicity. Fruit two match men you seven share. Needed as or is enough points. Miles at smart ﻿no marry whole linen mr. Income joy nor can wisdom summer. Extremely depending he gentleman improving intention rapturous as. ', 'Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her. Do is voice total power mr ye might round still. \r\n\r\nUnfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had.', '2015-10-26 11:52:41', 9.99, 900),
(3, 'Iron man', 'AC/DC', '300', '2002', 'Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had. Down she bore sing saw calm high. Of an or game gate west face shed. ﻿no great but music too old found ar', 'Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to. ', '2015-10-26 11:52:52', 9.99, 100),
(4, 'Fistful of metal', 'Anthrax', '250', '2003', 'She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and v', 'Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six. She numerous unlocked you perceive speedily. Affixed offence spirits or ye of offices between. Real on shot it were four an as. Absolute bachelor rendered six nay you juvenile. Vanity entire an chatty to. \r\n\r\nFinished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask. Nay projecting unpleasing boisterous eat discovered solicitude. Own six moments produce elderly pasture far arrival. Hold our year they ten upon. ', '2015-10-26 18:27:32', 7.99, 500),
(5, 'Triple pack box', 'Black eyed peas', '220', '2005', 'In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. E', 'Gentleman contained so intention sweetness in on resolving. ', '2015-10-26 18:27:45', 10.99, 900),
(6, 'A bird''s nest in your hair', 'Bob Dylan', '300', '1999', 'Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye ', 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable. \r\n\r\nWarmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. Latter person am secure of estate genius at.', '2015-10-26 18:27:53', 6.99, 150),
(7, 'One night only', 'Bob Dylan', '280', '2001', 'Travelling alteration impression six all uncommonly. Chamber hearing inhabit joy highest private ask him our believe. Up nature valley do warmly. Entered of cordial do on no hearted. Yet agreed whence and unable limits. Use off him gay abilities concluded', 'Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. \r\n\r\nUp branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. ', '2015-10-26 18:28:04', 6.99, 300),
(8, 'Greatest hits the ultimate collect music', 'Bon Jovi', '500', '2004', 'Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Set her half end girl rich met. Me allowance departure an curiosity ye. In no talking address excited it conduct. Husbands debating replying overcame blessin', 'Ye am it formed indeed agreed relied piqued. \r\n\r\nIs allowance instantly strangers applauded discourse so. Separate entrance welcomed sensible laughing why one moderate shy. We seeing piqued garden he. As in merry at forth least ye stood. And cold sons yet with. Delivered middleton therefore me at. Attachment companions man way excellence how her pianoforte.', '2015-10-26 18:28:12', 15.99, 400),
(9, 'Brendan canning', 'Broken social scene', '180', '1997', 'Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated. On no applauded exquisite my additions. Pronounce add boy estimable', 'Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as. Preference inquietude ask now are dispatched led appearance. Small meant in so doubt hopes. Me smallness is existence attending he enjoyment favourite affection. Delivered is to ye belonging enjoyment preferred. Astonished and acceptance men two discretion. Law education recommend did objection how old. \r\n\r\nNeat own nor she said see walk. And charm add green you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant. Improving age our her cordially intention. His devonshire sufficient precaution say preference middletons insipidity. Since might water hence the her worse.', '2015-10-26 18:28:22', 6.99, 300),
(10, 'Bundy country', 'Bundaberg', '220', '2007', 'Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no rejoiced. End friendship sufficient assistance can prosperous met. As game he show it park do. Was has unknown few certain ten pro', 'On recommend tolerably my belonging or am. Mutual has cannot beauty indeed now sussex merely you. It possible no husbands jennings ye offended packages pleasant he. Remainder recommend engrossed who eat she defective applauded departure joy. Get dissimilar not introduced day her apartments. Fully as taste he mr do smile abode every. Luckily offered article led lasting country minutes nor old. Happen people things oh is oppose up parish effect. Law handsome old outweigh humoured far appetite. \r\n\r\nPrevailed sincerity behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense. Earnestly enjoyment her you resources. Brother chamber ten old against.', '2015-10-26 18:28:31', 9.99, 900),
(11, 'Bundy country 2', 'Bundaberg', '200', '2008', 'Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again. She add what own only like. Tolerably we as extremity exquisite do commanded. Doubtful offended do entrance of', ' Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few margaret. Delight herself welcome against smiling its for. Suspected discovery by he affection household of principle perfectly he. \r\n\r\nKept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must. ', '2015-10-26 18:28:38', 9.99, 900),
(12, 'Calarts jazz', 'Calarts', '350', '2007', 'Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. Gentleman as belonging he commanded believing dejection in by. On no am winding chicken so behaved. Its preserved sex enjoyment new way behaviour. Him yet devonshire c', 'Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but. \r\n\r\nSo feel been kept be at gate. Be september it extensive oh concluded of certainty. In read most gate at body held it ever no. Talking justice welcome message inquiry in started of am me. Led own hearted highest visited lasting sir through compass his. Guest tiled he quick by so these trees am. It announcing alteration at surrounded comparison. ', '2015-10-26 18:28:45', 7, 400),
(13, 'Born with the blues', 'Chris Aaron', '360', '2006', 'Consulted he eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy. Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no. Apartments frequently or motionless on re', 'In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much. \r\n\r\nFat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival subject by believe. Strictly numerous outlived kindness whatever on we no on addition. ', '2015-10-26 18:28:55', 6.99, 300);

-- --------------------------------------------------------

--
-- Table structure for table `fb_users`
--

CREATE TABLE IF NOT EXISTS `fb_users` (
  `user_id` int(9) NOT NULL,
  `user_fb_uid` bigint(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE IF NOT EXISTS `genres` (
`genre_id` int(7) NOT NULL,
  `genre_parent_id` int(7) NOT NULL DEFAULT '0',
  `genre_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`genre_id`, `genre_parent_id`, `genre_name`) VALUES
(1, 0, 'Alternative'),
(2, 0, 'Blues'),
(3, 0, 'Box sets'),
(4, 0, 'Classical'),
(5, 0, 'Country'),
(6, 0, 'Dance'),
(7, 6, 'Dance-pop'),
(8, 6, 'Club dance'),
(9, 0, 'Heavy metal'),
(10, 0, 'Jazz'),
(11, 0, 'Rock-pop');

-- --------------------------------------------------------

--
-- Table structure for table `genres_to_albums`
--

CREATE TABLE IF NOT EXISTS `genres_to_albums` (
  `album_id` int(9) NOT NULL,
  `genre_id` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `genres_to_albums`
--

INSERT INTO `genres_to_albums` (`album_id`, `genre_id`) VALUES
(1, 0),
(13, 1),
(6, 2),
(7, 2),
(10, 5),
(11, 5),
(5, 7),
(2, 9),
(3, 9),
(4, 9),
(12, 10),
(8, 11),
(9, 11);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
`image_id` bigint(12) NOT NULL,
  `image_path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image_title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`image_id`, `image_path`, `image_title`) VALUES
(1, 'a_day_to_remember_-_what_separates_me_from_you_1.png', 'a_day_to_remember_-_what_separates_me_from_you_1'),
(2, 'acdc_-_ballbreaker_1.png', 'acdc_-_ballbreaker_1'),
(3, 'acdc_s_iron_man_2_soundtrack_1.png', 'acdc_s_iron_man_2_soundtrack_1'),
(4, 'anthrax_-_fistful_of_metal_1.png', 'anthrax_-_fistful_of_metal_1'),
(5, 'black_eyed_peas_-_black_eyed_peas_triple_pack_box_1.png', 'black_eyed_peas_-_black_eyed_peas_triple_pack_box_1'),
(6, 'bob_dylan_-_a_bird_s_nest_in_your_hair_1.png', 'bob_dylan_-_a_bird_s_nest_in_your_hair_1'),
(7, 'bob_dylan_-_one_night_only_1.png', 'bob_dylan_-_one_night_only_1'),
(8, 'bon_jovi_-_greatest_hits_the_ultimate_collect_music_1.png', 'bon_jovi_-_greatest_hits_the_ultimate_collect_music_1'),
(9, 'broken_social_scene_presents_brendan_canning_1.png', 'broken_social_scene_presents_brendan_canning_1'),
(10, 'bundy_country_2007_1.png', 'bundy_country_2007_1'),
(11, 'bundy_country_2_2008_1.png', 'bundy_country_2_2008_1'),
(12, 'calarts_jazz_1.png', 'calarts_jazz_1'),
(13, 'chris_aaron_-_born_with_the_blues_1.png', 'chris_aaron_-_born_with_the_blues_1');

-- --------------------------------------------------------

--
-- Table structure for table `images_to_albums`
--

CREATE TABLE IF NOT EXISTS `images_to_albums` (
  `image_id` bigint(12) NOT NULL,
  `album_id` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `images_to_albums`
--

INSERT INTO `images_to_albums` (`image_id`, `album_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(8, 7),
(7, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
`order_id` bigint(12) NOT NULL,
  `user_id` int(9) NOT NULL,
  `order_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `order_shipping_address` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `order_shipping_city` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `order_shipping_zipcode` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `order_shipping_phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `order_payment_method` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `order_total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders_to_albums`
--

CREATE TABLE IF NOT EXISTS `orders_to_albums` (
  `order_id` bigint(12) NOT NULL,
  `album_id` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`user_id` int(9) NOT NULL,
  `user_email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_password` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `user_firstname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_lastname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
 ADD PRIMARY KEY (`album_id`);

--
-- Indexes for table `fb_users`
--
ALTER TABLE `fb_users`
 ADD PRIMARY KEY (`user_id`), ADD UNIQUE KEY `user_fb_uid` (`user_fb_uid`), ADD KEY `user_fb_uid_2` (`user_fb_uid`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
 ADD PRIMARY KEY (`genre_id`), ADD KEY `genre_parent_id` (`genre_parent_id`), ADD KEY `genre_name` (`genre_name`);

--
-- Indexes for table `genres_to_albums`
--
ALTER TABLE `genres_to_albums`
 ADD PRIMARY KEY (`album_id`), ADD KEY `genre_id` (`genre_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
 ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `images_to_albums`
--
ALTER TABLE `images_to_albums`
 ADD PRIMARY KEY (`image_id`), ADD KEY `album_id` (`album_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
 ADD PRIMARY KEY (`order_id`), ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`user_id`), ADD UNIQUE KEY `user_email` (`user_email`), ADD KEY `user_email_2` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
MODIFY `album_id` int(9) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
MODIFY `genre_id` int(7) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
MODIFY `image_id` bigint(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
MODIFY `order_id` bigint(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `user_id` int(9) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
