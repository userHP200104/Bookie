<!-- REPLACE ALL THE [userHP200104] TEXT WITH YOUR GITHUB PROFILE NAME & THE [Bookie] WITH THE NAME OF YOUR GITHUB PROJECT -->

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/userHP200104/Bookie?color=%000000)
![GitHub watchers](https://img.shields.io/github/watchers/userHP200104/Bookie?color=%000000)
![GitHub language count](https://img.shields.io/github/languages/count/userHP200104/Bookie?color=%000000)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/userHP200104/Bookie?color=%000000)
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Behance][behance-shield]][behance-url]

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Hansin Prema</h5>
<h5 align="center" style="padding:0;margin:0;">200104</h5>
<h6 align="center">Interactive Development 300</h6>
</br>
<p align="center">

  <a href="https://github.com/userHP200104/Bookie">
    <img src="readMeAssets/image%201.png" alt="Logo" width="140" height="140">
  </a>
  
  <h3 align="center">Bookie</h3>

  <p align="center">
    Create, Complete and Track your Bets<br>
      <a href="https://github.com/userHP200104/Bookie"><strong>Explore the docs »</strong></a>
   <br />
   <br />
    <a href="https://github.com/userHP200104/Bookie/issues">Report Bug</a>
    ·
    <a href="https://github.com/userHP200104/Bookie/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
   * [User-flow](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1][image1]

### Project Description

Place, Accept and keep track of bets. The more bet you win the higher you rank.

A fun way of keeping track of bets made with friends and strangers.

### Built With

* [Firebase](https://firebase.google.com/)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [GitHub](https://github.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [React Native](https://reactnative.dev/docs/environment-setup) and [Expo](https://docs.expo.dev/get-started/installation/) is installed on your machine.
### How to install

### Installation
Here are a couple of ways to clone this repo:

1. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/userHP200104/Bookie.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

4. Run the following in the command-line to start Bookie:
    ```sh
   expo start
   ``` 

5. Download Expo Go on your phone to run Bookie:
    - [Expo Go for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_ZA&gl=US&pli=1)
    - [Expo Go for iOS](https://apps.apple.com/us/app/expo-go/id982107779)


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality
### Login and Register

The login and register function utilises `Firebase Authentication` to store the account detail and allows the user too login once by remebering their login.

![image2][image2]

### Currency

When an account is created the user is given a `100 Betting Tokens` to start betting with. Form there they will need to make gain tokens by either winning a bet or creating a bet.

![image9][image9]

### Create a Bet

When `creating a bet` the user is asked to fill int he name, description, wager amount and how many people can participate in the bet.

![image4][image4]
### Accepting a Bet

When `accepting a bet` the user can see how much the entry wager is, the requirements of the bet and the odds of winings the bet.

![image5][image5]

### Compeleting a Bet

When `completing a bet` the user is required to take a picture of them compleing the bet which is the verfied by the creator of the bet.

![image6][image6]

### Your Bets

WHe you `create a bet` it is stored in `your bets` wher you can view your bets and select a winner of the bet.

![image7][image7]

### Learderboard

The `leaderboard` shows the top 10 users who have won the most bets. 

![image8][image8]


<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
## Concept Process

### Ideation

![image5][image5]
<br>
![image6][image6]

### Wireframes

![image13][image13]

### User-flow

![image12][image12]

### Entity–Relationship Diagram

![image10][image10]

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->

* Project created and `Frontend` implemented.
* `Login and Registration` implemented through `Firebase Authentication`.
* `Firestore Collections` made to store `Users` and their `Bets`.
* `Betting Functionality` added where a user can `Create`, `Accept` or `Complete` a bet


#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* This was a very fun project and challenging project to create since it was the fisrt time I had created a mobile application.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Trouble incorporating `Firebase` since it was my first time using it.
* Trouble implementating the `Camera` functionality.


### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Introducing `Betting` with real money.
* Automated `Bet Completion AI` 

<!-- MOCKUPS -->
## Final Outcome

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration][video]

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/userHP200104/Bookie/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->
## Authors

* **Your Name & Surname** - userHP200104(https://github.com/userHP200104)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- LICENSE -->
## Contact

* **Hansin Prema** - [hansinprema@gmail.com](mailto:hansinprema@gmail.com) 
* **Project Link** - https://github.com/userHP200104/Bookie

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [React Native Docs](https://reactnative.dev/docs/getting-started)
* [Expo Docs](https://docs.expo.dev/)
* [Firebase Docs](https://firebase.google.com/docs?gclid=CjwKCAiA68ebBhB-EiwALVC-NtPHMWqm8d5u4VC82FWCF01fTRlmDu4igaQHeeQFRaC1G6YQOZ1ZaRoCCZ8QAvD_BwE&gclsrc=aw.ds)


<!-- MARKDOWN LINKS & IMAGES -->
[image1]: readMeAssets/image%201.png
[image2]: readMeAssets/image%202.png
[image3]: readMeAssets/image%203.png
[image4]: readMeAssets/image%204.png
[image5]: readMeAssets/image%205.png
[image6]: readMeAssets/image%206.png
[image7]: readMeAssets/image%207.png
[image8]: readMeAssets/image%208.png
[image9]:  readMeAssets/image%209.png
[image10]: readMeAssets/erd.png
[image11]: readMeAssets/style.png
[image12]: readMeAssets/user%20flow.png
[image13]: readMeAssets/Wireframes.png
[video]: readMeAssets/video.mp4


<!-- Refer to https://shields.io/ for more information and options about the shield links at the top of the ReadMe file -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hansin-prema-b474401a1/
[behance-shield]: https://img.shields.io/badge/-Behance-black.svg?style=flat-square&logo=behance&colorB=555
[behance-url]: https://www.behance.net/hansinprema1
