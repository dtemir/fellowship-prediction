from flask import Flask
from flask_restful import Api, Resource, reqparse, abort

app = Flask(__name__)
api = Api(app)

# Argument required for incoming post request
PersonArgs = reqparse.RequestParser()
PersonArgs.add_argument("noOfFollowers", type=int,
                        help="No of followers is required", required=True)
PersonArgs.add_argument("noOfRepos", type=int,
                        help="No of repos is required", required=True)
PersonArgs.add_argument("noOfStars", type=int,
                        help="No of stars is required", required=True)
PersonArgs.add_argument("noOfForks", type=int,
                        help="No of forks is required", required=True)
PersonArgs.add_argument("noOfCommits", type=int,
                        help="No of commits is required", required=True)
PersonArgs.add_argument("noOfPullRequests", type=int,
                        help="No of pull requests is requred", required=True)
PersonArgs.add_argument("noOfIssues", type=int,
                        help="No of issues is required", required=True)
PersonArgs.add_argument("noOfOrganizations", type=int,
                        help="No of organizations is requred", required=True)


class Profile(Resource):
    def post(self):
        args = PersonArgs.parse_args()
        print(args)
        return {"status": "success"}, 201


class Test(Resource):
    def get(self):
        return {"status": "success", "message": "backend server up and running"}, 200


api.add_resource(Profile, "/profile")
api.add_resource(Test, "/status")
