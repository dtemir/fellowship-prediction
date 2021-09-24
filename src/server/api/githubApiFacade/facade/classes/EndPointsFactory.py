from ..constants.API_FEATURES import API_FEATURES


class EndPointsFactory:

    # Constructor
    def __init__(self, base_url, username, feature):
        self.username = username
        self.feature = feature
        self.base_url = base_url

    # Methods

    # generates an appropriate endpoint based on the username and feature
    def generate(self):

        if self.feature == API_FEATURES.FOLLOWERS.value:
            return f'{self.base_url}/users/{self.username}'

        if self.feature == API_FEATURES.PUBLIC_REPOS.value:
            return f'{self.base_url}/users/{self.username}'

        if self.feature == API_FEATURES.AVATAR_URL.value:
            return f'{self.base_url}/users/{self.username}'

        if self.feature == API_FEATURES.STARGAZERS_COUNT.value:
            return f'{self.base_url}/users/{self.username}/repos'

        if self.feature == API_FEATURES.FORKS_COUNT.value:
            return f'{self.base_url}/users/{self.username}/repos'

        if self.feature == API_FEATURES.COMMITS.value:
            return f'{self.base_url}/search/commits?q=author:{self.username}'

        if self.feature == API_FEATURES.ISSUES.value:
            return f'{self.base_url}/search/issues?q=user:{self.username}'

        if self.feature == API_FEATURES.CONTRIBUTIONS.value:
            return f'{self.base_url}/search/issues?q=type:pr+user:{self.username}'

        if self.feature == API_FEATURES.ORGS.value:
            return f'{self.base_url}/users/{self.username}/orgs'

        return None
