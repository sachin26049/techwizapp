
# coding: utf-8

# In[2]:


import pymongo
import pandas as pd
import numpy as np
import math
import json
from pymongo import MongoClient
connection=MongoClient('localhost')
db=connection.techwiz
db.collabrecommend.drop()
orders=pd.DataFrame(list(db.orders.find({})))
menu=pd.DataFrame(list(db.menu.find({})))["name"]
email=pd.unique(orders["email"])


# In[30]:


vector = np.zeros((email.size,menu.size), dtype=float, order='C')
items = pd.DataFrame(vector, index=email, columns=menu)
for index,i in orders.iterrows():
    food=[]
    #print(i)
    for j in i["orders"]:
        food+=j
    food=pd.DataFrame(data=i["orders"])
    print type(food)
    for index1,j in food.iterrows():
        items[j["foodname"]][i["email"]]=j["rating"]
print(items.head())
mean=np.mean(items,axis=1)
print(mean.head())
items=(items.transpose()-mean).transpose()

items=items.values
print(items)
similarity = np.zeros((email.size,email.size), dtype=float, order='C')
for i in range(0,email.size):
    for j in range(0,email.size):
        sum1=0
        deno1=0
        deno2=0
        for k in range(0,menu.size):
            if((items[i,k]+mean[i])!=0.0000 and (items[j,k]+mean[j])!=0.0000):
                sum1+=(items[i,k]*items[j,k])
                deno1+=math.pow(items[i,k],2)
                deno2+=math.pow(items[j,k],2)
        #print sum1,deno1,deno2
        if(deno1!=0):
            similarity[i,j]=sum1/(math.sqrt(deno1*deno2))
print similarity
recommend = np.zeros((email.size,menu.size), dtype=float, order='C')
for i in range(0,email.size):
    for k in range(0,menu.size):
        sum1=mean[i]
        sum2=0
        for j in range(0,email.size):
            if(int(items[j,k])!=int(mean[j]) and int(items[i,k])==int(mean[i])):
                sum1+=items[j,k]*similarity[i,j]
                sum2+=similarity[i,j]
            #if(int(items[i,k])!=int(mean[i])):
             #   items[i,k]=0
        if sum2==0:
            recommend[i,k]=0
        else:
            recommend[i,k]=sum1/sum2
print recommend
#for i in range(0,email.size):
#    print email[i]
#    for j in range(0,menu.size):
#        if(recommend[i,j]>0):
#            print recommend[i,j],menu[j]
recommend = pd.DataFrame(recommend, index=email, columns=menu)
for i in range(0,email.size):
    y={}
    x=recommend.sort_values(by=email[i],axis=1,ascending=False)
    x=x.iloc[i][:5]
    y["email"]=email[i]
    z=[]
    #print (x[0])
    #y["items"]=x.index.values
    rat=x
    x=x.index.values
    menu1=pd.DataFrame(list(db.menu.find({})))
    for index,i in menu1.iterrows():
        for j in range(0,x.size):
            if(i["name"]==x[j]):
                f={}
                f["name"]=str(i["name"])
                f["type"]=str(i["type"])
                f["description"]=str(i["description"])
                f["price"]=str(i["price"])
                f["rating"]=str(round(rat[j],1))
                z.append(f)
    y["items"]=z
    print(y["items"])
    json_data = json.dumps(y,indent=4)
    db.collabrecommend.insert_one(y)







