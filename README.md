# Global Daily News

A modern, responsive news website built with vanilla HTML, CSS, and JavaScript. Features a clean design, interactive carousel, search functionality, and dark/light theme support.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive Hero Carousel**: Auto-playing image carousel with navigation controls and indicators
- **Breaking News Ticker**: Animated scrolling ticker for urgent news updates
- **Article Grid**: Dynamic article display with hover effects and animations
- **Search Functionality**: Real-time search with modal results and query highlighting
- **Newsletter Subscription**: Contact form for user engagement

### User Experience
- **Dark/Light Theme**: Toggle between dark and light modes with system preference detection
- **Smooth Animations**: CSS transitions and JavaScript animations for enhanced UX
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Back to Top**: Floating button for easy navigation
- **Modal System**: Article details and search results in modal overlays

### Content Categories
- World News
- Politics
- Business
- Technology
- Sports
- Entertainment
- Health

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, Grid, and Flexbox
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins font family for typography

## 📁 Project Structure

```
global_news/
├── index.html          # Main HTML file
├── style.css           # Complete stylesheet with design system
├── app.js              # JavaScript functionality
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

## 🎨 Design System

The project uses a comprehensive design system with:

### Color Palette
- **Primary**: Teal-based color scheme
- **Semantic Colors**: Success, error, warning, info states
- **Dark Mode**: Complete dark theme implementation
- **Background Colors**: 8 different accent colors for variety

### Typography
- **Font Family**: Poppins (primary), system fonts (fallback)
- **Font Sizes**: 11px to 30px scale
- **Font Weights**: 400, 500, 550, 600
- **Line Heights**: Tight (1.2) and Normal (1.5)

### Spacing & Layout
- **Spacing Scale**: 0px to 32px in 2px increments
- **Border Radius**: 6px to 12px with full radius option
- **Shadows**: 5 levels from subtle to prominent
- **Container Widths**: Responsive breakpoints (640px, 768px, 1024px, 1280px)

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Local Development
For local development, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Hero Carousel
- Auto-playing slideshow with 5-second intervals
- Navigation arrows and dot indicators
- Pause on hover and when tab is not active
- Touch/swipe support for mobile devices
- Keyboard navigation (arrow keys)

### Article System
- Dynamic article rendering from JavaScript data
- Category-based filtering
- Modal popup for full article view
- Reading time estimates
- Hover animations and effects

### Search Feature
- Real-time search with debouncing
- Query highlighting in results
- Modal-based results display
- Search across headlines, excerpts, and categories

### Theme System
- Automatic system preference detection
- Manual theme toggle
- Persistent theme selection (localStorage)
- Smooth transitions between themes

## 🔧 Customization

### Adding New Articles
Edit the `appData.articles` array in `app.js`:

```javascript
{
  id: 10,
  category: "Technology",
  icon: "💻",
  image: "path/to/image.jpg",
  headline: "Your Article Headline",
  excerpt: "Article excerpt...",
  readTime: "5 min read"
}
```

### Modifying Colors
Update CSS custom properties in `style.css`:

```css
:root {
  --color-primary: #your-color;
  --color-background: #your-bg-color;
}
```

### Adding New Categories
1. Add category to navigation in `index.html`
2. Update category filtering in `app.js`
3. Add corresponding styles if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**OCHIRIA ELIAS ONYAIT**
- Copyright © 2025

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue in the project repository.

---

*Built with ❤️ using modern web technologies*