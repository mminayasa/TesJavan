-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: family_app
-- Generation Time: 2022-12-20 23:27:04.0740
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS family_user_assets_id_seq;

-- Table Definition
CREATE TABLE "public"."family_user_assets" (
    "id" int4 NOT NULL DEFAULT nextval('family_user_assets_id_seq'::regclass),
    "asset_name" varchar(255),
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "familyUserId" int4,
    CONSTRAINT "family_user_assets_familyUserId_fkey" FOREIGN KEY ("familyUserId") REFERENCES "public"."family_users"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."family_user_assets" ("id", "asset_name", "createdAt", "updatedAt", "familyUserId") VALUES
(1, 'Samsung Universe 9 dan Samsung Galaxy Book', '2022-12-20 22:53:21.403+07', '2022-12-20 22:53:21.403+07', 2),
(2, 'iPhone 9', '2022-12-20 23:06:34.964+07', '2022-12-20 23:06:34.964+07', 6),
(3, 'iPhone X', '2022-12-20 23:07:16.081+07', '2022-12-20 23:07:16.081+07', 7),
(4, 'Huawei P30', '2022-12-20 23:07:46.34+07', '2022-12-20 23:07:46.34+07', 3),
(5, 'Samsung Universe 9', '2022-12-20 23:08:10.284+07', '2022-12-20 23:08:10.284+07', 8),
(6, 'Samsung Universe 9', '2022-12-20 23:09:19.884+07', '2022-12-20 23:09:19.884+07', 4),
(7, 'Samsung Galaxy Book', '2022-12-20 23:09:57.307+07', '2022-12-20 23:09:57.307+07', 10),
(8, 'Huawei P30', '2022-12-20 23:10:30.362+07', '2022-12-20 23:10:30.362+07', 5),
(9, 'iPhone X', '2022-12-20 23:11:02.814+07', '2022-12-20 23:11:02.814+07', 11);
