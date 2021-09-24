## Getting Started

### Prequisites

1. Python
2. pip

First, to run the development server, first install the requirements found in the requirements.txt file, in the project root, run

```
pip install -r requirements.txt
```

Secondly add a .env file to the project root dir which contains the following:

```
    GITHUB_TOKEN=<Your github personal access token>
```

subsequently we can start the development server by running following command in the project root

```
python wsgy.py
```

the development server should be up and running in debug on port 5000

## Endpoints

/profile

### Accepts

a post request with with the github username sent in the request body

```
    {"username": "value"}
```

### Returns

user details as follows:

```
{
    "data": {
        "user": {
            "score": 62.5,
            "avatar": "https://avatars.githubusercontent.com/u/56479731?v=4",
            "features": {
                "Followers": 42,
                "Repos": 119,
                "Stars": 0,
                "Forks": 1,
                "Commits": 956,
                "Issues": 131,
                "Contributions": 131,
                "Organizations": 0
            }
        },
        "averageFellow": {
            "score": 57,
            "features": {
                "Commits": 410,
                "Followers": 16,
                "Repos": 28,
                "Stars": 4,
                "Forks": 2,
                "Organizations": 1,
                "Issues": 44,
                "Contributions": 32
            }
        }
    }
}
```

/status

### Accepts

a get requetst

### Returns

```
    {"status": "success", "message": "backend server up and running"}
```
