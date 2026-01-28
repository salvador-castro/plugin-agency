# Plugin Agency Landing Page

Welcome to the **Plugin Agency** landing page project. This is a responsive, single-page application built for a digital agency specializing in web development, automation, and blockchain solutions.

## 🚀 Live Demo

[Link to Live Demo] (Add your deployment link here if applicable)

## 🛠 Features

-   **Modern Design**: Sleek, responsive interface with a focus on user experience.
-   **Video Hero**: Dynamic video background for a strong visual impact.
-   **Team Showcase**: Dedicated section highlighting our expert team members with custom avatars.
-   **Services Overview**: Clear presentation of agency capabilities.
-   **Contact Form**: Functional, clean contact form for potential clients.
-   **Responsive Layout**: Optimized for desktop, tablet, and mobile devices with hamburger menu.

## 💻 Tech Stack

-   **Frontend Library**: React (v19.2)
-   **Build Tool**: Vite (v7.2.4)
-   **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid)
-   **Linting**: ESLint (v9.39.1)
-   **Assets**: Custom video background and team member avatars.

## 📂 Project Structure

```
plugin-agency/
├── public/
│   ├── assets/
│   │   ├── equipo/       # Team member avatars (4 images)
│   │   ├── hero/         # Hero section video background
│   │   └── logo/         # Agency logo
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx    # Navigation bar with responsive menu
│   │   ├── Hero.jsx      # Hero section with video background
│   │   ├── About.jsx     # Team showcase section
│   │   ├── Services.jsx  # Services overview
│   │   ├── Contact.jsx   # Contact form
│   │   └── Footer.jsx    # Footer component
│   ├── assets/           # Additional source assets
│   ├── App.jsx           # Main application layout
│   ├── App.css           # App-specific styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles and CSS variables
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Dependencies and scripts
```

## 📦 Components

-   **Navbar**: Responsive navigation bar with hamburger menu for mobile devices
-   **Hero**: Landing section with dynamic video background
-   **About**: Team showcase featuring all agency members with avatars
-   **Services**: Overview of agency services and capabilities
-   **Contact**: Client contact form
-   **Footer**: Page footer with additional information

## 🛠️ Getting Started

Follow these steps to set up the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/salvador-castro/plugin-agency.git
    cd plugin-agency
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    The app will start at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```

5.  **Preview production build**
    ```bash
    npm run preview
    ```

## 👥 The Team

-   **Maximiliano Perez**: Strategy Lead
-   **Pablo**: Automation Specialist
-   **Romina Garbino**: Blockchain Ambassador & VA
-   **Salva Castro**: Web Developer

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
