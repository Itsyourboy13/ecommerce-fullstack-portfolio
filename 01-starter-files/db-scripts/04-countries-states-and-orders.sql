-- -----------------------------------------------------
-- Countries, states, customers, addresses and orders
--
-- Schema generated from the JPA entities in
-- 02-backend/spring-boot-ecommerce/src/main/java/com/luv2code/ecommerce/entity
-- plus a small set of sample countries/states for the checkout form.
-- Run after 02-create-products.sql (or 03-refresh-database-with-100-products.sql).
-- -----------------------------------------------------
USE `full-stack-ecommerce`;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `country`;
DROP TABLE IF EXISTS `state`;
DROP TABLE IF EXISTS `customer`;
DROP TABLE IF EXISTS `address`;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
CREATE TABLE `state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKghic7mqjt6qb9vq7up7awu0er` (`country_id`),
  CONSTRAINT `FKghic7mqjt6qb9vq7up7awu0er` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB;
CREATE TABLE `customer` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
CREATE TABLE `address` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_created` datetime(6) DEFAULT NULL,
  `last_updated` datetime(6) DEFAULT NULL,
  `order_tracking_number` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `total_price` decimal(38,2) DEFAULT NULL,
  `total_quantity` int(11) DEFAULT NULL,
  `billing_address_id` bigint(20) DEFAULT NULL,
  `customer_id` bigint(20) DEFAULT NULL,
  `shipping_address_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKi4xhef5x6drd02us28r33k430` (`billing_address_id`),
  UNIQUE KEY `UKsdv8vvdhj9gxm0dfoeh2rqvkh` (`shipping_address_id`),
  KEY `FK624gtjin3po807j3vix093tlf` (`customer_id`),
  CONSTRAINT `FK624gtjin3po807j3vix093tlf` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FKh0uue95ltjysfmkqb5abgk7tj` FOREIGN KEY (`shipping_address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `FKqraecqgbbr1p37ic9dr44e2dr` FOREIGN KEY (`billing_address_id`) REFERENCES `address` (`id`)
) ENGINE=InnoDB;
CREATE TABLE `order_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit_price` decimal(38,2) DEFAULT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt4dc2r9nbvbujrljv3e23iibt` (`order_id`),
  CONSTRAINT `FKt4dc2r9nbvbujrljv3e23iibt` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `country` (`id`, `code`, `name`) VALUES
  (1, 'US', 'United States'),
  (2, 'GB', 'United Kingdom'),
  (3, 'CA', 'Canada');

INSERT INTO `state` (`name`, `country_id`) VALUES
  ('Utah', 1), ('California', 1), ('New York', 1), ('Texas', 1),
  ('England', 2), ('Scotland', 2), ('Wales', 2), ('Northern Ireland', 2),
  ('Ontario', 3), ('British Columbia', 3), ('Quebec', 3), ('Alberta', 3);
