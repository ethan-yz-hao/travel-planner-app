# Travel Planner Project

---
## Description
This project is a web-based travel planner application that helps users plan their trips by storing key information like destinations and departure dates. The application would also attach images of the destination and provide useful information like weather forecasts. The application is built with modern web technologies including JavaScript, Node.js, Express, Webpack, SCSS, and integrates with various APIs for geolocation, weather data, and images.

## Features
### Core Functionalities
- **Trip Planning**: Allows users to input their destination and departure date to plan their trips.
- **Geolocation**: Utilizes the GeoNames API to retrieve geolocation data for the specified destination.
   - GeoNames API: [GeoNames API Documentation](http://www.geonames.org/export/web-services.html)
- **Weather Forecast**: Retrieves weather forecasts for the destination using the WeatherBit API, providing users with information about temperature and weather conditions.
   - WeatherBit API: [WeatherBit API Documentation](https://www.weatherbit.io/api)
- **Image Retrieval**: Fetches images related to the destination from the Pixabay API to provide visual representations of the location.
   - Pixabay API: [Pixabay API Documentation](https://pixabay.com/api/docs/)

### Front-End and User Interface
- **Responsive Design**: Designed with a responsive layout using HTML, CSS, and SCSS, ensuring optimal viewing experiences across various devices.
- **Dynamic Card Creation**: Dynamically generates cards for each trip, displaying destination information, departure dates, countdowns, weather forecasts, and images.
- **User Interaction**: Provides an intuitive user interface with features like adding trips, removing trips, and displaying trip details.
- **Local Storage Integration**: Implements local storage to store trip data, allowing users to persist their planned trips across sessions and browser refreshes, which ensures a seamless user experience and prevents data loss.

### Back-End and Server-Side Processing
- **Node.js and Express**: Powers the server-side logic, handling requests and responses between the client and various APIs.
- **Environment Variable Management**: Utilizes the dotenv package for securely managing environment variables, such as API keys.

### Development and Deployment
- **Webpack for Bundling**: Uses Webpack for bundling assets, optimizing performance and facilitating development and deployment workflows.
- **Efficient Asset Handling**: Manages images using Webpack, serving optimized sizes for faster load times and improved performance.
- **Automated Testing**: Implements Jest for automated testing to ensure code reliability and functionality.
- **Optimized Production Build**: Implements code optimization techniques in the production build, including minification and compression for enhanced performance.
- **Service Workers**: Implements service workers to enable offline usage, enhancing performance and user experience.

## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/ethan-yz-hao/travel-planner-app.git
2. Install NPM packages:
   ```bash
   npm install
3. Create a `.env` file in the root of your project and add the environment variables needed:
   ```bash
   API_KEY_GEONAMES=your_geonames_api_key_here
   API_KEY_WEATHERBIT=your_weatherbit_api_key_here
   API_KEY_PIXABAY=your_pixabay_api_key_here
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
