# Azure Cosmos DB Notes


## Example connection using MongoDB shell: 

Connection strings can be obtained from the Azure portal. 


Straight connection:
```
mongosh --retryWrites=false eopamongo.mongo.cosmos.azure.com:10255 -u <user> -p <password>> --ssl --sslAllowInvalidCertificates
```
   
Connection and execute script:
```
mongosh 'mongodb://<connection>' --file insert.js

```
> Note: Need to ensure that the `--retryWrites=false` parameter set otherwise an error will be shown that the server does not support retries.


## Example configuration from Styra docs

```
https://docs.styra.com/enterprise-opa/tutorials/querying-mongodb
```


## Cheatsheet for commands 

```
https://www.mongodb.com/developer/products/mongodb/cheat-sheet/
```

```
show dbs


```





```
db.resources.insertOne(
    {
        endpoint: '/finance',
        allowReadRoles: ['finance-admin'],
        allowWriteRoles: ['finance-admin'],
        allowAdminRoles: ['finance-admin'],
    }
)
```