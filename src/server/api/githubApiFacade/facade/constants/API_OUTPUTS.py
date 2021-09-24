from enum import Enum
############################################################################################
#                 THE DIFFERENT OUTPUTS THAT THIS FACADE API CAN FETCH                    #
############################################################################################


class API_OUTPUTS(Enum):
    
    FOLLOWERS           = 'Followers'          # represents the number of followers that a user has on github
    PUBLIC_REPOS        = 'Repos'              # represents the number of public repos that a user has on github
    STARGAZERS_COUNT    = 'Stars'              # represents the number of stars that a user has on github
    FORKS_COUNT         = 'Forks'              # represents the number of forks made by other people from the user github
    COMMITS             = 'Commits'            # represents the total number commits that the user made since he started working with github
    ISSUES              = 'Issues'             # represents the number total number of issues that the user took part of 
    CONTRIBUTIONS       = 'Contributions'
    ORGS                = 'Organizations'      # represents the number of organizations that the user is part of on github

