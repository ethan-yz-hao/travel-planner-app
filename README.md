# News Article Evaluator Project

---
## Description
This project is a web-based application designed to evaluate news articles. It provides functionality to analyze the polarity, subjectivity, and text snippets from a given URL of a news article. The application is built with modern web technologies including JavaScript, Webpack, SCSS, and service workers.

## Features

### Core Functionalities
- **Semantic Analysis**: Utilizes the MeaningCloud API to evaluate news articles for polarity (positive/negative sentiment) and subjectivity (objective/subjective assessment).
  - MeaningCloud Sentiment Analysis API: https://www.meaningcloud.com/developer/sentiment-analysis/doc 
- **Text Snippet Display**: Extracts and displays snippets from the news article, providing an overview.
- **URL Validation**: Employs JavaScript and regex to validate user-input URLs, ensuring proper format and structure.

### Front-End and User Interface
- **Responsive Web Design**: Crafted with HTML, CSS, and enhanced with Sass, the design ensures a seamless and responsive user experience across various devices.
- **Dynamic Interaction**: JavaScript enables dynamic client-side interactions, contributing to a more interactive and responsive user interface.

### Back-End and Server-Side Processing
- **Node.js and Express**: Forms the backbone of server-side processing, managing requests and integrating seamlessly with the MeaningCloud API.
- **Environment Variable Management**: Uses Dotenv for secure and efficient management of environment variables like API keys.

### Development and Deployment
- **Webpack for Asset Bundling**: Efficiently manages and bundles assets, using Babel for JavaScript transpiling to ensure cross-browser compatibility.
- **Efficient Image Handling**: Manages images using Webpack, serving optimized sizes for faster load times and improved performance.
- **Automated Testing with Jest**: Ensures the reliability and functionality of JavaScript code through comprehensive automated testing.
- **Optimized Production Build**: Implements code optimization techniques in the production build, including minification and compression for enhanced performance.
- **Service Workers**: Implemented to enable offline usage of the app, significantly enhancing performance and the overall user experience.

## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/ethan-yz-hao/news-evaluation-nlp-app.git
2. Install NPM packages:
   ```bash
   npm install
3. Create a `.env` file in the root of your project and add the environment variable `API_KEY`:
   ```bash
   API_KEY=your_meaningcloud_api_key_here
4. Build the project:
    - To build the project for production, run:
      ```bash
      npm run build-prod
      ```
    - To build the project for development, run:
      ```bash
      npm run build-dev
      ```
## Usage
1. Start the server:
   ```bash
   npm start
2. Access the application through a web browser at `localhost:8080`.
