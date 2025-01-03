-- MariaDB dump 10.19  Distrib 10.6.12-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 10.98.0.83    Database: tgui_log
-- ------------------------------------------------------
-- Server version	10.11.1-MariaDB-1:10.11.1+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api_logging`
--

DROP TABLE IF EXISTS `api_logging`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_logging` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '',
  `uid` varchar(255) NOT NULL DEFAULT '',
  `user_ip` varchar(255) NOT NULL DEFAULT '',
  `obj_name` varchar(255) NOT NULL DEFAULT '',
  `obj_id` varchar(255) NOT NULL DEFAULT '',
  `action` varchar(255) NOT NULL DEFAULT '',
  `section` varchar(255) NOT NULL DEFAULT '',
  `message` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1297 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cm_log`
--

DROP TABLE IF EXISTS `cm_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cm_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` timestamp NULL DEFAULT NULL,
  `timestamp` int(11) NOT NULL DEFAULT 0,
  `device_id` int(11) NOT NULL DEFAULT 0,
  `device_name` varchar(255) DEFAULT NULL,
  `query_id` int(11) NOT NULL DEFAULT 0,
  `query_name` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `protocol` varchar(255) DEFAULT NULL,
  `port` int(11) DEFAULT NULL,
  `uname_type` varchar(255) DEFAULT NULL,
  `uname` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `post_buffer`
--

DROP TABLE IF EXISTS `post_buffer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_buffer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `server` varchar(255) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `user_ipaddr` varchar(255) DEFAULT NULL,
  `device_ipaddr` varchar(255) DEFAULT NULL,
  `count` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `post_log`
--

DROP TABLE IF EXISTS `post_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `server` varchar(255) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `user_ipaddr` varchar(255) DEFAULT NULL,
  `device_ipaddr` varchar(255) DEFAULT NULL,
  `receivers` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tac_log_accounting`
--

DROP TABLE IF EXISTS `tac_log_accounting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tac_log_accounting` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `server` varchar(255) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `nas` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `line` varchar(255) DEFAULT NULL,
  `nac` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `task_id` varchar(255) DEFAULT NULL,
  `timezone` varchar(255) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `priv-lvl` varchar(255) DEFAULT NULL,
  `cmd` varchar(255) DEFAULT NULL,
  `disc-cause` varchar(255) DEFAULT NULL,
  `disc-cause-ext` varchar(255) DEFAULT NULL,
  `pre-session-time` varchar(255) DEFAULT NULL,
  `elapsed_time` varchar(255) DEFAULT NULL,
  `stop_time` varchar(255) DEFAULT NULL,
  `nas-rx-speed` varchar(255) DEFAULT NULL,
  `nas-tx-speed` varchar(255) DEFAULT NULL,
  `unknown` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tac_log_authentication`
--

DROP TABLE IF EXISTS `tac_log_authentication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tac_log_authentication` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `server` varchar(255) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `nas` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `line` varchar(255) DEFAULT NULL,
  `nac` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `unknown` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4361 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tac_log_authorization`
--

DROP TABLE IF EXISTS `tac_log_authorization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tac_log_authorization` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `server` varchar(255) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `nas` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `line` varchar(255) DEFAULT NULL,
  `nac` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `cmd` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-09 16:17:12
