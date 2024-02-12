-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema learn
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema learn
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `learn` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `learn` ;

-- -----------------------------------------------------
-- Table `learn`.`lessons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `learn`.`lessons` (
  `idlessons` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idlessons`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `learn`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `learn`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `pwd` VARCHAR(255) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `image` VARCHAR(255) NOT NULL DEFAULT 'https://shorturl.at/dGPRW',
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `learn`.`favorit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `learn`.`favorit` (
  `idfavorit` INT NOT NULL AUTO_INCREMENT,
  `user_iduser` INT NOT NULL,
  `lessons_idlessons` INT NOT NULL,
  PRIMARY KEY (`idfavorit`),
  INDEX `fk_favorit_user1_idx` (`user_iduser` ASC) VISIBLE,
  INDEX `fk_favorit_lessons1_idx` (`lessons_idlessons` ASC) VISIBLE,
  CONSTRAINT `fk_favorit_lessons1`
    FOREIGN KEY (`lessons_idlessons`)
    REFERENCES `learn`.`lessons` (`idlessons`),
  CONSTRAINT `fk_favorit_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `learn`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `learn`.`lessons_link`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `learn`.`lessons_link` (
  `idlessons_link` INT NOT NULL AUTO_INCREMENT,
  `urlvid` VARCHAR(255) NOT NULL,
  `lessons_idlessons` INT NOT NULL,
  PRIMARY KEY (`idlessons_link`),
  INDEX `fk_lessons_link_lessons1_idx` (`lessons_idlessons` ASC) VISIBLE,
  CONSTRAINT `fk_lessons_link_lessons1`
    FOREIGN KEY (`lessons_idlessons`)
    REFERENCES `learn`.`lessons` (`idlessons`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `learn`.`test`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `learn`.`test` (
  `idtest` INT NOT NULL AUTO_INCREMENT,
  `score` VARCHAR(45) NOT NULL,
  `user_iduser` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtest`),
  INDEX `fk_test_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_test_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `learn`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
