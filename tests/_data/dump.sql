-- MySQL dump 10.13  Distrib 5.5.27, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: trackme
-- ------------------------------------------------------
-- Server version	5.5.27-0ubuntu2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `business`
--

DROP TABLE IF EXISTS `business`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state_id` int(11) DEFAULT NULL,
  `subscription_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D36E389A1887DC` (`subscription_id`),
  KEY `IDX_8D36E385D83CC1` (`state_id`),
  CONSTRAINT `FK_8D36E389A1887DC` FOREIGN KEY (`subscription_id`) REFERENCES `subscription` (`id`),
  CONSTRAINT `FK_8D36E385D83CC1` FOREIGN KEY (`state_id`) REFERENCES `client_state` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business`
--

LOCK TABLES `business` WRITE;
/*!40000 ALTER TABLE `business` DISABLE KEYS */;
INSERT INTO `business` VALUES (2,5,2,'Elfic Ticio','elfic@ticio.com','25436101',1,'m742jrwm4cg0wcs4o80g8kkcg4cokgs','2013-06-04 00:13:52','2013-06-04 00:13:52',NULL,NULL),(3,6,3,'ccti','admin_ccti@ccti.cl','232323',1,'bwj1lvp5mrcwc8400cc0soccsg4880g','2013-06-04 00:22:59','2013-06-04 00:22:59','admin','admin');
/*!40000 ALTER TABLE `business` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_state`
--

DROP TABLE IF EXISTS `client_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_state`
--

LOCK TABLES `client_state` WRITE;
/*!40000 ALTER TABLE `client_state` DISABLE KEYS */;
INSERT INTO `client_state` VALUES (5,'s','Básico'),(6,'m','Business'),(7,'l','Full'),(8,'t','Trial');
/*!40000 ALTER TABLE `client_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientstate`
--

DROP TABLE IF EXISTS `clientstate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientstate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientstate`
--

LOCK TABLES `clientstate` WRITE;
/*!40000 ALTER TABLE `clientstate` DISABLE KEYS */;
INSERT INTO `clientstate` VALUES (13,'s','Básico'),(14,'m','Business'),(15,'l','Full'),(16,'t','Trial');
/*!40000 ALTER TABLE `clientstate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coordinate`
--

DROP TABLE IF EXISTS `coordinate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coordinate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `ot_id` int(11) DEFAULT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_CB9CBA17A76ED395` (`user_id`),
  KEY `IDX_CB9CBA17A01D3C68` (`ot_id`),
  CONSTRAINT `FK_CB9CBA17A01D3C68` FOREIGN KEY (`ot_id`) REFERENCES `ot` (`id`),
  CONSTRAINT `FK_CB9CBA17A76ED395` FOREIGN KEY (`user_id`) REFERENCES `fos_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coordinate`
--

LOCK TABLES `coordinate` WRITE;
/*!40000 ALTER TABLE `coordinate` DISABLE KEYS */;
INSERT INTO `coordinate` VALUES (1,2,NULL,-33,-70,'2013-06-04 00:25:49','2013-06-04 00:25:49','admin','admin'),(2,2,NULL,69,69,'2013-06-04 13:32:47','2013-06-04 13:32:47','admin','admin'),(3,2,NULL,-30,-70,'2013-06-04 14:11:20','2013-06-04 14:11:20','admin','admin'),(4,2,NULL,-32,-72,'2013-06-04 14:14:02','2013-06-04 14:14:02','admin','admin'),(5,4,NULL,-32,-72,'2013-06-04 14:21:35','2013-06-04 14:21:35','api','api'),(6,4,NULL,-1,-1,'2013-06-05 11:37:08','2013-06-05 11:37:08','api','api'),(7,4,NULL,-33.4204071,-70.6014214,'2013-06-05 15:34:45','2013-06-05 15:34:45','api','api'),(8,4,NULL,-33.420395,-70.6014373,'2013-06-05 15:35:09','2013-06-05 15:35:09','api','api'),(9,4,NULL,-33.420395,-70.6014373,'2013-06-05 15:35:09','2013-06-05 15:35:09','api','api'),(10,4,NULL,-33.4204101,-70.6014414,'2013-06-05 15:35:39','2013-06-05 15:35:39','api','api'),(11,4,NULL,-33.4203639,-70.6014129,'2013-06-05 15:36:09','2013-06-05 15:36:09','api','api'),(12,4,NULL,-33.420367,-70.6013953,'2013-06-05 15:36:39','2013-06-05 15:36:39','api','api'),(13,4,NULL,-33.4203922,-70.6014404,'2013-06-05 15:37:09','2013-06-05 15:37:09','api','api'),(14,4,NULL,-33.4203963,-70.6014339,'2013-06-05 15:37:39','2013-06-05 15:37:39','api','api'),(15,4,NULL,-33.4203801,-70.6014625,'2013-06-05 15:38:09','2013-06-05 15:38:09','api','api'),(16,4,NULL,-33.4203895,-70.6014341,'2013-06-05 15:38:39','2013-06-05 15:38:39','api','api'),(17,4,NULL,-33.4203905,-70.6014177,'2013-06-05 15:39:09','2013-06-05 15:39:09','api','api'),(18,4,NULL,-33.4204024,-70.6014027,'2013-06-05 15:39:39','2013-06-05 15:39:39','api','api'),(19,4,NULL,-33.4203511,-70.6014418,'2013-06-05 15:40:09','2013-06-05 15:40:09','api','api'),(20,4,NULL,-33.4203097,-70.6014556,'2013-06-05 15:40:39','2013-06-05 15:40:39','api','api'),(21,4,NULL,-33.4203831,-70.6014363,'2013-06-05 15:41:09','2013-06-05 15:41:09','api','api'),(22,4,NULL,-33.4203707,-70.6014145,'2013-06-05 15:41:39','2013-06-05 15:41:39','api','api'),(23,4,NULL,-33.4203832,-70.6014054,'2013-06-05 15:42:09','2013-06-05 15:42:09','api','api'),(24,4,NULL,-33.4203423,-70.6014356,'2013-06-05 15:42:39','2013-06-05 15:42:39','api','api'),(25,4,NULL,-33.4203612,-70.601406,'2013-06-05 15:43:09','2013-06-05 15:43:09','api','api'),(26,4,NULL,-33.4203891,-70.6013929,'2013-06-05 15:43:39','2013-06-05 15:43:39','api','api'),(27,4,NULL,-33.4204126,-70.6013933,'2013-06-05 15:44:09','2013-06-05 15:44:09','api','api'),(28,4,NULL,-33.4203892,-70.6013713,'2013-06-05 15:44:39','2013-06-05 15:44:39','api','api'),(29,4,NULL,-33.4203935,-70.6013936,'2013-06-05 15:45:09','2013-06-05 15:45:09','api','api'),(30,4,NULL,-33.4203662,-70.6014199,'2013-06-05 15:45:39','2013-06-05 15:45:39','api','api'),(31,4,NULL,-33.4204018,-70.6014102,'2013-06-05 15:46:09','2013-06-05 15:46:09','api','api'),(32,4,NULL,-33.4203531,-70.6014495,'2013-06-05 15:46:39','2013-06-05 15:46:39','api','api'),(33,4,NULL,-33.4203975,-70.6014084,'2013-06-05 15:47:09','2013-06-05 15:47:09','api','api'),(34,4,NULL,-33.4203673,-70.6013895,'2013-06-05 15:47:39','2013-06-05 15:47:39','api','api'),(35,4,NULL,-33.4203781,-70.6013983,'2013-06-05 15:48:09','2013-06-05 15:48:09','api','api'),(36,4,NULL,-33.4204061,-70.6013821,'2013-06-05 15:48:39','2013-06-05 15:48:39','api','api'),(37,4,NULL,-33.4203383,-70.6014655,'2013-06-05 15:49:09','2013-06-05 15:49:09','api','api'),(38,4,NULL,-33.4203931,-70.6014241,'2013-06-05 15:49:39','2013-06-05 15:49:39','api','api'),(39,4,NULL,-33.4203805,-70.6014237,'2013-06-05 15:50:09','2013-06-05 15:50:09','api','api'),(40,4,NULL,-33.4204,-70.6014052,'2013-06-05 15:50:39','2013-06-05 15:50:39','api','api'),(41,4,NULL,-33.4204075,-70.6013874,'2013-06-05 15:51:09','2013-06-05 15:51:09','api','api'),(42,4,NULL,-33.4203948,-70.6014124,'2013-06-05 15:51:39','2013-06-05 15:51:39','api','api'),(43,4,NULL,-33.4203996,-70.6014121,'2013-06-05 15:52:09','2013-06-05 15:52:09','api','api'),(44,4,NULL,-33.4203713,-70.6014108,'2013-06-05 15:52:39','2013-06-05 15:52:39','api','api'),(45,4,NULL,-33.4203906,-70.6013859,'2013-06-05 15:53:09','2013-06-05 15:53:09','api','api'),(46,4,NULL,-33.4203474,-70.6014094,'2013-06-05 15:53:39','2013-06-05 15:53:39','api','api'),(47,4,NULL,-33.4203678,-70.6014097,'2013-06-05 15:54:09','2013-06-05 15:54:09','api','api'),(48,4,NULL,-33.4203754,-70.601423,'2013-06-05 15:54:39','2013-06-05 15:54:39','api','api'),(49,4,NULL,-33.4203489,-70.601464,'2013-06-05 15:55:09','2013-06-05 15:55:09','api','api'),(50,4,NULL,-33.4203608,-70.6014655,'2013-06-05 15:55:39','2013-06-05 15:55:39','api','api'),(51,4,NULL,-33.4203653,-70.6014508,'2013-06-05 15:56:09','2013-06-05 15:56:09','api','api'),(52,4,NULL,-33.4203884,-70.6014296,'2013-06-05 15:56:39','2013-06-05 15:56:39','api','api'),(53,4,NULL,-33.4203955,-70.6013931,'2013-06-05 15:57:09','2013-06-05 15:57:09','api','api'),(54,4,NULL,-33.4203775,-70.6013982,'2013-06-05 15:57:39','2013-06-05 15:57:39','api','api'),(55,4,NULL,-33.4203675,-70.6014284,'2013-06-05 15:58:09','2013-06-05 15:58:09','api','api'),(56,4,NULL,-33.4203464,-70.6014241,'2013-06-05 15:58:39','2013-06-05 15:58:39','api','api'),(57,4,NULL,-33.4203675,-70.6014233,'2013-06-05 15:59:09','2013-06-05 15:59:09','api','api'),(58,4,NULL,-33.4203801,-70.6014052,'2013-06-05 15:59:39','2013-06-05 15:59:39','api','api'),(59,4,NULL,-33.4203361,-70.6014299,'2013-06-05 16:00:09','2013-06-05 16:00:09','api','api'),(60,4,NULL,-33.4203864,-70.601376,'2013-06-05 16:00:39','2013-06-05 16:00:39','api','api'),(61,4,NULL,-33.4203516,-70.6014377,'2013-06-05 16:01:09','2013-06-05 16:01:09','api','api'),(62,4,NULL,-33.4204036,-70.60139,'2013-06-05 16:01:39','2013-06-05 16:01:39','api','api'),(63,4,NULL,-33.4203679,-70.6014428,'2013-06-05 16:02:09','2013-06-05 16:02:09','api','api'),(64,4,NULL,-33.4203758,-70.6014014,'2013-06-05 16:02:39','2013-06-05 16:02:39','api','api'),(65,4,NULL,-33.4203905,-70.6014116,'2013-06-05 16:03:09','2013-06-05 16:03:09','api','api'),(66,4,NULL,-33.4203803,-70.601404,'2013-06-05 16:03:39','2013-06-05 16:03:39','api','api'),(67,4,NULL,-33.4203531,-70.6014047,'2013-06-05 16:04:09','2013-06-05 16:04:09','api','api'),(68,4,NULL,-33.4203616,-70.6014447,'2013-06-05 16:04:39','2013-06-05 16:04:39','api','api'),(69,4,NULL,-33.4203951,-70.6013949,'2013-06-05 16:05:09','2013-06-05 16:05:09','api','api'),(70,4,NULL,-33.4203728,-70.6014041,'2013-06-05 16:05:39','2013-06-05 16:05:39','api','api'),(71,4,NULL,-33.4203759,-70.6014027,'2013-06-05 16:06:09','2013-06-05 16:06:09','api','api'),(72,4,NULL,-33.4203677,-70.6014075,'2013-06-05 16:06:39','2013-06-05 16:06:39','api','api'),(73,4,NULL,-33.4204119,-70.6014246,'2013-06-05 16:07:09','2013-06-05 16:07:09','api','api'),(74,4,NULL,-33.4203756,-70.6014222,'2013-06-05 16:07:39','2013-06-05 16:07:39','api','api'),(75,4,NULL,-33.4203442,-70.6014292,'2013-06-05 16:08:09','2013-06-05 16:08:09','api','api'),(76,4,NULL,-33.4203498,-70.6014332,'2013-06-05 16:08:39','2013-06-05 16:08:39','api','api'),(77,4,NULL,-33.4203436,-70.601449,'2013-06-05 16:09:09','2013-06-05 16:09:09','api','api'),(78,4,NULL,-33.4203222,-70.6014768,'2013-06-05 16:09:39','2013-06-05 16:09:39','api','api'),(79,4,NULL,-33.4203394,-70.6015074,'2013-06-05 16:10:09','2013-06-05 16:10:09','api','api'),(80,4,NULL,-33.4203398,-70.6015407,'2013-06-05 16:10:39','2013-06-05 16:10:39','api','api'),(81,4,NULL,-33.4203651,-70.6014901,'2013-06-05 16:11:09','2013-06-05 16:11:09','api','api'),(82,4,NULL,-33.4203865,-70.6014469,'2013-06-05 16:11:40','2013-06-05 16:11:40','api','api'),(83,4,NULL,-33.4204012,-70.601394,'2013-06-05 16:12:09','2013-06-05 16:12:09','api','api'),(84,4,NULL,-33.4204084,-70.6014041,'2013-06-05 16:12:39','2013-06-05 16:12:39','api','api'),(85,4,NULL,-33.4204238,-70.6013792,'2013-06-05 16:13:09','2013-06-05 16:13:09','api','api'),(86,4,NULL,-33.4203862,-70.6013942,'2013-06-05 16:13:39','2013-06-05 16:13:39','api','api'),(87,4,NULL,-33.4203906,-70.6013964,'2013-06-05 16:14:09','2013-06-05 16:14:09','api','api'),(88,4,NULL,-33.4203809,-70.6014289,'2013-06-05 16:14:40','2013-06-05 16:14:40','api','api'),(89,4,NULL,-33.4203886,-70.6014024,'2013-06-05 16:15:10','2013-06-05 16:15:10','api','api'),(90,4,NULL,-33.420385,-70.6014315,'2013-06-05 16:15:39','2013-06-05 16:15:39','api','api'),(91,4,NULL,-33.4203924,-70.6014034,'2013-06-05 16:16:09','2013-06-05 16:16:09','api','api'),(92,4,NULL,-33.4203731,-70.6014134,'2013-06-05 16:16:39','2013-06-05 16:16:39','api','api'),(93,4,NULL,-33.420397,-70.6014228,'2013-06-05 16:17:09','2013-06-05 16:17:09','api','api'),(94,4,NULL,-33.4203623,-70.601436,'2013-06-05 16:17:39','2013-06-05 16:17:39','api','api'),(95,4,NULL,-33.4203829,-70.6013861,'2013-06-05 16:18:09','2013-06-05 16:18:09','api','api'),(96,4,NULL,-33.4203854,-70.6014162,'2013-06-05 16:18:39','2013-06-05 16:18:39','api','api'),(97,4,NULL,-33.4203912,-70.6014015,'2013-06-05 16:19:09','2013-06-05 16:19:09','api','api'),(98,4,NULL,-33.420418,-70.6013978,'2013-06-05 16:19:39','2013-06-05 16:19:39','api','api'),(99,4,NULL,-33.4204041,-70.6014045,'2013-06-05 16:20:09','2013-06-05 16:20:09','api','api'),(100,4,NULL,-33.4203994,-70.6014178,'2013-06-05 16:20:39','2013-06-05 16:20:39','api','api'),(101,4,NULL,-33.420386,-70.6013912,'2013-06-05 16:21:09','2013-06-05 16:21:09','api','api'),(102,4,NULL,-33.4203793,-70.6014063,'2013-06-05 16:21:39','2013-06-05 16:21:39','api','api'),(103,4,NULL,-33.4203712,-70.6014183,'2013-06-05 16:22:09','2013-06-05 16:22:09','api','api'),(104,4,NULL,-33.4203831,-70.6014054,'2013-06-05 16:22:39','2013-06-05 16:22:39','api','api'),(105,4,NULL,-33.4203608,-70.6014084,'2013-06-05 16:23:10','2013-06-05 16:23:10','api','api'),(106,4,NULL,-33.4203793,-70.601406,'2013-06-05 16:23:39','2013-06-05 16:23:39','api','api'),(107,4,NULL,-33.4204046,-70.6013813,'2013-06-05 16:24:09','2013-06-05 16:24:09','api','api'),(108,4,NULL,-33.4204088,-70.6013818,'2013-06-05 16:24:39','2013-06-05 16:24:39','api','api'),(109,4,NULL,-33.4203909,-70.6013683,'2013-06-05 16:25:09','2013-06-05 16:25:09','api','api'),(110,4,NULL,-33.4203981,-70.6014048,'2013-06-05 16:25:39','2013-06-05 16:25:39','api','api'),(111,4,NULL,-33.4203914,-70.6014257,'2013-06-05 16:26:09','2013-06-05 16:26:09','api','api'),(112,4,NULL,-1,-1,'2013-06-05 16:56:43','2013-06-05 16:56:43','api','api'),(113,4,NULL,-1,-1,'2013-06-05 16:59:03','2013-06-05 16:59:03','api','api'),(114,4,NULL,-1,-1,'2013-06-05 17:01:06','2013-06-05 17:01:06','api','api'),(115,4,NULL,-1,-1,'2013-06-05 17:04:43','2013-06-05 17:04:43','api','api'),(116,4,NULL,-23,-1,'2013-06-05 18:45:38','2013-06-05 18:45:38','api','api'),(117,4,NULL,-70,-1,'2013-06-05 18:47:25','2013-06-05 18:47:25','api','api'),(118,4,NULL,-70,-30,'2013-06-05 18:51:12','2013-06-05 18:51:12','api','api'),(119,4,NULL,-71,-31,'2013-06-05 18:51:20','2013-06-05 18:51:20','api','api'),(120,4,NULL,-72,-32,'2013-06-05 18:51:25','2013-06-05 18:51:25','api','api'),(121,4,NULL,-73,-33,'2013-06-05 18:51:31','2013-06-05 18:51:31','api','api'),(122,4,NULL,-70.540831666667,-33.88,'2013-06-05 18:55:12','2013-06-05 18:55:12','api','api'),(123,4,1,33.44593319,70.66092324,'2013-06-05 19:11:35','2013-06-05 19:11:35','api','api'),(124,4,1,33.44602852,70.66149489,'2013-06-05 19:11:41','2013-06-05 19:11:41','api','api'),(125,4,1,33.44599998,70.66128284,'2013-06-05 19:11:42','2013-06-05 19:11:42','api','api'),(126,4,1,33.44602551,70.66150397,'2013-06-05 19:11:44','2013-06-05 19:11:44','api','api'),(127,4,1,33.44598625,70.66162214,'2013-06-05 19:12:10','2013-06-05 19:12:10','api','api'),(128,4,1,33.44615156,70.66163635,'2013-06-05 19:12:11','2013-06-05 19:12:11','api','api'),(129,4,1,33.44621919,70.66171575,'2013-06-05 19:12:14','2013-06-05 19:12:14','api','api'),(130,4,1,33.44621746,70.66183907,'2013-06-05 19:12:16','2013-06-05 19:12:16','api','api'),(131,4,1,33.44618784,70.66194744,'2013-06-05 19:12:17','2013-06-05 19:12:17','api','api'),(132,4,1,33.44622429,70.66234632,'2013-06-05 19:13:02','2013-06-05 19:13:02','api','api'),(133,4,1,33.44628043,70.66245468,'2013-06-05 19:13:04','2013-06-05 19:13:04','api','api'),(134,4,1,33.44622754,70.66254317,'2013-06-05 19:13:05','2013-06-05 19:13:05','api','api'),(135,4,1,33.44614798,70.6625956,'2013-06-05 19:13:07','2013-06-05 19:13:07','api','api'),(136,4,1,33.44605481,70.66260623,'2013-06-05 19:13:09','2013-06-05 19:13:09','api','api'),(137,4,1,33.44596027,70.66264985,'2013-06-05 19:13:12','2013-06-05 19:13:12','api','api'),(138,4,1,33.44579455,70.66263517,'2013-06-05 19:14:48','2013-06-05 19:14:48','api','api'),(139,4,1,33.44576192,70.66253348,'2013-06-05 19:14:51','2013-06-05 19:14:51','api','api'),(140,4,1,33.44568936,70.66259805,'2013-06-05 19:14:53','2013-06-05 19:14:53','api','api'),(141,4,1,33.44562386,70.66267272,'2013-06-05 19:14:56','2013-06-05 19:14:56','api','api'),(142,4,1,33.44553621,70.66273767,'2013-06-05 19:14:58','2013-06-05 19:14:58','api','api'),(143,4,1,33.44543896,70.66278918,'2013-06-05 19:14:59','2013-06-05 19:14:59','api','api'),(144,4,1,33.44536246,70.66287549,'2013-06-05 19:15:02','2013-06-05 19:15:02','api','api'),(145,4,1,33.44531007,70.66276292,'2013-06-05 19:15:03','2013-06-05 19:15:03','api','api'),(146,4,1,33.44523777,70.66283175,'2013-06-05 19:15:05','2013-06-05 19:15:05','api','api'),(147,4,1,33.44512979,70.66282024,'2013-06-05 19:15:07','2013-06-05 19:15:07','api','api'),(148,4,1,33.44504126,70.66279773,'2013-06-05 19:15:09','2013-06-05 19:15:09','api','api'),(149,4,1,33.44458447,70.66302139,'2013-06-05 19:15:18','2013-06-05 19:15:18','api','api'),(150,4,1,33.44463326,70.66289665,'2013-06-05 19:16:19','2013-06-05 19:16:19','api','api'),(151,4,1,33.44462736,70.66276321,'2013-06-05 19:16:31','2013-06-05 19:16:31','api','api'),(152,4,1,33.44458624,70.66265156,'2013-06-05 19:16:37','2013-06-05 19:16:37','api','api'),(153,4,1,33.44451434,70.66253561,'2013-06-05 19:16:40','2013-06-05 19:16:40','api','api'),(154,4,1,33.44451474,70.66242127,'2013-06-05 19:16:41','2013-06-05 19:16:41','api','api'),(155,4,1,33.44452657,70.66231097,'2013-06-05 19:16:43','2013-06-05 19:16:43','api','api'),(156,4,1,33.44451352,70.66219001,'2013-06-05 19:17:02','2013-06-05 19:17:02','api','api'),(157,4,1,33.44458009,70.66211637,'2013-06-05 19:17:04','2013-06-05 19:17:04','api','api'),(158,4,1,33.44446224,70.66190326,'2013-06-05 19:17:21','2013-06-05 19:17:21','api','api'),(159,4,1,33.44454239,70.66183411,'2013-06-05 19:17:29','2013-06-05 19:17:29','api','api'),(160,4,1,33.44434263,70.66166531,'2013-06-05 19:18:07','2013-06-05 19:18:07','api','api'),(161,4,1,33.44436672,70.66155623,'2013-06-05 19:18:12','2013-06-05 19:18:12','api','api'),(162,4,1,33.44427909,70.66158249,'2013-06-05 19:18:48','2013-06-05 19:18:48','api','api'),(163,4,1,33.4442117,70.66170427,'2013-06-05 19:18:54','2013-06-05 19:18:54','api','api'),(164,4,1,33.44411555,70.66166317,'2013-06-05 19:19:02','2013-06-05 19:19:02','api','api'),(165,4,1,33.44402524,70.66164267,'2013-06-05 19:19:21','2013-06-05 19:19:21','api','api'),(166,4,1,33.44393538,70.6616629,'2013-06-05 19:19:24','2013-06-05 19:19:24','api','api'),(167,4,1,33.44384243,70.66174012,'2013-06-05 19:19:33','2013-06-05 19:19:33','api','api'),(168,4,1,33.44375671,70.6617916,'2013-06-05 19:19:44','2013-06-05 19:19:44','api','api'),(169,4,1,33.44371531,70.66168614,'2013-06-05 19:20:01','2013-06-05 19:20:01','api','api'),(170,4,1,33.44365453,70.66177223,'2013-06-05 19:20:20','2013-06-05 19:20:20','api','api');
/*!40000 ALTER TABLE `coordinate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credits`
--

DROP TABLE IF EXISTS `credits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_instruction_id` int(11) NOT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `attention_required` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `credited_amount` decimal(10,5) NOT NULL,
  `crediting_amount` decimal(10,5) NOT NULL,
  `reversing_amount` decimal(10,5) NOT NULL,
  `state` smallint(6) NOT NULL,
  `target_amount` decimal(10,5) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_4117D17E8789B572` (`payment_instruction_id`),
  KEY `IDX_4117D17E4C3A3BB` (`payment_id`),
  CONSTRAINT `FK_4117D17E4C3A3BB` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_4117D17E8789B572` FOREIGN KEY (`payment_instruction_id`) REFERENCES `payment_instructions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credits`
--

LOCK TABLES `credits` WRITE;
/*!40000 ALTER TABLE `credits` DISABLE KEYS */;
/*!40000 ALTER TABLE `credits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ext_log_entries`
--

DROP TABLE IF EXISTS `ext_log_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ext_log_entries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
  `logged_at` datetime NOT NULL,
  `object_id` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `object_class` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `version` int(11) NOT NULL,
  `data` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:array)',
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `log_class_lookup_idx` (`object_class`),
  KEY `log_date_lookup_idx` (`logged_at`),
  KEY `log_user_lookup_idx` (`username`),
  KEY `log_version_lookup_idx` (`object_id`,`object_class`,`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ext_log_entries`
--

LOCK TABLES `ext_log_entries` WRITE;
/*!40000 ALTER TABLE `ext_log_entries` DISABLE KEYS */;
/*!40000 ALTER TABLE `ext_log_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ext_translations`
--

DROP TABLE IF EXISTS `ext_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ext_translations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locale` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
  `object_class` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `field` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `foreign_key` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `lookup_unique_idx` (`locale`,`object_class`,`field`,`foreign_key`),
  KEY `translations_lookup_idx` (`locale`,`object_class`,`foreign_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ext_translations`
--

LOCK TABLES `ext_translations` WRITE;
/*!40000 ALTER TABLE `ext_translations` DISABLE KEYS */;
/*!40000 ALTER TABLE `ext_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `financial_transactions`
--

DROP TABLE IF EXISTS `financial_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `financial_transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `credit_id` int(11) DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `extended_data` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:extended_payment_data)',
  `processed_amount` decimal(10,5) NOT NULL,
  `reason_code` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `reference_number` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `requested_amount` decimal(10,5) NOT NULL,
  `response_code` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` smallint(6) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `tracking_id` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `transaction_type` smallint(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_1353F2D9CE062FF9` (`credit_id`),
  KEY `IDX_1353F2D94C3A3BB` (`payment_id`),
  CONSTRAINT `FK_1353F2D94C3A3BB` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_1353F2D9CE062FF9` FOREIGN KEY (`credit_id`) REFERENCES `credits` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `financial_transactions`
--

LOCK TABLES `financial_transactions` WRITE;
/*!40000 ALTER TABLE `financial_transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `financial_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fos_group`
--

DROP TABLE IF EXISTS `fos_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fos_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_4B019DDB5E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fos_group`
--

LOCK TABLES `fos_group` WRITE;
/*!40000 ALTER TABLE `fos_group` DISABLE KEYS */;
INSERT INTO `fos_group` VALUES (3,'STAFF','a:1:{i:0;s:16:\"ROLE_SUPER_ADMIN\";}'),(4,'CLIENTE','a:1:{i:0;s:10:\"ROLE_ADMIN\";}');
/*!40000 ALTER TABLE `fos_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fos_user`
--

DROP TABLE IF EXISTS `fos_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fos_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` int(11) DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `locked` tinyint(1) NOT NULL,
  `expired` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `confirmation_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `credentials_expired` tinyint(1) NOT NULL,
  `credentials_expire_at` datetime DEFAULT NULL,
  `emailable` tinyint(1) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_957A647992FC23A8` (`username_canonical`),
  UNIQUE KEY `UNIQ_957A6479A0D96FBF` (`email_canonical`),
  KEY `IDX_957A6479A89DB457` (`business_id`),
  CONSTRAINT `FK_957A6479A89DB457` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fos_user`
--

LOCK TABLES `fos_user` WRITE;
/*!40000 ALTER TABLE `fos_user` DISABLE KEYS */;
INSERT INTO `fos_user` VALUES (2,NULL,'admin','admin','goncab380@hotmail.com','goncab380@hotmail.com',1,'hx3w5ndt9iosg80s84kocg88gskcc04','nAAwz7xgPfHGcXaXBoepCUjmdFDutgTLrXD0d3FSWxADJK7hOfeQZhFACNQiENecHwW3Rsm8eSmpE0WWv4T6ng==','2013-06-04 00:20:41',0,0,NULL,NULL,NULL,'a:1:{i:0;s:16:\"ROLE_SUPER_ADMIN\";}',0,NULL,1,'admin','admin','2013-06-04 00:13:52','2013-06-04 00:20:41',NULL,NULL),(3,3,'test','test','sfarias051@gmail.com','sfarias051@gmail.com',0,'dycaafl58e0w4ksck48ksgcoc0g8w8g','pK8O+grK4jqB0CF9XItFJjbytjYNz6+5P8/VnOD/SneNuJTCeF135y33zj2AX8Bq/qisn9KMOt7azDHm2t1M+w==',NULL,0,0,NULL,'JHhMSy7HTQmyLt3QhW0ebJ5RxYfyVFWGCn9Fyd3TLcY',NULL,'a:1:{i:0;s:13:\"ROLE_BUSINESS\";}',0,NULL,NULL,NULL,NULL,'2013-06-04 00:23:16','2013-06-04 00:23:16','admin','admin'),(4,NULL,'api','api','api@api.cl','api@api.cl',1,'nu8ykabjr6okoc808g84o808s8gkgck','qsXscadIe/thkVywIc1fe/mdvP0tcgSPBQ4aFhklN79mpmUrmw7ldOF+0/f6OWNhvVlB1DdGeCJ+xwCpJBxUSA==','2013-06-05 15:34:21',0,0,NULL,NULL,NULL,'a:0:{}',0,NULL,0,'api','api','2013-06-04 14:17:58','2013-06-05 15:34:21','admin',NULL);
/*!40000 ALTER TABLE `fos_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fos_user_group`
--

DROP TABLE IF EXISTS `fos_user_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fos_user_group` (
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`group_id`),
  KEY `IDX_583D1F3EA76ED395` (`user_id`),
  KEY `IDX_583D1F3EFE54D947` (`group_id`),
  CONSTRAINT `FK_583D1F3EFE54D947` FOREIGN KEY (`group_id`) REFERENCES `fos_group` (`id`),
  CONSTRAINT `FK_583D1F3EA76ED395` FOREIGN KEY (`user_id`) REFERENCES `fos_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fos_user_group`
--

LOCK TABLES `fos_user_group` WRITE;
/*!40000 ALTER TABLE `fos_user_group` DISABLE KEYS */;
INSERT INTO `fos_user_group` VALUES (2,3),(4,3);
/*!40000 ALTER TABLE `fos_user_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `alt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ot`
--

DROP TABLE IF EXISTS `ot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `total_km` double DEFAULT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_F4D4D0B2A76ED395` (`user_id`),
  CONSTRAINT `FK_F4D4D0B2A76ED395` FOREIGN KEY (`user_id`) REFERENCES `fos_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ot`
--

LOCK TABLES `ot` WRITE;
/*!40000 ALTER TABLE `ot` DISABLE KEYS */;
INSERT INTO `ot` VALUES (1,4,NULL,'2013-06-05 18:59:05','2013-06-05 19:33:14','2013-06-05 18:59:05','2013-06-05 19:33:14','api','api');
/*!40000 ALTER TABLE `ot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page`
--

DROP TABLE IF EXISTS `page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `menu` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `weigth` int(11) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page`
--

LOCK TABLES `page` WRITE;
/*!40000 ALTER TABLE `page` DISABLE KEYS */;
INSERT INTO `page` VALUES (3,'Sobre Nosotros','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Nosotros',1,1,'about-us'),(4,'Preguntas Frequentes','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','FAQ',2,1,'faq');
/*!40000 ALTER TABLE `page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_instructions`
--

DROP TABLE IF EXISTS `payment_instructions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_instructions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` decimal(10,5) NOT NULL,
  `approved_amount` decimal(10,5) NOT NULL,
  `approving_amount` decimal(10,5) NOT NULL,
  `created_at` datetime NOT NULL,
  `credited_amount` decimal(10,5) NOT NULL,
  `crediting_amount` decimal(10,5) NOT NULL,
  `currency` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `deposited_amount` decimal(10,5) NOT NULL,
  `depositing_amount` decimal(10,5) NOT NULL,
  `extended_data` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:extended_payment_data)',
  `payment_system_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `reversing_approved_amount` decimal(10,5) NOT NULL,
  `reversing_credited_amount` decimal(10,5) NOT NULL,
  `reversing_deposited_amount` decimal(10,5) NOT NULL,
  `state` smallint(6) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_instructions`
--

LOCK TABLES `payment_instructions` WRITE;
/*!40000 ALTER TABLE `payment_instructions` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_instructions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_instruction_id` int(11) NOT NULL,
  `approved_amount` decimal(10,5) NOT NULL,
  `approving_amount` decimal(10,5) NOT NULL,
  `credited_amount` decimal(10,5) NOT NULL,
  `crediting_amount` decimal(10,5) NOT NULL,
  `deposited_amount` decimal(10,5) NOT NULL,
  `depositing_amount` decimal(10,5) NOT NULL,
  `expiration_date` datetime DEFAULT NULL,
  `reversing_approved_amount` decimal(10,5) NOT NULL,
  `reversing_credited_amount` decimal(10,5) NOT NULL,
  `reversing_deposited_amount` decimal(10,5) NOT NULL,
  `state` smallint(6) NOT NULL,
  `target_amount` decimal(10,5) NOT NULL,
  `attention_required` tinyint(1) NOT NULL,
  `expired` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_65D29B328789B572` (`payment_instruction_id`),
  CONSTRAINT `FK_65D29B328789B572` FOREIGN KEY (`payment_instruction_id`) REFERENCES `payment_instructions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `featured` tinyint(1) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
INSERT INTO `plan` VALUES (1,'Básico',NULL,1,1),(2,'Full',NULL,0,3),(3,'Business',NULL,1,2);
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` int(11) DEFAULT NULL,
  `comment` longtext COLLATE utf8_unicode_ci NOT NULL,
  `approved` tinyint(1) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_794381C6A89DB457` (`business_id`),
  CONSTRAINT `FK_794381C6A89DB457` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscription` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paymentInstruction_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_A3C664D3FD913E4D` (`paymentInstruction_id`),
  CONSTRAINT `FK_A3C664D3FD913E4D` FOREIGN KEY (`paymentInstruction_id`) REFERENCES `payment_instructions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
INSERT INTO `subscription` VALUES (2,'2013-06-04 00:13:52','2013-06-04 00:13:52',NULL,NULL,NULL),(3,'2013-06-04 00:22:59','2013-06-04 00:22:59','admin','admin',NULL);
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_97A0ADA35D83CC1` (`state_id`),
  KEY `IDX_97A0ADA3A76ED395` (`user_id`),
  CONSTRAINT `FK_97A0ADA3A76ED395` FOREIGN KEY (`user_id`) REFERENCES `fos_user` (`id`),
  CONSTRAINT `FK_97A0ADA35D83CC1` FOREIGN KEY (`state_id`) REFERENCES `ticket_state` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_state`
--

DROP TABLE IF EXISTS `ticket_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket_state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_state`
--

LOCK TABLES `ticket_state` WRITE;
/*!40000 ALTER TABLE `ticket_state` DISABLE KEYS */;
INSERT INTO `ticket_state` VALUES (4,'Nuevo'),(5,'Abierto'),(6,'Cerrado');
/*!40000 ALTER TABLE `ticket_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticketstate`
--

DROP TABLE IF EXISTS `ticketstate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticketstate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticketstate`
--

LOCK TABLES `ticketstate` WRITE;
/*!40000 ALTER TABLE `ticketstate` DISABLE KEYS */;
INSERT INTO `ticketstate` VALUES (10,'Nuevo'),(11,'Abierto'),(12,'Cerrado');
/*!40000 ALTER TABLE `ticketstate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehicle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` int(11) DEFAULT NULL,
  `manufacturer` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fuel` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `kilometer_per_liter` decimal(10,0) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_1B80E486A89DB457` (`business_id`),
  CONSTRAINT `FK_1B80E486A89DB457` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_mantention`
--

DROP TABLE IF EXISTS `vehicle_mantention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehicle_mantention` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle_id` int(11) DEFAULT NULL,
  `date_from` date DEFAULT NULL,
  `date_to` date DEFAULT NULL,
  `problem` longtext COLLATE utf8_unicode_ci,
  `solution` longtext COLLATE utf8_unicode_ci,
  `fixed` tinyint(1) DEFAULT NULL,
  `more_info` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_415010EB545317D1` (`vehicle_id`),
  CONSTRAINT `FK_415010EB545317D1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_mantention`
--

LOCK TABLES `vehicle_mantention` WRITE;
/*!40000 ALTER TABLE `vehicle_mantention` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicle_mantention` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiclemantention`
--

DROP TABLE IF EXISTS `vehiclemantention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehiclemantention` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle_id` int(11) DEFAULT NULL,
  `date_from` date DEFAULT NULL,
  `date_to` date DEFAULT NULL,
  `problem` longtext COLLATE utf8_unicode_ci,
  `solution` longtext COLLATE utf8_unicode_ci,
  `fixed` tinyint(1) DEFAULT NULL,
  `more_info` longtext COLLATE utf8_unicode_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_7EE17B39545317D1` (`vehicle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiclemantention`
--

LOCK TABLES `vehiclemantention` WRITE;
/*!40000 ALTER TABLE `vehiclemantention` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehiclemantention` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-06-09 18:28:30
