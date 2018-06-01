import json
import graphlab
import pymongo
import pandas as pd
import numpy as np
from pymongo import MongoClient
connection=MongoClient('localhost')
db=connection.techwiz
db.recommend.drop()
y=db.menu.find({})
print(y)
z=[]
print y[0]
for i in y:
    #print(i["price"])
    #z["price"]=i["price"]
    #z["type"]=i["type"]
    #if "description" in i:
     #   z["des"]=i["description"]
    #z["name"]=i["name"]
    #a.update(z)
    #a=dict(a,**z)
    try:
        del i['_id']
    except:
        pass    
    z.append(i)
df = pd.DataFrame(data=z,dtype=object)
df['price'] = df['price'].astype(str)
df['name'] = df['name'].astype(str)
df['type'] = df['type'].astype(str)
df['description'] = df['description'].astype(str)
df['count'] = df['count'].astype(str)
df['rating'] = df['rating'].astype(str)
df['__v'] = df['__v'].astype(str)
df['keywords'] = df['keywords'].astype(str)
print(df.dtypes)
users=db.users.find({})
order=db.orders
user=[]
menu=graphlab.SFrame(df)
menu['word_count']=graphlab.text_analytics.count_words(menu['description'])
tfidf = graphlab.text_analytics.tf_idf(menu['word_count'])
menu['tfidf'] = tfidf
knn_model = graphlab.nearest_neighbors.create(menu,features=['tfidf'],label='name')
print type(users)
for i in users:
    user=i['email']
    print(user)
    orders=order.find({'email':user})
    items=[]
    for i in orders:
        items+=i['orders']
        print type(items)
    if len(items)!=0:
        food_items=pd.DataFrame(data=items)
        food_items=pd.unique(food_items['foodname'])
    #for i in items:
        #food_items+=i['foodname']
    if len(food_items)!=0 :
        print(food_items)
    recommended_items=graphlab.SFrame({})
    for i in food_items:
        item=menu[menu['name']==i]
        item_model=knn_model.query(item)
        print(item_model)
        recommended_items=recommended_items.append(item_model)
    recommended_items=recommended_items.groupby(key_columns='reference_label',operations={'rank': graphlab.aggregate.MEAN('rank')}).sort('rank',ascending=True)
    print(type(recommended_items))
    recommended_items.rename({'reference_label':'name'})
    recommended_items=recommended_items.join(menu,how='inner')
    recommended_items=recommended_items.remove_columns(['tfidf','word_count'])
    recommended_items['rank']=recommended_items['rank'].astype(str)
    recommend={}
    recommended_items= recommended_items.pack_columns(columns=['type','price','description','rank','name'],dtype=dict,new_column_name='category')
    print type(recommended_items)
    recommend["email"]=user
    #df = recommended_items.to_dataframe().set_index('food')
    #print type(recommended_items.to_numpy())
    #print(recommended_items)
    #recommend["items"]=df.to_dict(orient='dict')['category']
    #recommend["items"]['rank']=df.to_dict(orient='dict')['type']
    print("hfgdsjdhgsdfjjfdhjdddddddddddddhfdjh")
    x=[]
    for i in recommended_items:
        x.append(i)
    #print(recommend)
    recommend['items']=x[:5]
    print(recommend)
    json_data = json.dumps(recommend,indent=4)
    db.recommend.insert_one(recommend)