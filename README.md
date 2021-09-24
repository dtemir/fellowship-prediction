# Fellowship Prediction
## GitHub Profile Comparative Analysis Tool Built with BentoML

![Fellowship Prediction Header Logo](https://socialify.git.ci/dtemir/fellowship-prediction/image?description=1&descriptionEditable=Comparative%20Analysis%20Tool%20for%20Future%20MLH%20Fellows&font=Rokkitt&forks=1&issues=1&language=1&logo=https%3A%2F%2Fi.imgur.com%2FJXjVwDA.png&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

Table of Contents:
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)

## Features

**Analyzes your GitHub Profile and presents you with a report on how likely you are to become the next MLH Fellow!**

Provides you with an **extensive analysis** on the following features of your profile:

* Commits
* Contributions
* Followers
* Forks
* Issues
* Organizations
* Repos
* Stars

And gives you a comprehensive score of how similar your GitHub Profile is to an **average MLH Fellow's GitHub**.

It also shows your statistics in a **user-friendly data visualization** format for you to **gauge the range of your skills**
and **become the next MLH Fellow!**

## Technologies Used

![Tech Stack Used](img/tech-stack.png)

We used the following technologies:
* **BentoML** along with **Heroku** to build an API endpoint that calculates the comprehensive score for the user based on a simple query.
* **Flask** deployed to **Heroku** to setup a bridge between the frameworks and collect the input data.
* **React.js** served on **Firebase** to provide user-friendly UI for future MLH fellows to use.

## Contributing

To contribute to this open-source project, follow these steps:

1. Fork the repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push to your branch: `git push origin <project_name>/<location>`.
5. Create a pull request.

To work on BentoML:
1. Go to [_model/bento_deploy_](https://github.com/dtemir/fellowship-prediction/tree/main/model/bento_deploy) to find necessary files.
2. Read [BentoML Start Guide](https://docs.bentoml.org/en/latest/quickstart.html) to learn more about the files.
3. Improve the BentoML Interface to provide our users with a more accurate score.
4. Create the BentoML prediction service with `python bento_packer.py` and commit the saved class from `bentoml get IrisClassifier:latest --print-location --quiet`.

_Alternatively:_ Reach out to one of the [Project Contributors](https://github.com/dtemir/fellowship-prediction/graphs/contributors) for questions.

## License

This project is served under the MIT License.

MIT License

Copyright (c) 2021 Damir Temir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

