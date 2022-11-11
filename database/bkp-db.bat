mkdir ../bkp-db
docker run --rm --network=host svarcoe/mssql-scripter mssql-scripter -S 127.0.0.1 -d db_test -U sa -P "p@ssw0rd" --schema-and-data  > ./bkp-db/db_test.sql

