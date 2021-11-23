# How to initialize mongo DB data

```bash
mongoimport --username mlab --password mlab  --host ds245357.mlab.com --port 45357 --db lista-telefonica --collection operadoras --file mongodb_backup/operadoras.txt
mongoimport --username mlab --password mlab  --host ds245357.mlab.com --port 45357 --db lista-telefonica --collection contatos --file mongodb_backup/contatos.txt
```





