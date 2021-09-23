from .API_FEATURES import API_FEATURES 

class EndPointsFactory:

    # Constructor 
    def __init__(self,username,feature,repo_name = None):
        self.username   = username
        self.feature    = feature
        self.repo_name  = repo_name

    # Methods

    # generates an appropriate endpoint based on the username and feature
    def generate(self):

        if self.feature ==  API_FEATURES.FOLLOWERS.value:
            return  f'https://api.github.com/users/{self.username}' 

        if self.feature == API_FEATURES.PUBLIC_REPOS.value:
            return f'https://api.github.com/users/{self.username}'

        if self.feature == API_FEATURES.STARGAZERS_COUNT.value:
            return f'https://api.github.com/users/{self.username}/repos'

        if self.feature == API_FEATURES.FORKS_COUNT.value:
            return f'https://api.github.com/users/{self.username}/repos'

        if self.feature == API_FEATURES.COMMITS.value:
            return f'https://api.github.com/users/{self.username}/repos'

        if self.feature == API_FEATURES.PULL_REQUESTS.value:
            return f' https://api.github.com/search/issues?q=+type:pr+{self.username}:StackExchange&sort=created&order=asc'
        
        if self.feature == API_FEATURES.ISSUES.value:
            return f'https://api.github.com/repos/{self.username}/{self.repo_name}/issues/events'

        if self.feature == API_FEATURES.ORGS.value:
            return f'https://api.github.com/users/{self.username}/orgs'

        return None
