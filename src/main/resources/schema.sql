DROP TABLE IF EXISTS user;
create table user(
  email      varchar(50),
  password        varchar(50),
  first_Name        varchar(50),
  last_Name        varchar(50),
  constraint pk_user primary key (email)
);

DROP TABLE IF EXISTS genres;
create table genres(
id                      varchar(50),
name                    varchar(50),
  constraint pk_genres primary key (id)
);

DROP TABLE IF EXISTS Authors;
create table Authors(
id                    varchar(50),
full_name             varchar(100),
type                  varchar(50),
born                  varchar(500),
years_Active          varchar(50),
books                 varchar(50),
description           varchar(10000),
constraint pk_authors primary key (id)
);

DROP TABLE IF EXISTS Books;
create table Books(
  id                            varchar(50),
  title                         varchar(50),
  subtitle                      varchar(50),
  type                          varchar(50),
  format                        varchar(50),
  release_date                  varchar(50),
  author                        varchar(50),
  price                         decimal,
  publisherRRP                  decimal,
  pages                         int,
  is_Wish_List                    boolean,
  description                   varchar(10000),
  dimensions                    varchar(50),
  ISBN                          varchar(50),
  Publisher                     varchar(50),
  constraint pk_books primary key (id)
);
