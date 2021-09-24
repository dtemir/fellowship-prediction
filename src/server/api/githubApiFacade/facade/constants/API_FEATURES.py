from enum import Enum
############################################################################################
#                 THE DIFFERENT FEATURES THAT THIS FACADE API CAN FETCH                    #
############################################################################################


class API_FEATURES(Enum):

    # represents the number of followers that a user has on github
    FOLLOWERS = 'followers'
    # represents the number of public repos that a user has on github
    PUBLIC_REPOS = 'public_repos'
    # represents the number of stars that a user has on github
    STARGAZERS_COUNT = 'stargazers_count'
    # represents the number of forks made by other people from the user github
    FORKS_COUNT = 'forks_count'
    # represents the total number commits that the user made since he started working with github
    COMMITS = 'commits'
    # represents the number total number of issues that the user took part of
    ISSUES = 'issues'
    CONTRIBUTIONS = 'contributions'
    # represents the number of organizations that the user is part of on github
    ORGS = 'orgs'
    # represents the user's profile  url
    AVATAR_URL = "avatar_url"
