import json
from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
import requests
# from githubApiFacade.facade.classes.GitHubApiFacade import GitHubApiFacade
from src.server.api.githubApiFacade.facade.classes.GitHubApiFacade import GitHubApiFacade

# Constansts
PREDICT_ENDPOINT = "https://fellow-predict.herokuapp.com/predict"

# initialize flask server and enable cors
app = Flask(__name__)
CORS(app)
api = Api(app)

# load averages json file
with open("model/averages.json") as json_file:
    average = json.load(json_file)

# Argument required for incoming post request
PersonArgs = reqparse.RequestParser()
PersonArgs.add_argument("username", type=str,
                        help="username is required", required=True)


class Profile(Resource):
    def post(self):
        usernameArgs = PersonArgs.parse_args()
        username = usernameArgs['username']

        try:
            facade = GitHubApiFacade(username)
            userData = facade.fetch_all_feature()
            avatar_url = userData.pop("avatar", None)
            score = get_prediction(userData)
            if score is None:
                return {"status": "fail", "message": "looks like something went wrong please try again"}, 400
            results = {
                "data": {
                    "user": {
                        "score": score,
                        "avatar": avatar_url,
                        "features": userData
                    },
                    "averageFellow": {
                        "user": {
                            "score": 0,
                            "features": average
                        }
                    }
                }
            }
            return results, 200
        except TypeError:
            return {"status": "fail", "message": "looks like something went wrong please try again"}, 400


class Test(Resource):
    def get(self):
        return {"status": "success", "message": "backend server up and running"}, 200


api.add_resource(Profile, "/profile")
api.add_resource(Test, "/status")


def get_prediction(stats):
    try:
        response = requests.post(PREDICT_ENDPOINT, json=stats)
        response_result = response.json()
        return response_result
    except:
        return None
