import pymongo
from pymongo import MongoClient
connection=MongoClient('localhost')
db=connection.test
names=db.trial
item = names.find_one()
item