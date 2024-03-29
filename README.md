# Portfolio 2.0

## Summary

  - [About the Project](#about-the-project)
  - [Usage](#usage)
  - [Videos and Screenshots](#videos-and-screenshots)
  - [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)

## About the Project

March 2021
- I wasn't happy with my professional portfolio being a template attached to the static personal site I built before starting my full-stack web development classes. While I've been job hunting, I've been building this site as a side project, and diving into aspects of front-end I love. It's built in React and CSS, incorporating react-transition-group. The landing page has the first svg I coded myself, and I've learned a lot about keyframes! I spent a lot of time on the light/dark mode - building the toggle, flipping it, adjusting its size, and making sure it shows the correct side no matter which theme is loaded. I enjoyed learning about CSS variables to create the dark and light themes, including getting the svgs to switch colors! This was the first project I deployed with Netlify, and setting up a serverless contact form was a breeze! [Read about how I made the dark mode toggle.](https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9)

July 2021
- I've updated the blog portion of my site to pull my posts from https://dev.to/abbeyperini using Netlify AWS Lambda Functions. [Read the walkthrough.](https://dev.to/abbeyperini/a-walkthrough-of-updating-my-portfolio-site-with-netlify-functions-and-the-dev-to-api-dd2)

August 2021
- I designed, made, and added Shiba Inu loading and error SVGs and animated one of them. [Read about how I did it.](https://dev.to/abbeyperini/adding-shiba-inu-loading-and-error-svgs-to-my-react-site-lnj)

November 2021
- I accessibility audited my site and have [written a series of blogs](https://dev.to/abbeyperini/accessibility-auditing-my-portfolio-site-part-1-2k8k) on the audit and the fixes.

May 2022
- I updated my favicons and [wrote about it](https://dev.to/abbeyperini/what-are-favicons-2e9d).

April 2023
- I've made some content updates and added site analytics in the last year. Most recently, I've updated some packages, removed some deprecated things, and [added a `prefers-color-scheme` check](https://dev.to/abbeyperini/dark-mode-toggle-and-prefers-color-scheme-4f3m) to my theme utilities. I've removed my blogs from this site, because I will be putting them in my [digital garden](https://github.com/abbeyperini/digital-garden).

## Usage

- Visit [abbeyperini.dev](https://abbeyperini.dev)

## Videos and Screenshots

![gif walkthrough of abbeyperini.dev](/portfolioWalkthrough.gif)
![gif walkthrough of mobile abbeyperini.dev](/mobilePortfolio.gif)


![gif walkthrough of blog update](/blogWalkthrough.gif)

## Getting Started

To set up a local copy of the project follow the steps below.

## Prerequisites

* In an empty folder initialize a new Node.js project.
```sh
npm init
```

## Installation

1. Clone to local machine
```sh
git clone https://github.com/abbeyperini/Portfolio2.0.git
```
2. Install NPM packages
```sh
npm install 
```
3. Start program
```sh
npm start
```

## Built With

- Javascript
- CSS
- [React](https://reactjs.org/)
- [react-transition-group](https://www.npmjs.com/package/react-transition-group)

Deployed with Netlify.

## Authors

- **Abbey Perini** - [abbeyperini](https://github.com/abbeyperini)

## Acknowledgements

- [Chris Bongers](https://h.daily-dev-tips.com/creating-day-night-css-only-toggle-switch)
- [Hola svg](https://holasvg.com/icons/)
- [Devicon](https://devicon.dev/)
- [chris22smith](https://codepen.io/chris22smith/pen/RZogMa)

## License

I keep my code public to help other people learn. If you build inspired by my code or tutorial, an acknowledgment in your README would be nice. To use my code exactly in your own project, personal or commercial, all you have to do is credit me in an acknowledgment in your README and visibly on the page that uses it on your site. For example: ```<div class="copyright">&copy; Untitled. All rights reserved. Includes code by: <a href="https://abbeyperini.dev">Abbey Perini</a>.</div>```
