# Movie Catalog React App

This project is a React application that displays a catalog of movies fetched from a JSON file. Users can filter movies by language, country, or genre.

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) or yarn

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/movie-catalog-app.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd movie-catalog-app
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running the App

1. **Start the Development Server:**

   ```bash
   npm start
   ```

   This command will start the development server and open your app in the default web browser.

2. **Open Your Browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

### Building the App for Production

To create a production build of your app, run the following command:

```bash
npm run build
```

This command will create a production build of your app in the `build` folder.

### Deploying the App

To deploy your app to a hosting service like GitHub Pages, follow these steps:

1. **Install `gh-pages` Package:**

   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json` Scripts:**

   Add the following lines to the `scripts` section of your `package.json` file:

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

3. **Deploy Your App:**

   Run the following command to deploy your app:

   ```bash
   npm run deploy
   ```

4. **Access Your Deployed App:**

   After successful deployment, your app will be accessible at the URL provided by the hosting service you chose.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) - Routing library for React
- [Bootstrap](https://getbootstrap.com/) - CSS framework for styling

## Authors

- [Nehal Ingole](https://github.com/Ingole712521)
