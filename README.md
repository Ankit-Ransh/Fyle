# GitHub Profile Viewer

Welcome to the GitHub Profile Viewer! This tool allows you to view repositories on GitHub with ease.

## Features

- View up to 100 repositories per page.
- Search for any valid GitHub profile and see all their repositories.

## Usage

1. Visit the GitHub Profile Viewer at ```https://github.com/Ankit-Ransh/Fyle```.
2. Use the navigation buttons to browse through the repositories.
3. Enter a valid GitHub username in the search bar and click "Search" to view their repositories.

## Project Structure

The project follows a structured and modular approach to ensure maintainability and extensibility. Below is an overview of the main directories and files:

- **`Server`**: The server directory contains the Node.js and Express backend code. It encompasses auth and middleware responsible for handling API requests and implementing the business logic.

- **`src`**: This directory contains static assets such as stylesheets, and client-side JavaScript files.

- **`README.md`**: The main README file for the project.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Ankit-Ransh/Fyle` 
2. Navigate to the project directory: 
3. Install the dependencies for the client and server:
   - For the server, run `cd /Backend/Server && npm install`
4. Create a `.env` file in the server directory and provide the necessary environment variables as specified in `.env.example`.
5. Install the necessary dependencies, navigate to the Server directory and run `npm i express dotenv cors body-parser nodemon`
7. Run the server and client separately:
   - For the server, navigate to the Server directory (`cd Backend/Server`) and run `nodemon index.js`.
   - Create a variable token and API.
   - token is your github personal token
   - API = https://api.github.com/users/

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js (with Express.js)
- Axios for API calling

## Precaution
uncomment API_URL = "http://localhost:8080", and comment the line,  BASE_REPO_URL = "https://fyle-wv7f.onrender.com";

## Contributing

Contributions to the project are welcome! If you encounter any bugs, have suggestions for improvements, or would like to add new features, please open an issue or submit a pull request.

When contributing, please adhere to the existing code style, follow best practices, and ensure thorough testing of your changes.

