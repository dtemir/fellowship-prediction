import requests
from .EndPointsFactory import EndPointsFactory
from ..constants.API_FEATURES import API_FEATURES

class GitHubApiFacade:
    
    # Constructor
    def __init__(self,username,features):
        self.username = username
        self.features = features

    # Methods 

    # generates an API_ENDPOINT , sends a request to it and return the results as json|None
    def __fetch_feature(self,feature,repo=None):
        try:
            API_ENDPOINT = EndPointsFactory(self.username,feature,repo).generate()
            response_api = requests.get(API_ENDPOINT)
            response_result = response_api.json()
            return response_result[feature] if str(response_api.status_code)[0] == '2' else None
        
        except : return None
    
    def __fetch_feature_route(self,feature,repo=None):
        try:
            API_ENDPOINT = EndPointsFactory(self.username,feature,repo).generate()
            print(f'endpoit {API_ENDPOINT}')
            response_api = requests.get(API_ENDPOINT)
            response_result = response_api.json()
            return response_result if str(response_api.status_code)[0] == '2' else None

        except: return None

            

    # returns the number of fellows that a user has on github
    def get_followers(self):
        return self.__fetch_feature(API_FEATURES.FOLLOWERS.value)
        
    # returns the number of public repos that the user has on his github
    def get_public_repos(self):
        return self.__fetch_feature(API_FEATURES.PUBLIC_REPOS.value)

    # returns the total number of stars that a user has on his github
    def get_total_stars(self):
        repos_data = self.__fetch_feature_route(API_FEATURES.STARGAZERS_COUNT.value)
        total_stars = 0 

        for repo in repos_data:
            total_stars += repo[API_FEATURES.STARGAZERS_COUNT.value]

        return total_stars

    # returns the total number of forks that other people made from the user github
    def get_total_forks(self):
        repos_data = self.__fetch_feature_route(API_FEATURES.FORKS_COUNT.value)
        total_forks = 0

        for repo in repos_data:
            total_forks += repo[API_FEATURES.FORKS_COUNT.value]

        return total_forks


       

