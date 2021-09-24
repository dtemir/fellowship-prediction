import pandas as pd
import json

# plots
import matplotlib.pyplot as plt
import seaborn as sns

import scipy.stats as stats

# Load and read json data
df = pd.read_json('full_info.json', lines=True)
user_name, commits, followers, repo, stars, forks, organizations, issues, contributions = \
[], [], [], [], [], [], [], [], []
n = len(df.columns)

for i in range(n):
    for result in df[i]:
        #user_name.append(result['Username'])
        commits.append(result['Commits'])
        followers.append(result['Followers'])
        repo.append(result['Repos'])
        stars.append(result['Stars'])
        forks.append(result['Forks'])
        organizations.append(result['Organizations'])
        issues.append(result['Issues'])
        contributions.append(result['Contributions'])

# Build pandas dataframe
df = pd.DataFrame([commits, followers, repo, stars, forks, organizations, issues, contributions]).T
df.rename(columns={0:'Commits', 1:'Followers', 2:'Repos', 3: 'Stars', 4: 'Forks', 5: 'Organizations', \
6: 'Issues', 7:'Contributions'}, inplace=True)
print(df.head) # Saved as appropriate format


ax = sns.boxplot(data=df)
#ax = sns.swarmplot(data=df)
plt.show()

# Testing: stats f_oneway functions takes the groups as input and returns ANOVA F and p values
fvalue, pvalue = stats.f_oneway(df["Commits"], df["Followers"])
print(fvalue, pvalue) # 57.68391643098897 5.716514449544662e-14

# Compute fvalue & pvalue for ALL groups:
fvalue, pvalue = stats.f_oneway(df["Commits"], df["Followers"], df["Repos"], df["Stars"], df["Forks"], \
df["Organizations"], df["Issues"], df["Contributions"])
print(fvalue, pvalue) # 58.01140684099095 1.4106183709468282e-80

# get ANOVA table as R like output
import statsmodels.api as sm
from statsmodels.formula.api import ols

# Ordinary Least Squares (OLS) model:
#model = ols('value ~ C(treatments)', data=df).fit()
#annova_table = sm.stats.anova_lm(model, typ=2)
#annova_table

###### STEP 2: COMPARE AVERAGE FELLOW TO CURRENT USER

# Load and read averages json data

with open('medians.json') as f:
    average_medians = json.load(f)

# ! Make sure to replace `cur_user_medians` with data gathered from API.
with open('test.json') as f:
    cur_user_medians = json.load(f)

print(average_medians)
print(cur_user_medians)

user_name, commits, followers, repo, stars, forks, organizations, issues, contributions = \
[], [], [], [], [], [], [], [], []

for result in [average_medians, cur_user_medians]:
    #user_name.append(result['Username'])
    commits.append(result['Commits'])
    followers.append(result['Followers'])
    repo.append(result['Repos'])
    stars.append(result['Stars'])
    forks.append(result['Forks'])
    organizations.append(result['Organizations'])
    issues.append(result['Issues'])
    contributions.append(result['Contributions'])

df = pd.DataFrame([commits, followers, repo, stars, forks, organizations, issues, contributions]).T
df.rename(columns={0:'Commits', 1:'Followers', 2:'Repos', 3: 'Stars', 4: 'Forks', 5: 'Organizations', \
6: 'Issues', 7:'Contributions'}, inplace=True)

print(df.head) 

# Testing: stats f_oneway functions takes the groups as input and returns ANOVA F and p values
fvalue, pvalue = stats.f_oneway(df["Commits"], df["Followers"])
print(fvalue, pvalue) # 60.69791335663595 0.01607875733200491

"""TODO: interpretation:
If the p-value obtained from ANOVA analysis is significant (p < 0.05), we conclude
that there are significant differences among AVERAGE FELLOW vs. USER.
"""
