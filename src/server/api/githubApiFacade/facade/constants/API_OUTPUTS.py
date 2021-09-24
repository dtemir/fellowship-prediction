from enum import Enum
############################################################################################
#                 THE DIFFERENT OUTPUTS THAT THIS FACADE API CAN FETCH                    #
############################################################################################


class API_OUTPUTS(Enum):

    # represents the number of followers that a user has on github
    FOLLOWERS = 'Followers'
    # represents the number of public repos that a user has on github
    PUBLIC_REPOS = 'Repos'
    # represents the number of stars that a user has on github
    STARGAZERS_COUNT = 'Stars'
    # represents the number of forks made by other people from the user github
    FORKS_COUNT = 'Forks'
    # represents the total number commits that the user made since he started working with github
    COMMITS = 'Commits'
    # represents the number total number of issues that the user took part of
    ISSUES = 'Issues'
    CONTRIBUTIONS = 'Contributions'
    # represents the number of organizations that the user is part of on github
    ORGS = 'Organizations'
    # represents the user's profile  url
    AVATAR_URL = "avatar"
