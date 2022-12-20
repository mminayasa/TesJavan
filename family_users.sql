-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: family_app
-- Generation Time: 2022-12-20 23:24:54.5760
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS family_users_id_seq;
DROP TYPE IF EXISTS "public"."enum_family_users_gender";
CREATE TYPE "public"."enum_family_users_gender" AS ENUM ('male', 'female');

-- Table Definition
CREATE TABLE "public"."family_users" (
    "id" int4 NOT NULL DEFAULT nextval('family_users_id_seq'::regclass),
    "name" varchar(255),
    "gender" "public"."enum_family_users_gender",
    "parent_id" int4,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."family_users" ("id", "name", "gender", "parent_id", "createdAt", "updatedAt") VALUES
(1, 'Bani', 'male', NULL, '2022-12-20 21:51:38.289+07', '2022-12-20 22:08:03.952+07'),
(2, 'Budi', 'male', 1, '2022-12-20 21:57:43.649+07', '2022-12-20 21:57:43.649+07'),
(3, 'Nida', 'female', 1, '2022-12-20 22:05:32.521+07', '2022-12-20 22:05:32.521+07'),
(4, 'Andi', 'male', 1, '2022-12-20 22:54:02.623+07', '2022-12-20 22:54:02.623+07'),
(5, 'Sigit', 'male', 1, '2022-12-20 22:54:15.994+07', '2022-12-20 22:54:15.994+07'),
(6, 'Hari', 'male', 2, '2022-12-20 22:54:58.538+07', '2022-12-20 22:54:58.538+07'),
(7, 'Siti', 'female', 2, '2022-12-20 22:56:10.998+07', '2022-12-20 22:56:10.998+07'),
(8, 'Bila', 'female', 3, '2022-12-20 22:56:35.936+07', '2022-12-20 22:56:35.936+07'),
(9, 'Lesti', 'female', 3, '2022-12-20 22:56:48.843+07', '2022-12-20 22:56:48.843+07'),
(10, 'Diki', 'male', 4, '2022-12-20 22:57:22.173+07', '2022-12-20 22:57:22.173+07'),
(11, 'Doni', 'male', 5, '2022-12-20 22:57:44.976+07', '2022-12-20 22:57:44.976+07'),
(12, 'Toni', 'male', 5, '2022-12-20 22:57:50.526+07', '2022-12-20 22:57:50.526+07'),
(13, 'Tonik', 'male', 5, '2022-12-20 22:58:06.436+07', '2022-12-20 22:58:06.436+07');
