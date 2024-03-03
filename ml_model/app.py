
# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestRegressor
# from sklearn.metrics import mean_squared_error
# from sklearn.preprocessing import MinMaxScaler
# from sklearn.metrics import accuracy_score
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient

# app = Flask(__name__)
# CORS(app)

# mongo_uri="mongodb://localhost:27017/Project"
# client=MongoClient(mongo_uri)
# db=client['Project']
# collection=db['entries']


# def myfnc(input_data):

#     cursor=collection.find({})
#     data=pd.DataFrame(list(cursor))
    
#     # data = pd.read_csv("C:/Users/kusha/Downloads/diabetesDataset.csv")
#     X = data.drop(columns=["Outcome"])
#     y = data["Outcome"]
#     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#     scaler = MinMaxScaler()
#     X_train_scaled = scaler.fit_transform(X_train)
#     X_test_scaled = scaler.transform(X_test)

#     model = RandomForestRegressor(n_estimators=100, random_state=42)
#     model.fit(X_train_scaled, y_train)


#     y_pred = model.predict(X_test_scaled)
#     mse = mean_squared_error(y_test, y_pred)
#     # print("Mean Squared Error:", mse)

#     # y_pred_binary = [1 if pred >= 0.5 else 0 for pred in y_pred]

#     new_data = [input_data["heredity"], input_data["physicalActivity"], input_data["junk"], input_data["glucose"], input_data["bp"], input_data["bmi"], input_data["age"]]
#     new_data_scaled = scaler.transform([new_data])
#     predictions = model.predict(new_data_scaled)
#     scaled_prediction = int(predictions * 10)
#     print(scaled_prediction)
#     return scaled_prediction



# @app.route('/predict', methods=['POST'])
# def predict():
 
#     input_data = request.json
#     predictions = myfnc(input_data)
#     return jsonify(predictions)


# if __name__ == '__main__':
#     app.run(debug=True)


# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestRegressor
# from sklearn.metrics import mean_squared_error
# from sklearn.preprocessing import MinMaxScaler
# from sklearn.metrics import accuracy_score
# from flask import Flask, request, jsonify
# from flask_cors import CORS, cross_origin
# from pymongo import MongoClient

# app = Flask(__name__)
# CORS(app)

# mongo_uri="mongodb://localhost:27017/Project"
# client=MongoClient(mongo_uri)
# db=client['Project']
# collection=db['entries']


# def myfnc(input_data):
#     cursor = collection.find({}, {'_id': 0})  # Exclude ObjectId field from query
#     data = pd.DataFrame(list(cursor))
    
#     # Drop any rows with missing values in the target variable
#     data = data.dropna(subset=["Outcome"])

#     # Ensure numeric columns are converted to appropriate data types
#     data = data.astype(float)

#     X = data.drop(columns=["Outcome"])
#     y = data["Outcome"]

#     # Split the data into training and testing sets
#     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#     scaler = MinMaxScaler()
#     X_train_scaled = scaler.fit_transform(X_train)
#     X_test_scaled = scaler.transform(X_test)

#     model = RandomForestRegressor(n_estimators=100, random_state=42)
#     model.fit(X_train_scaled, y_train)

#     # Make predictions on the scaled new data
#     new_data = [input_data["heredity"], input_data["physicalActivity"], input_data["junk"], input_data["glucose"], input_data["bp"], input_data["bmi"], input_data["age"]]
#     new_data_scaled = scaler.transform([new_data])
#     predictions = model.predict(new_data_scaled)
#     scaled_prediction = int(predictions * 10)
#     print(scaled_prediction)
#     return scaled_prediction



# @app.route('/predict', methods=['POST'])
# @cross_origin(origin='*',headers=['Content-Type','Authorization'])
# def predict():
 
#     input_data = request.json
#     predictions = myfnc(input_data)
#     return jsonify(predictions)


# if __name__ == '__main__':
#     app.run(debug=True)


import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import MinMaxScaler
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient
from flask_cors import CORS
from flask import Flask, jsonify, request
from pymongo import MongoClient




app = Flask(__name__)
CORS(app)

mongo_uri = "mongodb://localhost:27017/Project"
client = MongoClient(mongo_uri)
db = client['Project']
collection = db['entries']

def myfnc(input_data):
    cursor = collection.find({})
    data = pd.DataFrame(list(cursor))

    data = data.dropna(subset=["Outcome"])
    data = data.drop(columns=["_id","__v"])
    
    

    # Ensure numeric columns are converted to appropriate data types
    data = data.astype(float)

    X = data.drop(columns=["Outcome"])
    y = data["Outcome"]

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Fit scaler only on the training features
    scaler = MinMaxScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    
    # Transform the testing features using the fitted scaler
    X_test_scaled = scaler.transform(X_test)

    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train_scaled, y_train)

    new_data = [[input_data["heredity"], input_data["physicalActivity"], input_data["junk"], input_data["glucose"], input_data["bp"], input_data["bmi"], input_data["age"]]]
    new_data_scaled = scaler.transform(new_data)
    prediction = model.predict(new_data_scaled)
    scaled_prediction = (prediction[0] * 100)
    scaled_prediction = str(round(scaled_prediction, 3))

    return scaled_prediction


@app.route('/predict', methods=['POST'])
def predict():
    input_data = request.json
    predictions = myfnc(input_data)
    return jsonify(predictions)

if __name__ == '__main__':
    app.run(debug=True)
