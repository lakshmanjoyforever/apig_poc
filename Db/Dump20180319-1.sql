-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: apigovernance2
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
-- Table structure for table `api_capabilities`
--

DROP TABLE IF EXISTS `api_capabilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_capabilities` (
  `API_CAPABILITIES_ID` int(11) NOT NULL AUTO_INCREMENT,
  `API_CAPABILITY_NAME` varchar(200) DEFAULT NULL,
  `API_CAPABILITY_OWNER` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`API_CAPABILITIES_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_capabilities`
--

LOCK TABLES `api_capabilities` WRITE;
/*!40000 ALTER TABLE `api_capabilities` DISABLE KEYS */;
INSERT INTO `api_capabilities` VALUES (1,'Cash Management','JOHN'),(2,'Fund Accounting','JIM'),(3,'Trade Management','TODD');
/*!40000 ALTER TABLE `api_capabilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_capabilities_resource_main_mapping`
--

DROP TABLE IF EXISTS `api_capabilities_resource_main_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_capabilities_resource_main_mapping` (
  `API_CAPABILITIES_RESOURCE_MAIN_MAPPING_ID` int(11) NOT NULL AUTO_INCREMENT,
  `API_MAIN_ID` int(11) DEFAULT NULL,
  `API_CAPABILITIES_RESOURCES_MAPPING_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`API_CAPABILITIES_RESOURCE_MAIN_MAPPING_ID`),
  KEY `FK_API_MAIN_idx` (`API_MAIN_ID`),
  KEY `FK_API_CAPABILITIESRESOURCES_MAPPING_idx` (`API_CAPABILITIES_RESOURCES_MAPPING_ID`),
  CONSTRAINT `FK_API_CAPABILITIESRESOURCES_MAPPING` FOREIGN KEY (`API_CAPABILITIES_RESOURCES_MAPPING_ID`) REFERENCES `api_capabilities_resources_mapping` (`API_CAPABILITIES_MAPPING_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_API_MAIN` FOREIGN KEY (`API_MAIN_ID`) REFERENCES `api_main` (`API_MAIN_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_capabilities_resource_main_mapping`
--

LOCK TABLES `api_capabilities_resource_main_mapping` WRITE;
/*!40000 ALTER TABLE `api_capabilities_resource_main_mapping` DISABLE KEYS */;
INSERT INTO `api_capabilities_resource_main_mapping` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,2,5),(6,3,6);
/*!40000 ALTER TABLE `api_capabilities_resource_main_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_capabilities_resources_mapping`
--

DROP TABLE IF EXISTS `api_capabilities_resources_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_capabilities_resources_mapping` (
  `API_CAPABILITIES_MAPPING_ID` int(11) NOT NULL AUTO_INCREMENT,
  `API_CAPABILITIES_ID` int(11) DEFAULT NULL,
  `API_RESOURCES_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`API_CAPABILITIES_MAPPING_ID`),
  KEY `API_CAPABILITIES_RESMAPPING_idx` (`API_CAPABILITIES_ID`),
  KEY `API_RESOURCES_CAPRESMAPPING_idx` (`API_RESOURCES_ID`),
  CONSTRAINT `API_CAPABILITIES_RESMAPPING` FOREIGN KEY (`API_CAPABILITIES_ID`) REFERENCES `api_capabilities` (`API_CAPABILITIES_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `API_RESOURCES_CAPRESMAPPING` FOREIGN KEY (`API_RESOURCES_ID`) REFERENCES `api_resources` (`API_RESOURCES_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_capabilities_resources_mapping`
--

LOCK TABLES `api_capabilities_resources_mapping` WRITE;
/*!40000 ALTER TABLE `api_capabilities_resources_mapping` DISABLE KEYS */;
INSERT INTO `api_capabilities_resources_mapping` VALUES (1,1,4),(2,1,6),(3,1,7),(4,1,8),(5,2,5),(6,3,9);
/*!40000 ALTER TABLE `api_capabilities_resources_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_info`
--

DROP TABLE IF EXISTS `api_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_info` (
  `Id` int(11) NOT NULL,
  `api_main_id` int(11) DEFAULT NULL,
  `API_DEPENDENCIES` varchar(150) DEFAULT NULL,
  `INTENTED_FOR_INTERNAL_UI` char(1) DEFAULT NULL,
  `DATA_SOURCES` varchar(200) DEFAULT NULL,
  `ENTITLEMENT_SERVICES` varchar(200) DEFAULT NULL,
  `VALUE_PROPOSITION` varchar(500) DEFAULT NULL,
  `CLIENT_SEGMENTS` varchar(45) DEFAULT NULL,
  `BUSINESS_CAPABILITIES` varchar(45) DEFAULT NULL,
  `REVENUE_MODEL` varchar(300) DEFAULT NULL,
  `REVENUE_GENERATION` decimal(8,2) DEFAULT NULL,
  `ESTIMATED_COST_TO_BUILD` decimal(8,2) DEFAULT NULL,
  `SAVINGS` decimal(8,2) DEFAULT NULL,
  `LEVEL_OF_EFFORT` int(11) DEFAULT NULL,
  `DURATION` int(11) DEFAULT NULL,
  `AVG_NUMBER_OF_CALLS` int(11) DEFAULT NULL,
  `SLA` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_apiinfo_main_idx` (`api_main_id`),
  CONSTRAINT `FK_apiinfo_main` FOREIGN KEY (`api_main_id`) REFERENCES `api_main` (`API_MAIN_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_info`
--

LOCK TABLES `api_info` WRITE;
/*!40000 ALTER TABLE `api_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_main`
--

DROP TABLE IF EXISTS `api_main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_main` (
  `API_MAIN_ID` int(11) NOT NULL,
  `API_NAME` varchar(200) DEFAULT NULL,
  `JIRA_TICKET` varchar(250) DEFAULT NULL,
  `IS_EXTERNAL` char(1) DEFAULT NULL,
  `IS_NEW` char(1) DEFAULT NULL,
  `API_TYPE` varchar(45) DEFAULT NULL,
  `CREATED_BY` varchar(45) DEFAULT NULL,
  `CREATED_DATE` datetime DEFAULT NULL,
  `UPDATED_BY` varchar(45) DEFAULT NULL,
  `UPDATED_DATE` datetime DEFAULT NULL,
  `TARGET_DATE` datetime DEFAULT NULL,
  PRIMARY KEY (`API_MAIN_ID`),
  UNIQUE KEY `JIRATicket_UNIQUE` (`JIRA_TICKET`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Api requests';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_main`
--

LOCK TABLES `api_main` WRITE;
/*!40000 ALTER TABLE `api_main` DISABLE KEYS */;
INSERT INTO `api_main` VALUES (1,'CASH API','1','Y','Y','',NULL,NULL,NULL,NULL,NULL),(2,'FUND API','2','Y','Y','',NULL,NULL,NULL,NULL,NULL),(3,'TRADE API','3','Y','Y','',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `api_main` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_operations`
--

DROP TABLE IF EXISTS `api_operations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_operations` (
  `API_OPERATIONS_ID` int(11) NOT NULL AUTO_INCREMENT,
  `API_OPERATION_NAME` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`API_OPERATIONS_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_operations`
--

LOCK TABLES `api_operations` WRITE;
/*!40000 ALTER TABLE `api_operations` DISABLE KEYS */;
INSERT INTO `api_operations` VALUES (1,'GetSecuritiesSettlementTransactionStatusAdvice'),(2,'GetSecuritiesBalanceCustodyReport'),(3,'GetFundEstimatedCashForecastReport'),(4,'GetActivityReport');
/*!40000 ALTER TABLE `api_operations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_operations_resources_mapping`
--

DROP TABLE IF EXISTS `api_operations_resources_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_operations_resources_mapping` (
  `API_OPERATIONS_MAPPING_ID` int(11) NOT NULL,
  `API_OPERATIONS_ID` int(11) DEFAULT NULL,
  `API_RESOURCES_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`API_OPERATIONS_MAPPING_ID`),
  KEY `fk_api_operations_resources_mapping_api_operations1_idx` (`API_OPERATIONS_ID`),
  KEY `fk_api_operations_resources_mapping_api_resources1_idx` (`API_RESOURCES_ID`),
  CONSTRAINT `fk_api_operations_resources_mapping_api_operations1` FOREIGN KEY (`API_OPERATIONS_ID`) REFERENCES `api_operations` (`API_OPERATIONS_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_api_operations_resources_mapping_api_resources1` FOREIGN KEY (`API_RESOURCES_ID`) REFERENCES `api_resources` (`API_RESOURCES_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_operations_resources_mapping`
--

LOCK TABLES `api_operations_resources_mapping` WRITE;
/*!40000 ALTER TABLE `api_operations_resources_mapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_operations_resources_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_resources`
--

DROP TABLE IF EXISTS `api_resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_resources` (
  `API_RESOURCES_ID` int(11) NOT NULL,
  `API_RESOURCE_NAME` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`API_RESOURCES_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_resources`
--

LOCK TABLES `api_resources` WRITE;
/*!40000 ALTER TABLE `api_resources` DISABLE KEYS */;
INSERT INTO `api_resources` VALUES (4,'SecuritiesSettlementTransactionStatusAdvice'),(5,'FundEstimatedCashForecastReport'),(6,'BankToCustomerStatement'),(7,'BankToCustomerAccountReport'),(8,'SecuritiesBalanceCustodyReport'),(9,'ActivityReport');
/*!40000 ALTER TABLE `api_resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_resources_main_mapping`
--

DROP TABLE IF EXISTS `api_resources_main_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_resources_main_mapping` (
  `API_RESOURCES_MAPPING_ID` int(11) NOT NULL AUTO_INCREMENT,
  `API_MAIN_ID` int(11) DEFAULT NULL,
  `API_RESOURCES_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`API_RESOURCES_MAPPING_ID`),
  KEY `API_RESOURCES_idx` (`API_MAIN_ID`),
  KEY `AP_RESOURCES_RESOURCEMAPPING_idx` (`API_RESOURCES_ID`),
  CONSTRAINT `API_MAIN_RESOURCES_MAPPING` FOREIGN KEY (`API_MAIN_ID`) REFERENCES `api_main` (`API_MAIN_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `AP_RESOURCES_RESOURCEMAPPING` FOREIGN KEY (`API_RESOURCES_ID`) REFERENCES `api_resources` (`API_RESOURCES_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_resources_main_mapping`
--

LOCK TABLES `api_resources_main_mapping` WRITE;
/*!40000 ALTER TABLE `api_resources_main_mapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_resources_main_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_tracker`
--

DROP TABLE IF EXISTS `api_tracker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_tracker` (
  `API_TRACKER_ID` int(11) NOT NULL,
  `API_MAIN_ID` int(11) DEFAULT NULL,
  `TODAY_DATE` datetime DEFAULT NULL,
  `NARB_REVIEW_DATE` datetime DEFAULT NULL,
  `NOTIFIED_IN_JIRA` char(1) DEFAULT NULL,
  `ADDED_TO_INVITE` char(1) DEFAULT NULL,
  `REVIEWED` char(1) DEFAULT NULL,
  `API_STATUS` int(11) DEFAULT NULL,
  `REFACTOR_DATE` datetime DEFAULT NULL,
  `NOTES` varchar(1500) DEFAULT NULL,
  `BUSINESS_UNIT` varchar(200) DEFAULT NULL,
  `BUSINESS_PROD_OWNER` varchar(200) DEFAULT NULL,
  `REQUESTER` varchar(200) DEFAULT NULL,
  `PROJECT_MANAGER` varchar(200) DEFAULT NULL,
  `TECHNICAL_LEAD` varchar(200) DEFAULT NULL,
  `DCA` varchar(200) DEFAULT NULL,
  `BUSINESS_ANALYST` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`API_TRACKER_ID`),
  KEY `API_MAIN_TRACKER_MAPPING_idx` (`API_MAIN_ID`),
  CONSTRAINT `API_MAIN_TRACKER_MAPPING` FOREIGN KEY (`API_MAIN_ID`) REFERENCES `api_main` (`API_MAIN_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_tracker`
--

LOCK TABLES `api_tracker` WRITE;
/*!40000 ALTER TABLE `api_tracker` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_tracker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'apigovernance2'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-19 21:50:59
