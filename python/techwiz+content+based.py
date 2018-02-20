
# coding: utf-8

# In[85]:


import graphlab
import pymongo
import pandas as pd
import numpy as np
from pymongo import MongoClient
connection=MongoClient('localhost')
db=connection.techwiz
x=db.menu1
y=x.find_one({})
print(y)
y=x.find({})
#print(y)
z=[]
a=[]
#print(y[1])
print type(y)
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
print(type(z[2]['price']))
print(type(z))
df = pd.DataFrame(data=z,dtype=object)
df['price'] = df['price'].astype(str)
df['name'] = df['name'].astype(str)
df['type'] = df['type'].astype(str)
df['description'] = df['description'].astype(str)
print(df.dtypes)


# In[86]:


menu=graphlab.SFrame(df)
print type(menu)
menu.head()


# In[58]:


len(menu)


# In[88]:


menu['word_count']=graphlab.text_analytics.count_words(menu['description'])
menu.head()


# In[89]:


tfidf = graphlab.text_analytics.tf_idf(menu['word_count'])
tfidf


# In[90]:


menu['tfidf'] = tfidf


# In[92]:


nan = menu[menu['name'] == 'Keema Nan']


# In[93]:


nan[['tfidf']].stack('tfidf',new_column_name=['word','tfidf']).sort('tfidf',ascending=False)


# In[94]:


knn_model = graphlab.nearest_neighbors.create(menu,features=['tfidf'],label='name')


# In[100]:


na=knn_model.query(nan)


# In[97]:


aloo = menu[menu['name'] == 'Aloo Chole Dinner']


# In[136]:


al=knn_model.query(aloo)
print(al)


# In[103]:


al.join(na,how='inner')


# In[137]:


aloo1 = menu[menu['name'] == 'Channasaag Dinner']
al1=knn_model.query(aloo1)
print(al1)


# In[141]:


#al.join(al1,on='reference_label',how='inner')
import numpy
j=al.append(al1)
j.groupby(key_columns='reference_label',operations={'rank': graphlab.aggregate.MEAN('rank')}).sort('rank',ascending=True)[2:4]


# In[127]:


order=db.orders


# In[128]:


orders=order.find_one({'email':'pg4@gmail.com'})


# In[134]:


items=orders['orders']


# In[135]:


food_items=
for i in items:
    print(i['foodname'])


# In[ ]:




