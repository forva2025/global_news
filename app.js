// Application data
const appData = {
    heroSlides: [
      {
        id: 1,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755531952/pplx_project_search_images/718904352dc979cd94b50ff0cc2efab2c7632cdb.png",
        headline: "World Leaders Convene for Critical International Summit",
        category: "World",
        excerpt: "Global leaders gather to address pressing international issues and strengthen diplomatic ties"
      },
      {
        id: 2,
        image: "https://pplx-res.cloudinary.com/image/upload/v1754927793/pplx_project_search_images/270bab6e691c46b4b6f4ff9aeaa5d9e0cce6b68c.png",
        headline: "AI Revolution Transforms Modern Workplace",
        category: "Technology",
        excerpt: "Artificial intelligence integration reshapes how businesses operate and innovate"
      },
      {
        id: 3,
        image: "https://pplx-res.cloudinary.com/image/upload/v1754695144/pplx_project_search_images/392b98db2e0f475e92a0cc53a28bebaf1ca49532.png",
        headline: "Stock Markets Show Strong Recovery Amid Economic Optimism",
        category: "Business",
        excerpt: "Trading floors buzz with activity as markets respond to positive economic indicators"
      },
      {
        id: 4,
        image: "https://pplx-res.cloudinary.com/image/upload/v1758367959/pplx_project_search_images/b1f0002025be2a34bad2860587f5da3819bbe896.png",
        headline: "Breaking: Live Coverage of Developing Story",
        category: "Breaking News",
        excerpt: "Reporters provide real-time updates on this developing situation"
      },
      {
        id: 5,
        image: "https://pplx-res.cloudinary.com/image/upload/v1758367959/pplx_project_search_images/ef2dd831290771eaf14772978d2c9814d73b1676.png",
        headline: "Hollywood Stars Shine at Major Film Premiere",
        category: "Entertainment",
        excerpt: "A-list celebrities gather for the highly anticipated movie premiere event"
      }
    ],
    breakingNews: [
      "BREAKING: International summit reaches historic agreement on climate action",
      "URGENT: Technology sector sees unprecedented growth in AI investments",
      "DEVELOPING: World markets respond positively to new economic policies",
      "LATEST: Healthcare innovations show promising results in clinical trials",
      "UPDATE: Sports championships break viewership records globally"
    ],
    articles: [
      {
        id: 1,
        category: "World",
        icon: "🌍",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755422147/pplx_project_search_images/c0073a455c2ead74333622e6e281e296e2c2d495.png",
        headline: "G7 Summit Addresses Global Economic Challenges",
        excerpt: "World leaders discuss strategies to tackle inflation, supply chain issues, and sustainable development goals during the three-day summit.",
        readTime: "5 min read"
      },
      {
        id: 2,
        category: "Technology",
        icon: "💻",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754651497/pplx_project_search_images/f69f843601d28b9d7e44ad1a7915087606f53bbc.png",
        headline: "Future of Work: AI-Powered Offices Transform Business",
        excerpt: "Companies worldwide are adopting artificial intelligence to streamline operations and enhance productivity in modern workplace environments.",
        readTime: "4 min read"
      },
      {
        id: 3,
        category: "Business",
        icon: "💼",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754839049/pplx_project_search_images/4354ca8774d510adbbcbe05aad7d84cf85d250a7.png",
        headline: "Wall Street Trading Reaches New Heights",
        excerpt: "Financial markets experience significant growth as investors show confidence in emerging sectors and technological innovations.",
        readTime: "3 min read"
      },
      {
        id: 4,
        category: "Politics",
        icon: "🏛️",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757077866/pplx_project_search_images/41731ec3b25bdc2b9a727933f3dac70e54b7056e.png",
        headline: "Legislative Assembly Debates Key Policy Reforms",
        excerpt: "Politicians gather to discuss important legislation that could reshape domestic policies and governance structures.",
        readTime: "6 min read"
      },
      {
        id: 5,
        category: "Entertainment",
        icon: "🎬",
        image: "https://pplx-res.cloudinary.com/image/upload/v1758367959/pplx_project_search_images/ef2dd831290771eaf14772978d2c9814d73b1676.png",
        headline: "Red Carpet Glamour at Movie Premiere",
        excerpt: "Hollywood's biggest stars attend the premiere of the year's most anticipated blockbuster film.",
        readTime: "2 min read"
      },
      {
        id: 6,
        category: "Health",
        icon: "🏥",
        image: "https://pplx-res.cloudinary.com/image/upload/v1758367959/pplx_project_search_images/4ea850b82c40cff4bb823a73fafe83fcce51b0eb.png",
        headline: "Medical Technology Advances Patient Care",
        excerpt: "Cutting-edge hospital equipment and diagnostic tools are revolutionizing healthcare delivery and patient outcomes.",
        readTime: "4 min read"
      },
      {
        id: 7,
        category: "Technology",
        icon: "💻",
        image: "https://pplx-res.cloudinary.com/image/upload/v1755317314/pplx_project_search_images/d4eb4c04c37d2412077dea8855195c2217c9361e.png",
        headline: "Robotics and Human Collaboration in the Workplace",
        excerpt: "Advanced robotics systems work alongside humans to create more efficient and innovative business environments.",
        readTime: "5 min read"
      },
      {
        id: 8,
        category: "Sports",
        icon: "⚽",
        image: "https://pplx-res.cloudinary.com/image/upload/v1754846772/pplx_project_search_images/33a4733c4f82ea31ae6ba07d2794208cd0d205a2.png",
        headline: "Stadium Technology Enhances Fan Experience",
        excerpt: "Modern sports venues integrate cutting-edge technology to provide immersive experiences for spectators and athletes.",
        readTime: "3 min read"
      },
      {
        id: 9,
        category: "Health",
        icon: "🏥",
        image: "https://pplx-res.cloudinary.com/image/upload/v1757077866/pplx_project_search_images/41731ec3b25bdc2b9a727933f3dac70e54b7056e.png",
        headline: "Advanced Medical Equipment Saves Lives",
        excerpt: "State-of-the-art medical devices and monitoring systems improve patient care and surgical outcomes in hospitals worldwide.",
        readTime: "4 min read"
      }
    ],
    trendingNews: [
      {
        id: 1,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755437118/pplx_project_search_images/f5b1ee63da4110719c9e3120da6547e9149da29f.png",
        headline: "Tech Conference Showcases Future Innovations",
        category: "Technology"
      },
      {
        id: 2,
        image: "https://pplx-res.cloudinary.com/image/upload/v1758367959/pplx_project_search_images/b1f0002025be2a34bad2860587f5da3819bbe896.png",
        headline: "Media Industry Embraces Digital Transformation",
        category: "Business"
      },
      {
        id: 3,
        image: "https://pplx-res.cloudinary.com/image/upload/v1758367959/pplx_project_search_images/b1f0002025be2a34bad2860587f5da3819bbe896.png",
        headline: "Press Freedom Remains Critical Global Issue",
        category: "World"
      }
    ]
  };
  
  // Global variables
  let currentSlide = 0;
  let slideInterval;
  let allArticles = [];
  
  // DOM Elements
  const elements = {
    navToggle: document.getElementById('nav-toggle'),
    navMenu: document.getElementById('nav-menu'),
    themeToggle: document.getElementById('theme-toggle'),
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    searchModal: document.getElementById('search-modal'),
    searchResults: document.getElementById('search-results'),
    modalClose: document.getElementById('modal-close'),
    backToTop: document.getElementById('back-to-top'),
    carouselSlides: document.getElementById('carousel-slides'),
    carouselPrev: document.getElementById('carousel-prev'),
    carouselNext: document.getElementById('carousel-next'),
    carouselIndicators: document.getElementById('carousel-indicators'),
    tickerContent: document.getElementById('ticker-content'),
    articlesGrid: document.getElementById('articles-grid'),
    trendingNews: document.getElementById('trending-news'),
    newsletterForm: document.getElementById('newsletter-form')
  };
  
  // Initialize application
  document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
  });
  
  function initializeApp() {
    setupEventListeners();
    initializeCarousel();
    initializeBreakingNews();
    renderArticles();
    renderTrendingNews();
    initializeScrollAnimations();
    initializeTheme();
    initializeSmoothScroll();
  }
  
  function setupEventListeners() {
    // Mobile navigation toggle
    elements.navToggle.addEventListener('click', toggleMobileMenu);
    
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Search functionality
    elements.searchBtn.addEventListener('click', performSearch);
    elements.searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') performSearch();
    });
    
    // Modal close
    elements.modalClose.addEventListener('click', closeSearchModal);
    elements.searchModal.addEventListener('click', function(e) {
      if (e.target === elements.searchModal) closeSearchModal();
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeSearchModal();
    });
    
    // Back to top button
    elements.backToTop.addEventListener('click', scrollToTop);
    
    // Carousel controls
    elements.carouselPrev.addEventListener('click', () => changeSlide(-1));
    elements.carouselNext.addEventListener('click', () => changeSlide(1));
    
    // Newsletter form
    elements.newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        // Update active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Close mobile menu if open
        elements.navMenu.classList.remove('active');
        elements.navToggle.classList.remove('active');
      });
    });
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Window resize
    window.addEventListener('resize', handleResize);
  }
  
  function toggleMobileMenu() {
    elements.navMenu.classList.toggle('active');
    elements.navToggle.classList.toggle('active');
  }
  
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme toggle icon
    const icon = elements.themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  
  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-color-scheme', theme);
    
    // Update theme toggle icon
    const icon = elements.themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  
  function initializeCarousel() {
    // Create slides
    elements.carouselSlides.innerHTML = '';
    elements.carouselIndicators.innerHTML = '';
    
    appData.heroSlides.forEach((slide, index) => {
      // Create slide
      const slideElement = document.createElement('div');
      slideElement.className = 'carousel-slide';
      slideElement.style.backgroundImage = `url(${slide.image})`;
      slideElement.innerHTML = `
        <div class="slide-content">
          <span class="slide-category">${slide.category}</span>
          <h1 class="slide-headline">${slide.headline}</h1>
          <p class="slide-excerpt">${slide.excerpt}</p>
        </div>
      `;
      elements.carouselSlides.appendChild(slideElement);
      
      // Create indicator
      const indicator = document.createElement('button');
      indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
      indicator.addEventListener('click', () => goToSlide(index));
      elements.carouselIndicators.appendChild(indicator);
    });
    
    // Start auto-play
    startCarousel();
  }
  
  function startCarousel() {
    slideInterval = setInterval(() => {
      changeSlide(1);
    }, 5000);
  }
  
  function stopCarousel() {
    clearInterval(slideInterval);
  }
  
  function changeSlide(direction) {
    const totalSlides = appData.heroSlides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
  }
  
  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }
  
  function updateCarousel() {
    const translateX = -currentSlide * 100;
    elements.carouselSlides.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
    
    // Restart auto-play
    stopCarousel();
    startCarousel();
  }
  
  function initializeBreakingNews() {
    elements.tickerContent.innerHTML = appData.breakingNews.map(news => 
      `<span class="ticker-item">${news}</span>`
    ).join(' • ');
  }
  
  function renderArticles() {
    allArticles = appData.articles;
    displayArticles(allArticles);
  }
  
  function displayArticles(articles) {
    elements.articlesGrid.innerHTML = '';
    
    articles.forEach((article, index) => {
      const articleElement = document.createElement('article');
      articleElement.className = 'article-card';
      articleElement.innerHTML = `
        <div class="article-image" style="background-image: url(${article.image})">
          <span class="article-category">
            <span class="category-icon">${article.icon}</span>
            ${article.category}
          </span>
        </div>
        <div class="article-content">
          <h3 class="article-headline">${article.headline}</h3>
          <p class="article-excerpt">${article.excerpt}</p>
          <div class="article-meta">
            <span class="article-read-time">${article.readTime}</span>
            <button class="read-more-btn">Read More</button>
          </div>
        </div>
      `;
      
      // Add click event to read more button
      const readMoreBtn = articleElement.querySelector('.read-more-btn');
      readMoreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showArticleModal(article);
      });
      
      // Add click event to entire card
      articleElement.addEventListener('click', () => {
        showArticleModal(article);
      });
      
      elements.articlesGrid.appendChild(articleElement);
    });
  }
  
  function showArticleModal(article) {
    // Create a simple modal for article details
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">${article.headline}</h3>
          <button class="modal-close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <img src="${article.image}" alt="${article.headline}" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-base); margin-bottom: var(--space-16);">
          <div style="margin-bottom: var(--space-16);">
            <span style="background: var(--color-primary); color: white; padding: var(--space-4) var(--space-10); border-radius: var(--radius-full); font-size: var(--font-size-sm);">${article.category}</span>
          </div>
          <p style="font-size: var(--font-size-lg); line-height: var(--line-height-normal); margin-bottom: var(--space-20);">${article.excerpt}</p>
          <p style="color: var(--color-text-secondary); line-height: var(--line-height-normal);">
            This is a sample news article demonstrating the Global Daily News website functionality. 
            In a real implementation, this would contain the full article content with proper journalism 
            standards and detailed reporting on ${article.category.toLowerCase()} topics.
          </p>
          <div style="margin-top: var(--space-20); padding-top: var(--space-20); border-top: 1px solid var(--color-border); color: var(--color-text-secondary); font-size: var(--font-size-sm);">
            <strong>Reading time:</strong> ${article.readTime}
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal events
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      setTimeout(() => document.body.removeChild(modal), 300);
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        setTimeout(() => document.body.removeChild(modal), 300);
      }
    });
    
    // Show modal with animation
    setTimeout(() => modal.classList.remove('hidden'), 10);
  }
  
  function renderTrendingNews() {
    elements.trendingNews.innerHTML = '';
    
    appData.trendingNews.forEach(news => {
      const trendingElement = document.createElement('div');
      trendingElement.className = 'trending-item';
      trendingElement.innerHTML = `
        <div class="trending-image" style="background-image: url(${news.image})"></div>
        <div class="trending-content">
          <div class="trending-category">${news.category}</div>
          <h4 class="trending-headline">${news.headline}</h4>
        </div>
      `;
      
      trendingElement.addEventListener('click', () => {
        // Find matching article or create a simple view
        const matchingArticle = allArticles.find(article => 
          article.headline.includes(news.headline.split(' ')[0]) || 
          article.category === news.category
        );
        
        if (matchingArticle) {
          showArticleModal(matchingArticle);
        } else {
          // Create a simple news item
          showArticleModal({
            headline: news.headline,
            category: news.category,
            image: news.image,
            excerpt: `Stay informed with the latest developments in ${news.category.toLowerCase()}. This trending story provides comprehensive coverage and analysis.`,
            readTime: "3 min read"
          });
        }
      });
      
      elements.trendingNews.appendChild(trendingElement);
    });
  }
  
  function performSearch() {
    const query = elements.searchInput.value.trim().toLowerCase();
    
    if (!query) {
      return;
    }
    
    const searchResults = allArticles.filter(article =>
      article.headline.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    );
    
    displaySearchResults(searchResults, query);
    showSearchModal();
  }
  
  function displaySearchResults(results, query) {
    elements.searchResults.innerHTML = '';
    
    if (results.length === 0) {
      elements.searchResults.innerHTML = `
        <div class="no-results">
          <i class="fas fa-search" style="font-size: 48px; color: var(--color-text-secondary); margin-bottom: 16px;"></i>
          <h3>No results found</h3>
          <p>No articles found for "${query}". Try searching for different keywords.</p>
        </div>
      `;
      return;
    }
    
    results.forEach(article => {
      const resultElement = document.createElement('div');
      resultElement.className = 'search-result';
      resultElement.innerHTML = `
        <h4 class="search-result-title">${highlightQuery(article.headline, query)}</h4>
        <p class="search-result-excerpt">${highlightQuery(article.excerpt, query)}</p>
      `;
      
      resultElement.addEventListener('click', () => {
        closeSearchModal();
        showArticleModal(article);
      });
      
      elements.searchResults.appendChild(resultElement);
    });
  }
  
  function highlightQuery(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark style="background: var(--color-primary); color: white; padding: 2px 4px; border-radius: 2px;">$1</mark>');
  }
  
  function showSearchModal() {
    elements.searchModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  
  function closeSearchModal() {
    elements.searchModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    elements.searchInput.value = '';
  }
  
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('newsletter-name').value;
    const email = document.getElementById('newsletter-email').value;
    
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simulate API call
    const submitBtn = elements.newsletterForm.querySelector('button');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert(`Thank you ${name}! You've successfully subscribed to our newsletter.`);
      elements.newsletterForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  }
  
  function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });
    
    // Observe all article cards
    document.querySelectorAll('.article-card').forEach(card => {
      observer.observe(card);
    });
    
    // Re-observe when new articles are added
    const articlesObserver = new MutationObserver(() => {
      document.querySelectorAll('.article-card:not(.fade-in)').forEach(card => {
        observer.observe(card);
      });
    });
    
    articlesObserver.observe(elements.articlesGrid, {
      childList: true
    });
  }
  
  function handleScroll() {
    const scrollTop = window.pageYOffset;
    
    // Back to top button
    if (scrollTop > 500) {
      elements.backToTop.classList.add('visible');
    } else {
      elements.backToTop.classList.remove('visible');
    }
    
    // Header scroll effect
    const header = document.getElementById('header');
    if (scrollTop > 100) {
      header.style.boxShadow = 'var(--shadow-lg)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerHeight = document.getElementById('header').offsetHeight;
          const breakingHeight = document.querySelector('.breaking-news').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - breakingHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  function handleResize() {
    // Update carousel on resize
    updateCarousel();
    
    // Close mobile menu on larger screens
    if (window.innerWidth > 768) {
      elements.navMenu.classList.remove('active');
      elements.navToggle.classList.remove('active');
    }
  }
  
  // Carousel pause on hover
  document.addEventListener('DOMContentLoaded', function() {
    const heroCarousel = document.querySelector('.hero-carousel');
    
    if (heroCarousel) {
      heroCarousel.addEventListener('mouseenter', stopCarousel);
      heroCarousel.addEventListener('mouseleave', startCarousel);
    }
  });
  
  // Handle visibility change (pause carousel when tab is not active)
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      stopCarousel();
    } else {
      startCarousel();
    }
  });
  
  // Category filtering (bonus feature)
  function filterByCategory(category) {
    if (category === 'all') {
      displayArticles(allArticles);
    } else {
      const filtered = allArticles.filter(article => 
        article.category.toLowerCase() === category.toLowerCase()
      );
      displayArticles(filtered);
    }
    
    // Update URL without reloading
    const url = new URL(window.location);
    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url);
  }
  
  // Initialize category filtering from URL
  window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      filterByCategory(category);
    }
  });
  
  // Add loading states and error handling
  function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
        <i class="fas fa-spinner fa-spin" style="font-size: 24px; margin-bottom: 16px;"></i>
        <p>Loading content...</p>
      </div>
    `;
    return loading;
  }
  
  // Performance optimizations
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Optimized search with debouncing
  elements.searchInput.addEventListener('input', debounce(function() {
    if (this.value.trim().length > 2) {
      performSearch();
    }
  }, 300));
  
  // Keyboard navigation for carousel
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
      changeSlide(1);
    }
  });
  
  // Touch/swipe support for mobile carousel
  let touchStartX = 0;
  let touchEndX = 0;
  
  elements.carouselSlides.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  elements.carouselSlides.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        changeSlide(1); // Swipe left - next slide
      } else {
        changeSlide(-1); // Swipe right - previous slide
      }
    }
  }