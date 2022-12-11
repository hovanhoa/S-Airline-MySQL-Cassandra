CREATE KEYSPACE airline WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor' : 3};

USE airline;

CREATE TABLE airport (
    id varchar,
    name varchar,
    PRIMARY KEY (id, name)
);

CREATE TABLE bank (
    id varchar,
    name varchar,
    PRIMARY KEY (id, name)
);

CREATE TABLE brand (
    id varchar,
    name varchar,
    PRIMARY KEY (id, name)
);

CREATE TABLE seat (
    id varchar,
    flight_id varchar,
    phone varchar,
    type smallint,
    from_airport varchar,
    to_airport varchar,
    brand varchar,
    depart timestamp,
    end timestamp,
    price int,
    PRIMARY KEY (id)
);

CREATE TABLE user (
    phone varchar,
    password varchar,
    name varchar,
    sex varchar,
    birthday timestamp,
    address varchar,
    email varchar,
    bank varchar,
    bank_number varchar,
    nationality varchar,
    type int,
    create_time timestamp,
    PRIMARY KEY (phone)
);

CREATE TABLE flight (
    id varchar,
    from_airport varchar,
    to_airport varchar,
    brand varchar,
    depart timestamp,
    end timestamp,
    price int,
    PRIMARY KEY (id)
);

CREATE INDEX ON seat(phone);

CREATE INDEX ON seat(flight_id);

CREATE INDEX ON flight(from_airport);

CREATE INDEX ON flight(to_airport);

INSERT INTO airport (id, name) VALUES ('DAD', 'Đà Nẵng');
INSERT INTO airport (id, name) VALUES ('NHA', 'Nha Trang');
INSERT INTO airport (id, name) VALUES ('NOB', 'Hà Nội');
INSERT INTO airport (id, name) VALUES ('PQC', 'Phú Quốc');
INSERT INTO airport (id, name) VALUES ('TSN', 'Tp. Hồ Chí Minh');

INSERT INTO bank (id, name) VALUES ('ACB', 'Ngân hàng thương mại cổ phần Á Châu');
INSERT INTO bank (id, name) VALUES ('AGB', 'Ngân hàng Nông nghiệp và Phát triển');
INSERT INTO bank (id, name) VALUES ('BIDV', 'Ngân hàng Thương mại cổ phần Đầu tư và Phát triển Việt Nam');
INSERT INTO bank (id, name) VALUES ('DAB', 'Ngân hàng Đông Á');
INSERT INTO bank (id, name) VALUES ('MBB', 'Ngân hàng quân đội');
INSERT INTO bank (id, name) VALUES ('OCB', 'Ngân hàng thương mại cổ phần Phương Đông');
INSERT INTO bank (id, name) VALUES ('SCB', 'Sacombank');
INSERT INTO bank (id, name) VALUES ('TPB', 'TP Bank');
INSERT INTO bank (id, name) VALUES ('VPB', 'VP Bank');

INSERT INTO brand (id, name) VALUES ('BL', 'Jetstar Pacific Airlines');
INSERT INTO brand (id, name) VALUES ('QH', 'Bamboo Airways');
INSERT INTO brand (id, name) VALUES ('VA', 'VietnamAirlines');
INSERT INTO brand (id, name) VALUES ('VJ', 'Vietjet Air');