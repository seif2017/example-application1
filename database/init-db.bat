docker run --network=host --rm mcr.microsoft.com/mssql-tools /opt/mssql-tools/bin/sqlcmd -S 127.0.0.1 -U sa -P "p@ssw0rd" -q "create database db_test"

