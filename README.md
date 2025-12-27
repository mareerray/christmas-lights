# Merry Christmas & Happy New Year Card 🎄

A small festive web page built with HTML and CSS and a little JavaScript, featuring animated glowing lights, a falling snow effect, background music, and a Christmas/New Year greeting.

## Demo

Live demo: https://mareerray.github.io/christmas-lights/

![Happy Holiday card screenshot](assets/christmas-lights.png)

## Features

- Animated colored circles with glow effects
- Layered falling snow background using CSS `radial-gradient` and `@keyframes`
- Centered greeting text with custom Google Fonts
- Responsive layout for different screen sizes
- Footer with GitHub and LinkedIn social links (Font Awesome icons)
- Background music with a toggle button (speaker icon) in the footer

## Tech Stack

- HTML5
- CSS3
- JavaScript (for music toggle)
- Google Fonts (Indie Flower, Poppins)
- Font Awesome icons

## Getting Started

1. Clone the repository:
````
git clone https://github.com/mareerray/christmas-lights.git
````

2. Open the project folder and start the page:

- Option 1: Just open `index.html` in your browser.
- Option 2 (recommended): Use a local server, for example with VS Code Live Server.

3. Edit `index.html`, `styles.css`, and `script.js` if you want to customize the message, colors, animations, or sound behavior.

## Project Structure

````
├── index.html # Main HTML page
├── styles.css # Styles, animations, and layout
└── assets
    ├── favicon.png
    ├── christmas-lights-screenshot.png
    └── christmas-music.mp3
````

## Customization

- Update the greeting text inside `index.html` in the `.utilities` section.
- Change light colors or glow effects in `.circle` classes and `@keyframes glow-*` in `styles.css`.
- Adjust snow density and speed by editing the `body::before`, `body::after`, `snow-slow`, and `snow-fast` rules.
- Replace GitHub/LinkedIn links in the `<footer>` with your own profiles.
- Swap `assets/christmas-music.mp3` with your own audio file and update the `<audio>` `src` if needed.
- Tweak the footer speaker icon style and behavior in `styles.css` and `script.js`.

## Deployment

You can easily host this as a static site using GitHub Pages:

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Choose the branch (e.g. `main`) and root folder, then save.
4. GitHub will give you a public URL you can share with friends.

## Creator

- Created by **Mayuree Reunsati**  
- GitHub: [https://github.com/mareerray](https://github.com/mareerray)

## License

This is a personal learning/portfolio project.  
Feel free to fork and modify for your own greeting card.
