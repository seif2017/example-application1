export SQLCMDPASSWORD="testsql**2022--"

sqlcmd -S 127.0.0.1 -U sa -i ../bkp-db/switchdb-$(date +%d-%m-%y)-bkp.sql

sqlcmd -S 127.0.0.1 -U sa -i ../bkp-db/fatourti-$(date +%d-%m-%y)-bkp.sql