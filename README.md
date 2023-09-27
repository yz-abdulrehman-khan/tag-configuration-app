# React Tag Data Fetcher

![React](https://img.shields.io/badge/React-17.0.2-blue) ![Axios](https://img.shields.io/badge/Axios-0.21.1-brightgreen)

## Overview

This is a simple React application that allows users to fetch configuration data for tags from an external API and display it in the browser.
The application also caches the configuration data to minimize network calls when fetching data for the same tags again.

## Features

- **Effortless Data Retrieval**: Enter the tags you want to fetch as input, separated by commas.
- **Caching Mechanism**: Cache configuration data in the browser's `localStorage` for speedy access when querying the same tags again.
- **Tag-specific Display**: Display configuration data individually for each entered tag.

## Getting Started

Follow these steps to run the application locally:

1. Clone this repository to your local machine:

2. Navigate to the project directory:

   ```bash
   cd react-tag-data-fetcher
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your preferred web browser and access the application at [http://localhost:3000](http://localhost:3000).

## How to Use

1. **Input Tags**: Enter the tags you want to fetch in the "Enter Tags" input field. Separate multiple tags with commas (e.g., "Frc001, Frc002").

2. **Fetch Data**: Click the "Fetch Data" button to retrieve the configuration data for the entered tags.

3. **Data Display**: The configuration data for each tag will be displayed individually below the input field.

## Author

- **Abdul Rehman Khan**
