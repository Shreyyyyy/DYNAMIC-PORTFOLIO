# Dynamic Portfolio (HTML + Vanilla JS)

This is a static portfolio website built with clean HTML, modern CSS, and Vanilla JavaScript. It includes several dynamic features such as a 3D interactive canvas, scroll-triggered effects, and a dynamic cursor.

## Features

- **Interactive 3D Canvas**: A WebGL canvas running a 3D neural network animation.
- **Dynamic Cursor**: A custom cursor that expands and shows labels on hoverable elements.
- **Scroll Animations**: CSS and JS animations that trigger as you scroll through the page.
- **Luxury Theme**: "Old Money" aesthetic with dark mode, gold accents, and serif typography.

## Project Structure

```
/dynamic-portfolio
├── index.html             # Main application entry point (HTML)
├── src/
│   ├── main.js            # Main application logic and 3D setup
│   ├── style.css          # Global styles and layout
│   ├── canvas-engine.js   # 3D Canvas initialization and animation
│   ├── cursor.js          # Cursor tracking and HUD logic
│   ├── navigation.js      # Scroll effects and link highlighting
│   └── utils.js           # Utility functions
├── README.md              # Project documentation
```

## Local Setup

Since this project uses modern features (like ES modules imported in HTML) and requires a WebGL context, it's best run with a local development server to avoid CORS issues.

### Option 1: VS Code Live Server (Recommended)
1. Install the **Live Server** extension in VS Code.
2. Right-click on `index.html` and select "Open with Live Server".

### Option 2: Python
If you have Python installed, you can run a simple server from your terminal:
```bash
cd /path/to/your-project
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 3: Node.js
If you have Node.js installed:
1. Install `serve`: `npm install -g serve`
2. Run: `serve /path/to/your-project`

## How to Use
- Open `index.html` in your browser using one of the methods above.
- Scroll through the sections to see the parallax and scroll effects.
- Move your mouse around to interact with the 3D canvas and the custom cursor.
