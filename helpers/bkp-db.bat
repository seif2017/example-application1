mkdir ../bkp-db

docker run --rm svarcoe/mssql-scripter mssql-scripter -S 172.17.0.1 -d switchdb -U sa -P testsql**2022-- --schema-and-data  > ../bkp-db/switchdb-$(date +%d-%m-%y)-bkp.sql

docker run --rm svarcoe/mssql-scripter mssql-scripter -S 172.17.0.1 -d fatourti -U sa -P testsql**2022-- --schema-and-data  > ../bkp-db/fatourti-$(date +%d-%m-%y)-bkp.sql