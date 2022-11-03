from flask import Flask, request, jsonify

app = Flask(__name__)

data = {'name': 'John', 
        'age': '22'}

@app.route('/api/person', methods=['GET'])
def get_person():
    return jsonify(data)
