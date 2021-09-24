import json
from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
# from githubApiFacade.facade.classes.GitHubApiFacade import GitHubApiFacade
from src.server.api.githubApiFacade.facade.classes.GitHubApiFacade import GitHubApiFacade

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
            results = {
                "data": {
                    "user": {
                        "score": 0,
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
            return {"status": "fail", "message": "looks like something went wrong please try again"}


class Test(Resource):
    def get(self):
        return {"status": "success", "message": "backend server up and running"}, 200


api.add_resource(Profile, "/profile")
api.add_resource(Test, "/status")
