# Fellowship Prediction
## GitHub Profile Comparative Analysis Tool Built with BentoML

![Fellowship Prediction Header Logo](https://socialify.git.ci/dtemir/fellowship-prediction/image?description=1&descriptionEditable=Comparative%20Analysis%20Tool%20for%20Future%20MLH%20Fellows&font=Rokkitt&forks=1&issues=1&language=1&logo=https%3A%2F%2Fi.imgur.com%2FJXjVwDA.png&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

Table of Contents:
* [Features](#features)
* [Disclaimer](#disclaimer)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)
* [Demo](#demo)
* [Motivation](#motivation)
* [Team](#team)
  * [Damir](#damir-temir)
  * [Aymen](#aymen-bennabi)
  * [Tasha](#tasha-kim)
  * [Mofe](#eyimofe-ogunbiyi)
* [License](#license)


## Features

**Analyzes your GitHub Profile and presents you with a report on how likely you are to become the next MLH Fellow!**

Provides you with an **extensive analysis** on the following features of your profile:

| Feature | Description |
| :---- | :---- |
| Commits | Number of total commits the user made |
| Contributions | Number of repositories where the user made contributions |
| Followers | Number of followers the user has |
| Forks | Number of forks the user has in their repositories |
| Issues | Number of issues the user has raised |
| Organizations | Number of organizations the user is a part of |
| Repos |  Number of repositories the user has |
| Stars | Number of stars the user has on their repositories |

And gives you a comprehensive score of how similar your GitHub Profile is to an **average MLH Fellow's GitHub**.

It also shows your statistics in a **user-friendly data visualization** format for you to **gauge the range of your skills**
and **become the next MLH Fellow!**

## Disclaimer

Dear user, building this application, we were trying our best to provide with data insights into things you can improve through your GitHub Profile.
This is a hackakthon project that is built by Open Source Fellows and is not directly affiliated with MLH in any capacity.
**The positive score in your application does not guarantee your chances of becoming a fellow** because there are external things apart from GitHub that affect the decision process.

We also hope that you understand that your **GitHub Stats do not affect your value to the community as a developer**.
We all have different paths to success in our lives, and they do not necessarily involve high scores.
Regardless of your numbers, you are going to succeed in your journey.

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

To work on the Back-End:
1. Consult [_scr/server_](https://github.com/dtemir/fellowship-prediction/tree/main/src/server) and its README.
2. Make contributions.

_Alternatively:_ Reach out to one of the [Project Contributors](https://github.com/dtemir/fellowship-prediction/graphs/contributors) for questions.

## Demo

![YouTube Logo that Leads to our demo](img/youtube.png)

## Motivation

We built this project because we wanted to **help prospective MLH Fellows** with their progress toward a better GitHub profile
with solid projects and a record of active work. 
We also wanted to **give them some insights** into what an average fellow at MLH looks like.

When we were just aspiring to become MLH Fellows, we would look for different sources of information to know what 
MLH is looking for in their fellows and better ways to prepare. 
So we tried to address this issue and hopefully support future fellows on their way to success.

However, we make an important notion that **your GitHub Profile does not define you as a developer**. 
Our tool is simply to let you see into the data for areas of potential improvement and keep working toward your goals.
We do not consider things like:
* Personal communication levels
* Spot availability
* Match in project interests

The mentioned points affect your chances on becoming a fellow. 
Unfortunately, there is no way to take them into consideration.

## Team

<div align="center">
<table>
  <tr>
    <td align="center"><a href="https://github.com/dtemir"><img src="https://avatars.githubusercontent.com/u/62047062?v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Damir Tamir</b></sub></a><br /></td>
 <td align="center"><a href="https://github.com/bennaaym"><img src="https://avatars.githubusercontent.com/u/68559207?v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Aymen Bennabi</b></sub></a><br /></td>
 <td align="center"><a href="https://github.com/tashakim"><img src="https://avatars.githubusercontent.com/u/33438822?v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Tasha Kim</b></sub></a><br /></td>
 <td align="center"><a href="https://github.com/mofe64"><img src="https://avatars.githubusercontent.com/u/56479731?v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Eyimofe Ogunbiy</b></sub></a><br /></td>
  </tr>
</table>
</div>

### Damir Temir

<br>
<div align="center">
<img width="200px" src="https://avatars.githubusercontent.com/u/62047062?v=4" alt="Damir Temir">
</div>
<br>

Working on the project, I learned the basics of BentoML and deploying the server model to the cloud like Heroku.
I also gained some experience in Data Mining and Processing, which is an invaluable skill toward my journey to Machine Learning Engineering.

The contributions I made are:
* Wrote Jupyter Notebooks where we showcase our work with the GitHub API.
* Set up a Git repository with active GitHub Projects and proper infrastructure.
* Mined data on more than 650 fellows in the MLH Fellowship organization.
* Created a BentoML API node deployed to Heroku for querying.


### Aymen Bennabi

<br>
<div align="center">
<img width="200px" src="https://avatars.githubusercontent.com/u/68559207?v=4" alt="Aymen Bennabi">
</div>
<br>

During the hackathon I majorly worked on the Front-End part of the project. I created a friendly UI/UX to collect data and visualize the results. 
Also, I helped a little bit with the Back-End by creating a facade API to make working with GitHub easier. The new interface adds a level of abstraction that mainly focuses on quantitative data that we needed to do the statistical analysis. 

I really enjoyed the Orientation Hackathon. I now feel more confident working with Git/GitHub. I also started learning about functional programming base API (OCamal/dream).

### Tasha Kim

<br>
<div align="center">
<img width="200px" src="https://avatars.githubusercontent.com/u/33438822?v=4" alt="Aymen Bennabi">
</div>
<br>

Utilizing BentoML gave us a flexible, high-performance framework to serve, manage, and deploy our model to predict MLH fellowship status using user's GitHub profiles. In particular, I enjoyed working with ML frameworks like Matplotlib, Seaborn, and Pandas, as well as Cloud native deployment services, and API serving that were all packaged into a single service. 

Some of my contributions were:
- Implemented the ANNOVA model as an alternative improved statiscal comparison to the one we are using now. Our current one works fine, but we can use this in the case we want a more rigorous and detailed comparison (multiple pairwise comparison (post hoc comparison) analysis for all unplanned comparison using Tukey’s honestly significantly differenced (HSD) test).
- Built a CI (continuous integration) pipeline for build, run, and testing of our node app as well as python app using github actions.
- Implemented method to compute average statistics for aggregated mlh fellow data.

Shout out to everyone in our team!

### Eyimofe Ogunbiyi

<br>
<div align="center">
<img width="200px" src="https://avatars.githubusercontent.com/u/56479731?v=4" alt="Eyimofe Bennabi">
</div>
<br>

I worked on the Back-End Server for the project and the deployment pipeline on Heroku. I was able to use the Flask Rest Framework for the Back-End which was a new experience for me.

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

