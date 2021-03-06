<h1 align="center">Windbnb</h1>

<div align="center">
   Solution for a challenge from  <a href="https://devchallenges.io/challenges/3JFYedSOZqAxYuOCNmYD" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://windbnb-rddjevsid-enias-c137.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/enias-oliveira/windbnb/tree/master/src">
      Solution
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![MainScreenshot](https://lh3.googleusercontent.com/pw/ACtC-3fTrSjUnR0T8K1UQLPIWqX81jYM1J6CLTqKwTJq-scIHNNeBCraJMb9uZF6sDVDU3Yk1VlkzQCLPzeu3lj0E_z0TDjF6evL2GN6vSKfRX-fdeCLaMOhsdnOBwZB4IasNE7xixVv-nnpmMTci41gl3Eb=w1859-h785-no?authuser=0)

Windbnb (a small version of Airbnb) is a React App build with the Atomic design component structure.

It was a great challenge deciding how each component fits in the whole application and maintaining the structure of the project.
I also decided to use the React Context API instead of Redux and learned how to create a custom hook to manage "The Global State".

![HomePage](https://lh3.googleusercontent.com/pw/ACtC-3dCJ6KvlvtQmGwHj0qdW9O9m4XYa0vhKpeUagx3ThGyCV3uKz_A4WD_Y0GHYHVuDayYkzO1lcsRyISFzS729KK6fTxJvZyK5jgC8yEudlhfCP_VcYYeyqLuTxzchbbukO712V9aq9-4H2GEhIDidwKE=w409-h833-no?authuser=0)

The styling was made with Tailwind CSS and was my first attempt to use a CSS Framework. I had to do a lot of reading to understand the use of classes to style my components directly in the HTML, but it gave the project code a lot of simplicity by removing the "CSS Layer".

I liked the simplicity of Tailwind and its mobile-first approach made the responsive design very easy and fast.

![ListOfPlaces](https://lh3.googleusercontent.com/pw/ACtC-3duB-h3XNj2olwTd4KOoiBcvCyD5AYW-UeHRCxCSgckcb4DISWwwZ2CHmAKedEtnIPfImL-y7BLL_yPCh8E42eqqlWuJ7G3BbAGSVwdh92VF_pPxUv42aaWrdUY6lkD1qQGRqgO_ItT1uzcegYpYOG3=w403-h839-no?authuser=0)

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/): A JavaScript library for building user interfaces
- [styled components](https://styled-components.com/): Visual primitives for the component age by using the best bits of ES6 and CSS to style apps.
- [React Router](https://reactrouter.com/): A collection of navigational components
- [Tailwind](https://tailwindcss.com/): A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.

## Features

- User story: I can see a list of properties
  ![SearchResult](https://lh3.googleusercontent.com/pw/ACtC-3cPDZIZW4bspv5mmeiZCf7fNL6fli5yTPAcqmLPys2aN_3YM3x_AykgO7-6_cbcfaoQGbfMAOtTVmiztInfmKbhEOXZCnZmt0c4ABo3vfkxqluKr8H12CUdm163Wksm2HjFbrPKJ3Ag-Dm8Dr1xzPtP=w400-h831-no?authuser=0)
- User story: I can see the property card with a name, rating, apartment type, and super host
- User story: I can open the filter drawer
  ![SearchBar](https://lh3.googleusercontent.com/pw/ACtC-3e8OkM8wWxbvpFIXXr5QA5Glw7l26eQZDtZDngOXV65FT2Hrq-z4mN6ewkwGXd27fqisd8GVcF7usNfxGTRf9Q7c3l6p30H45Wqs5P3XL-XUiJjiW9oCczaudEVQaJisBfNVBIix5dxtpB7SFXwi60V=w404-h836-no?authuser=0)
- User story: I can filter properties by location and number of guests
- User story: I can see the number of filtered items
- User story: I can see pages following given designs
<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

## How To Use

## Available Scripts

### Basics: Using NPM

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/enias-oliveira/windbnb

# Install dependencies
$ npm install

# Run the app
$ npm start
```

### Advanced: More scripts and using Yarn

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [devChallenges](https://devchallenges.io/)

## Contact

- GitHub [@enias-oliveira](https://github.com/enias-oliveira)
- LinkedIn [@enias-oliveira](https://www.linkedin.com/in/enias-oliveira/)
- Gitlab [@enias-c137](https://gitlab.com/enias-c137)
