-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(128) NOT NULL,
    `passwordHash` VARCHAR(128) NOT NULL,
    `role` ENUM('USER', 'MODERATOR', 'ADMIN', 'ROOT') NOT NULL DEFAULT 'USER',
    `status` ENUM('ACTIVE', 'BANNED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `lastOnlineAt` DATETIME(0) NULL,

    UNIQUE INDEX `Users_username_key`(`username`),
    INDEX `user_status_idx`(`status`),
    INDEX `user_role_idx`(`role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
