# German Dashboard (Meine Orientierung)

A web application to learn time, date and weather in German.

## Getting Started

To get started with this project, you'll need to do the following:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/german-time.git
    cd german-time
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add your OpenWeatherMap API key:

    ```
    REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```

    You can get a free API key from [OpenWeatherMap](https://openweathermap.org/api).

4.  **Run the development server:**
    ```bash
    npm start
    ```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

This project is set up to automatically deploy to GitHub Pages using GitHub Actions.

### Setting up the API Key for GitHub Actions

To allow the GitHub Actions workflow to build your project, you need to add your OpenWeatherMap API key as a secret to your GitHub repository.

1.  Go to your repository on GitHub.
2.  Click on **Settings** > **Secrets and variables** > **Actions**.
3.  Click on **New repository secret**.
4.  For the name, enter `REACT_APP_WEATHER_API_KEY`.
5.  For the value, paste your OpenWeatherMap API key.
6.  Click **Add secret**.

Now, every time you push to the `main` branch, the GitHub Actions workflow will run, build your project with the API key, and deploy it to GitHub Pages.

You will also need to enable GitHub Pages in your repository settings:

1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Select the `gh-pages` branch and the `/ (root)` folder, then click **Save**.

Your app will be available at `https://<your-github-username>.github.io/german-dashboard/`.
