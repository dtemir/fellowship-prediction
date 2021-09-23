from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/',methods=['POST'])
def github_api_facade():
    request_data = request.get_json()
    return jsonify({'res':request_data})




if __name__ == '__main__':
    app.run(debug=True)