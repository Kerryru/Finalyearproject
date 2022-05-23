/*
 Navicat Premium Data Transfer

 Source Server         : 1111
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 04/05/2022 17:11:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` varchar(255) NOT NULL,
  `occupation_id` varchar(255) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_introduction` varchar(255) NOT NULL,
  `course_teacher` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `couse` (`occupation_id`),
  CONSTRAINT `couse` FOREIGN KEY (`occupation_id`) REFERENCES `occupation` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of course
-- ----------------------------
BEGIN;
INSERT INTO `course` (`id`, `occupation_id`, `course_name`, `course_introduction`, `course_teacher`) VALUES ('1', '1', 'JAVA', 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.', 'Peter');
INSERT INTO `course` (`id`, `occupation_id`, `course_name`, `course_introduction`, `course_teacher`) VALUES ('2', '1', 'HTML', 'program language', 'Mark');
COMMIT;

-- ----------------------------
-- Table structure for discusstion
-- ----------------------------
DROP TABLE IF EXISTS `discusstion`;
CREATE TABLE `discusstion` (
  `id` varchar(255) NOT NULL,
  `forum_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `discusstion_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `discusstion_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user_id`),
  KEY `forum` (`forum_id`),
  CONSTRAINT `forum` FOREIGN KEY (`forum_id`) REFERENCES `forum` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `user_info` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of discusstion
-- ----------------------------
BEGIN;
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('0bafb682-cb84-11ec-98c4-723ede9e7fa1', '2', '1', '12', '2022-05-04 16:27:33');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('31262730-cb83-11ec-98c4-723ede9e7fa1', '1', '2', 'dddd', '2022-05-04 16:21:26');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('379097b4-cb82-11ec-98c4-723ede9e7fa1', '1', '2', '', '2022-05-04 16:14:28');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('565ee2ea-cb82-11ec-98c4-723ede9e7fa1', '1', '2', '', '2022-05-04 16:15:19');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('5fc8fbac-cb84-11ec-98c4-723ede9e7fa1', '2', '1', '12e21', '2022-05-04 16:29:54');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('7UmSLlnm5H', '2', '1', 'That\'s a good idea', '2000-03-12 14:32:23');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('8a9681c6-cb82-11ec-98c4-723ede9e7fa1', '1', '2', '', '2022-05-04 16:16:47');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('a18ff6f4-cb83-11ec-98c4-723ede9e7fa1', '1', '2', '222', '2022-05-04 16:24:35');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('a67ee818-cb84-11ec-98c4-723ede9e7fa1', '2', '1', '1221221', '2022-05-04 16:31:53');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('b444bdc0-cb83-11ec-98c4-723ede9e7fa1', '1', '2', '2222222', '2022-05-04 16:25:06');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('BCe5EFEMPo', '2', '2', 'It\'s good idea', '2019-10-05 20:39:01');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('c84f930c-cb7f-11ec-98c4-723ede9e7fa1', '2', '1', 'practice', '2022-05-04 15:57:02');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('cb94a058-cb83-11ec-98c4-723ede9e7fa1', '1', '2', '1213', '2022-05-04 16:25:45');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('d25f3a32-cb84-11ec-98c4-723ede9e7fa1', '2', '1', 'dadasds', '2022-05-04 16:33:06');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('d8f62f0a-cb83-11ec-98c4-723ede9e7fa1', '1', '2', '1213', '2022-05-04 16:26:08');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('d8Y9lijuA1', '2', '1', 'It\'s difficult for me to learn it', '2007-06-23 22:59:23');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('e59c5044-cb84-11ec-98c4-723ede9e7fa1', '2', '1', 'dadasds', '2022-05-04 16:33:06');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('ea7b70ba-cb82-11ec-98c4-723ede9e7fa1', '1', '2', '3333', '2022-05-04 16:19:28');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('f7598592-cb82-11ec-98c4-723ede9e7fa1', '1', '2', '4444', '2022-05-04 16:19:49');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('GlZ8JFgCVe', '2', '2', 'ty', '2000-09-24 13:16:20');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('GQzDalOjhO', '2', '1', 'How should I do', '2002-06-22 17:29:33');
INSERT INTO `discusstion` (`id`, `forum_id`, `user_id`, `discusstion_content`, `discusstion_time`) VALUES ('z9gvtdMMQD', '2', '2', 'I dont think so', '2008-03-08 12:53:19');
COMMIT;

-- ----------------------------
-- Table structure for forum
-- ----------------------------
DROP TABLE IF EXISTS `forum`;
CREATE TABLE `forum` (
  `id` varchar(255) NOT NULL,
  `course_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `forum_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `forum_` (`course_id`),
  CONSTRAINT `forum_` FOREIGN KEY (`course_id`) REFERENCES `occupation` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of forum
-- ----------------------------
BEGIN;
INSERT INTO `forum` (`id`, `course_id`, `forum_name`) VALUES ('1', '2', 'Let\'s talk about Lawer');
INSERT INTO `forum` (`id`, `course_id`, `forum_name`) VALUES ('2', '1', 'Job for JAVA Developer');
COMMIT;

-- ----------------------------
-- Table structure for occupation
-- ----------------------------
DROP TABLE IF EXISTS `occupation`;
CREATE TABLE `occupation` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `occupation_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `occupation_introduction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of occupation
-- ----------------------------
BEGIN;
INSERT INTO `occupation` (`id`, `occupation_name`, `occupation_introduction`) VALUES ('1', 'Web Developer', 'Web Developer refers to a programmer who is good at or specialized in the development of World Wide Web applications, or completes the distribution of web applications from web server to web browser via http.');
INSERT INTO `occupation` (`id`, `occupation_name`, `occupation_introduction`) VALUES ('2', 'Management', 'Management refers to the activity process in which the managers in a certain organization coordinate the activities of others through the implementation of planning, organization, leadership, coordination, control and other functions, so that others can achieve the set goals with themselves.');
COMMIT;

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `user_id` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_info
-- ----------------------------
BEGIN;
INSERT INTO `user_info` (`user_id`, `user_password`, `user_phone`, `user_name`) VALUES ('1', 'YyanYycLSv', '21-5724-9926', 'Bob');
INSERT INTO `user_info` (`user_id`, `user_password`, `user_phone`, `user_name`) VALUES ('2', 'nRohwvJ89M', '213-132-9328', 'James');
INSERT INTO `user_info` (`user_id`, `user_password`, `user_phone`, `user_name`) VALUES ('581d1f54-cac7-11ec-98c4-723ede9e7fa1', '123456', '123456', 'HaoDe');
INSERT INTO `user_info` (`user_id`, `user_password`, `user_phone`, `user_name`) VALUES ('a0e2a286-cac7-11ec-98c4-723ede9e7fa1', '123456', '123456', 'HaoD');
INSERT INTO `user_info` (`user_id`, `user_password`, `user_phone`, `user_name`) VALUES ('a8be5702-cac7-11ec-98c4-723ede9e7fa1', '444444', '3333333', '111');
INSERT INTO `user_info` (`user_id`, `user_password`, `user_phone`, `user_name`) VALUES ('eceeaa8c-cac5-11ec-98c4-723ede9e7fa1', '123456', '13363852690', 'js');
INSERT INTO `user_info` (`user_id`, `user_password`, `user_phone`, `user_name`) VALUES ('eec811b6-cac7-11ec-98c4-723ede9e7fa1', 'kmkmklmlk', '44444444', 'Bok');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
