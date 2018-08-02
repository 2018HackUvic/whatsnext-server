## You will need:

- [MongoDb](https://docs.mongodb.com/manual/installation/)

### Linux

[Check this](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

### Mac
```
brew install mongodb
sudo mkdir -p /data/db
sudo chmod 0755 /data/db
sudo chown [USER] /data/db
```
### Windows
[Check this](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

## To Run

#### Express

```
npm install
npm start
```

#### Mongo

##### Mac

```
brew services start mongodb
mongo &
```

##### Linux

```
sudo service mongodb start
```
