# Weather App

A React application that fetches and displays weather information for cities based on selected countries. The project
demonstrates the use of React with TypeScript, CSS Modules for styling, and Zod for data validation. It integrates the
OpenWeather API to fetch real-time weather data.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [License](#license)

## Project Overview

The Weather App allows users to select a country and search for a city to view its current weather conditions. The
application ensures accuracy by limiting searches to a predefined list of countries and validates user input with Zod.
Weather data is fetched from the OpenWeather API and displayed in a clean, responsive UI.

## Features

- **Country Selection:** Users can only search cities within the available country options.
- **City Search:** Perform searches for specific cities to view their weather conditions.
- **Real-Time Weather Data:** Displays temperature, humidity, wind speed, and weather description for the selected city.
- **Error Handling:** Alerts users for invalid inputs or unsuccessful API calls.
- **Loading Spinner:** Provides feedback while data is being fetched.
- **Responsive Design:** Ensures compatibility across devices with different screen sizes.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Adds static type-checking to JavaScript for increased reliability.
- **Zod:** Schema validation library for ensuring accurate data handling.
- **OpenWeather API:** Fetches weather data based on user inputs.
- **CSS Modules:** Scoped and reusable styling for components.
- **Vite:** Fast development and build tool.

## Installation

To run this project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/aaronmasm/weather-app.git

2. **Navigate to the project directory:**

    ```bash
    cd weather-app

3. **Install the dependencies:**

    ```bash
    npm install

4. **Add your OpenWeather API Key:**

    - Create a .env file in the project root.
    - Add the following line, replacing YOUR_API_KEY with your OpenWeather API key:

    ```bash
    VITE_API_KEY=YOUR_API_KEY

5. **Start the development server:**

    ```bash
    npm run dev

6. **Access the application:**

    Open your browser and go to http://localhost:5173.

## Usage

1. **Search Weather:**
    - Select a country from the predefined list and enter a city name.
    - Click on the "Search" button to fetch weather information for the specified location.

2. **Weather Details:**
    - View detailed weather information, including minimum and maximum temperature.
    - Weather details are fetched from the OpenWeather API.

3. **Responsive Design:**
    - The application is optimized for various devices, ensuring a seamless user experience across desktops, tablets,
      and phones.

## Project Structure

The project is organized as follows:

- `src/`
    - `components/`
        - `alert/` - Displays alerts for errors or warnings.
            - `Alert.module.css` - Styles for the alert component.
            - `Alert.tsx` - Alert component implementation.
        - `form/` - Handles user input for searching weather.
            - `Form.module.css` - Styles for the form component.
            - `Form.tsx` - Form component implementation.
        - `spiner/` - Displays a loading spinner during data fetching.
            - `Spiner.module.css` - Styles for the spinner component.
            - `Spiner.tsx` - Spinner component implementation.
        - `weather-detail/` - Displays detailed weather data.
            - `WeatherDetail.module.css` - Styles for the weather detail component.
            - `WeatherDetail.tsx` - Weather detail component implementation.
    - `data/`
        - `countries.ts` - Contains the list of supported countries.
    - `hooks/`
        - `useWeather.ts` - Custom hook for fetching and managing weather data.
    - `types/`
        - `index.ts` - TypeScript type definitions for the application.
    - `App.module.css` - Styles for the main `App` component.
    - `App.tsx` - Main application component.
    - `index.css` - Global styles for the application.
    - `main.tsx` - Entry point for the application.
    - `vite-env.d.ts` - Environment variable definitions for Vite.

- `public/`
    - `bg_weather.jpg` - Background image used in the application.

## Components

- **Alert:** Displays alerts to the user for errors or warnings.
- **Form:** Provides an input form for selecting a country and entering a city to fetch weather data.
- **Spinner:** Shows a loading spinner while waiting for data from the API.
- **WeatherDetail:** Displays weather details for the selected city, including temperature, weather conditions, and
  more.

## Styling

The application uses CSS Modules for styling, ensuring scoped and maintainable styles for all components.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

© 2024 Aarón Más Murro
