# 🤖 AI-Powered Article Summarizer

![Challenge Day](https://img.shields.io/badge/Day%2020%2F30-Challenge-blueviolet)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


### [🚀 View Live Demo](https://ai-article-summarizer-a56q.onrender.com/)


A sleek, full-stack web application that takes any article URL and provides a concise, AI-generated summary. This tool is designed to combat information overload by delivering the key insights of long-form content in seconds.

![Project Demo GIF](./Screenshot%202025-07-20%20192046.png)
![Project Demo GIF](./Screenshot%202025-07-20%20192218.png)


---

## 🚀 About This Project

This project is **Day 20** of my **#30DaysOfVibeCoding** challenge.

After building a real-time application on Day 19, the "vibe" for today was to dive into the world of AI integration and tackle a practical, real-world problem. This project demonstrates a complete, full-stack workflow: scraping content from the web, processing it through a powerful AI model via an API, and presenting the result in a clean, user-friendly interface.

## ✨ Features

-   **AI-Powered Summarization:** Leverages the high-speed Groq API with the Llama 3 model to generate accurate and readable summaries.
-   **Full-Stack Architecture:** A robust Node.js/Express backend handles all business logic, ensuring the frontend remains fast and responsive.
-   **Intelligent Web Scraping:** The backend fetches the article from the provided URL and uses Cheerio to parse the HTML and extract its core text content.
-   **Polished User Experience:** The interface provides clear loading and error states to keep the user informed throughout the process.
-   **Modern & Responsive UI:** A clean, visually appealing design that works flawlessly on both desktop and mobile devices.

## 🛠️ Tech Stack

-   **Frontend:** HTML5, CSS3, Vanilla JavaScript
-   **Backend:** Node.js, Express.js
-   **Core Libraries:**
    -   `axios`: For making HTTP requests to fetch article HTML.
    -   `cheerio`: For efficient server-side web scraping.
    -   `groq-sdk`: The official SDK for interacting with the Groq AI API.
    -   `dotenv`: For secure management of environment variables (like the API key).
-   **Deployment:** Render

## 📦 Installation & Setup

To run this project locally, you will need a free Groq API key.

1.  **Get your API Key:**
    -   Visit [GroqCloud](https://console.groq.com/keys) and sign up for a free account.
    -   Create a new API key and copy it.

2.  **Clone the repository:**
    ```sh
    git clone https://github.com/shvbhii/AI-article-summarizer.git
    ```
3.  **Navigate to the project directory:**
    ```sh
    cd YOUR_REPO_NAME
    ```
4.  **Install dependencies:**
    ```sh
    npm install
    ```
5.  **Create a `.env` file** in the root of the project and add your API key:
    ```
    GROQ_API_KEY=gsk_YourActualGroqApiKeyGoesHere
    ```
6.  **Start the server:**
    ```sh
    node server.js
    ```
7.  Open your browser and go to `http://localhost:3000`.

## 🤝 Contributing & Issues

This was a fast-paced project for a daily challenge, but improvements are always welcome! Feel free to fork this repository, make your changes, and submit a pull request.

If you find a bug or have a feature request, please [open an issue](https://github.com/shvbhii/AI-article-summarizer.git).

1.  **Fork** the project.
2.  Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

## 🤖 The Role of AI

As part of the #30DaysOfVibeCoding challenge, I'm transparent about how AI played a role. For this project, AI acted as an expert consultant on API integration:

-   **Backend Logic:** Provided the boilerplate for using `axios` and `cheerio` in tandem to effectively scrape and clean article text.
-   **Prompt Engineering:** Suggested the optimal "system prompt" to instruct the Llama 3 model to produce concise, high-quality summaries.

## 👤 Creator & Connect

This project was built by **Shubhi Sharma** as part of a personal learning journey.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shvbhi)

Connect with me on LinkedIn! I'd love to hear your thoughts, feedback, or just say hi.