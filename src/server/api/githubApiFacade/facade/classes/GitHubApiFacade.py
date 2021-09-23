import requests
from .EndPointsFactory import EndPointsFactory
from ..constants.API_FEATURES import API_FEATURES
from ..constants.API_OUTPUTS import API_OUTPUTS
from dotenv import load_dotenv
import os
load_dotenv()

class GitHubApiFacade:
    
    # Constructor
    def __init__(self,username):
        self.__username   =   username
        self.__token      =   os.getenv('GITHUB_TOKEN')
        self.__headers    =   {
                                "Content-Type": "application/json",
                                "Accept": "application/vnd.github.cloak-preview",
                                "Authorization": f'token {self.__token}'
                            }
        self.__base_url   = 'https://api.github.com'

    # Private Methods 

    # generates an API_ENDPOINT , sends a request to it and return the results as json|None
    def __fetch_feature(self,feature):

        try:
            API_ENDPOINT = EndPointsFactory(self.__base_url,self.__username,feature).generate()
            response_api = requests.get(API_ENDPOINT,headers=self.__headers)
            response_result = response_api.json()
            return response_result[feature] if str(response_api.status_code)[0] == '2' else None
        
        except : return None
    
    
    def __fetch_feature_route(self,feature):

        try:
            API_ENDPOINT = EndPointsFactory(self.__base_url,self.__username,feature).generate()
            response_api = requests.get(API_ENDPOINT,headers=self.__headers)
            response_result = response_api.json()
            return response_result if str(response_api.status_code)[0] == '2' else None

        except: return None

    
    # returns the number of fellows that a user has on github
    def __get_followers(self): return self.__fetch_feature(API_FEATURES.FOLLOWERS.value)
        
    # returns the number of public repos that the user has on his github
    def __get_public_repos(self): return self.__fetch_feature(API_FEATURES.PUBLIC_REPOS.value)

    # returns the total number of stars that a user has on his github
    def __get_total_stars(self):
        repos_data = self.__fetch_feature_route(API_FEATURES.STARGAZERS_COUNT.value)
        total_stars = 0 

        for repo in repos_data:
            total_stars += repo[API_FEATURES.STARGAZERS_COUNT.value]

        return total_stars

    # returns the total number of forks that other people made from the user github
    def __get_total_forks(self):
        repos_data = self.__fetch_feature_route(API_FEATURES.FORKS_COUNT.value)
        total_forks = 0

        for repo in repos_data:
            total_forks += repo[API_FEATURES.FORKS_COUNT.value]

        return total_forks

    # returns the total number of commits that the user has on his github
    def __get_total_commits(self):
        commits_data = self.__fetch_feature_route(API_FEATURES.COMMITS.value)
        return commits_data['total_count']

    # returns the total number of issues 
    def __get_total_issues(self):
        issues_data = self.__fetch_feature_route(API_FEATURES.ISSUES.value)
        return issues_data['total_count']

    # returns the total contribtions to other projects 
    def __get_total_contributions(self):
        issues_data = self.__fetch_feature_route(API_FEATURES.CONTRIBUTIONS.value)
        return issues_data['total_count']

    # returns the total number of organizations that the user is included in

    def __get_total_orgs(self):
        orgs_data = self.__fetch_feature_route(API_FEATURES.ORGS.value)
        return  len(orgs_data)


    # Public Methods

    # fetches the feature passed as an argument
    def get_feature(self,feature):

        if(feature == API_FEATURES.FOLLOWERS.value) : return self.__get_followers()
        if(feature == API_FEATURES.PUBLIC_REPOS.value) :   return self.__get_public_repos()
        if(feature == API_FEATURES.STARGAZERS_COUNT.value) :   return self.__get_total_stars()
        if(feature == API_FEATURES.FORKS_COUNT.value):   return self.__get_total_forks()
        if(feature == API_FEATURES.COMMITS.value):   return self.__get_total_commits()
        if(feature == API_FEATURES.ISSUES.value) :   return self.__get_total_issues()
        if(feature == API_FEATURES.CONTRIBUTIONS.value) :   return self.__get_total_contributions()
        if(feature == API_FEATURES.ORGS.value) :   return self.__get_total_orgs()


    # returns a dictionary {feature:value}
    def fetch_all_feature(self):
        fetch_result = dict()
        for feature in API_FEATURES:  fetch_result[API_OUTPUTS[feature.name].value] = self.get_feature(feature.value)
        return fetch_result
            

