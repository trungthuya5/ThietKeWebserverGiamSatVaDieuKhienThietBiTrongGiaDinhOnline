#container
display:flex;
flex-direction: row | row-reverse| column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
flex-flow: <flex-directrion> | <flex-wrap>;
justify-content: flex-start | flex-end | center | space-between | space-arround | space-evenly;
align-items: stretch | flex-start | flex-end | center | baseline;
align-content: flex-start | flex-end | center | space-between | space-around | stretch;

#item
order: <integer>;
flex-grow: <number>;
flex-shrink: <number>
flex-basis: <length> | auto;
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
align-self: auto | flex-start | flex-end | center | baseline | stretch;

#content
-Trang chủ
--Giới thiệu
-- Thiết bị



#Database
- users
CREATE TABLE `doantotnghiep`.`users` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `username` TEXT NOT NULL , `password` TEXT NOT NULL , `fullname` TEXT NOT NULL , `email` TEXT NOT NULL , `phone` TEXT NOT NULL , `level` INT NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;

- rooms
CREATE TABLE `doantotnghiep`.`rooms` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `uid` INT(11) NOT NULL , `pid` INT(11) NOT NULL , `name` TEXT NOT NULL , `content` TEXT NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;

- products
CREATE TABLE `doantotnghiep`.`products` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `name` TEXT NOT NULL , `data` TEXT NOT NULL , `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJmdWxsbmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJwaG9uZSI6IjA5MTIzNDU2NzgiLCJsZXZlbCI6MCwiY3JlYXRlZCI6IjIwMTktMDQtMTVUMDE6MDY6NTkuMDAwWiIsInVwZGF0ZWQiOiIyMDE5LTA0LTE1VDAxOjA2OjU5LjAwMFoifSwiaWF0IjoxNTU1MjkxNTU0fQ.Bb5BqAWWR2HhM81YSwqWCUFcPn4ypRN5-h1kxoodahw

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJmdWxsbmFtZSI6IiIsImVtYWlsIjoiIiwicGhvbmUiOiIiLCJsZXZlbCI6MSwiY3JlYXRlZCI6IjIwMTktMDMtMjVUMTI6MzA6MzEuMDAwWiJ9LCJpYXQiOjE1NTUyOTI4NDh9.s3BsFOiiPDMwB5newpdHM-FFxLZZLQkM9cDfeVhcciI

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJmdWxsbmFtZSI6IiIsImVtYWlsIjoiIiwicGhvbmUiOiIiLCJsZXZlbCI6MSwiY3JlYXRlZCI6IjIwMTktMDMtMjVUMTI6MzA6MzEuMDAwWiJ9LCJpYXQiOjE1NTY5Njg1NjF9.xCkQgFHyJPRhPju4QAthc7vB_OcD2THzsys6mconBZI

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJmdWxsbmFtZSI6IiIsImVtYWlsIjoiIiwicGhvbmUiOiIiLCJsZXZlbCI6MSwiY3JlYXRlZCI6IjIwMTktMDMtMjVUMTI6MzA6MzEuMDAwWiJ9LCJpYXQiOjE1NTY5Njg2MDh9.DOnsYGRoO0RZ-zLYd4OBCuj9OXjuCQ4r_Xg_SDtRBcQ
eyJpZCI6MX0.WPuvLOHEWXIn8D4gNgQgAaS-1f-CSjQZAxC1-zi2UzA
#Lỗi vớ vẩn

nếu socket.id tăng liên tục sử dụng npm audit để fix library