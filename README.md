# Falsetto Demo

Demo using Express and Falsetto for interaction with a cassandra database

## Setup

```
# clone the repository
git clone https://github.com/ilikepi63/falsetto-demo.git

# cd into the repository
cd falsetto-demo

# run the docker-compose
docker-compose up -d 
```

Once that is up and running(Cassandra bootstrap is all done), you can setup your keyspace and tables:

Setup up a keyspace: 
```
cqlsh # if you have cqlsh installed on your machine, otherwise download it. 

Connected to Test Cluster at 127.0.0.1:9042.
[cqlsh 5.0.1 | Cassandra 3.11.10 | CQL spec 3.4.4 | Native protocol v4]
Use HELP for help.

> CREATE KEYSPACE ks1 WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

> exit
```

Now set up your tables: 

```
# exec into the node shell
docker exec -it $NAME_OF_NODE_CONTAINER /bin/bash

#create the tables from the terminal
node src/seed/create-tables.js
```

## Test the API


