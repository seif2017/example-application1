mkdir ../bkp-db
docker run --rm svarcoe/mssql-scripter mssql-scripter -S 172.17.0.1 -d db_test -U sa -P "p@ssw0rd" --schema-and-data  > ./bkp-db/switchdb-$(date +%d-%m-%y)-bkp.sql

