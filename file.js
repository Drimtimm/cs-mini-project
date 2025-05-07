document.addEventListener('DOMContentLoaded', function() {
    // Handle menu button clicks
    const menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all menu buttons
            menuButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // You can add functionality to show different content
            // based on the menu clicked using data-menu attribute
            const menuType = this.getAttribute('data-menu');
            console.log('Menu selected:', menuType);
        });
    });
    
    // Handle tab switches
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show the selected tab content
            tabContents.forEach(content => {
                if (content.id === tabName + '-content') {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
    
    // Gift box animation
    const giftButton = document.querySelector('.gift-button');
    giftButton.addEventListener('click', function() {
        this.classList.add('gift-animation');
        
        // Show a reward notification
        showNotification('You got +50 XP and a new theme!');
        
        setTimeout(() => {
            this.classList.remove('gift-animation');
        }, 1000);
    });
    
    // Pagination controls
    const prevButton = document.querySelector('.pagination-button.prev');
    const nextButton = document.querySelector('.pagination-button.next');
    
    prevButton.addEventListener('click', function() {
        console.log('Previous page');
        // Add your pagination logic here
        showNotification('Previous page of quests');
    });
    
    nextButton.addEventListener('click', function() {
        console.log('Next page');
        // Add your pagination logic here
        showNotification('Next page of quests');
    });
    
    // Course card hover effects
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Example function to add a temporary notification
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Style the notification
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#f472b6'; // pink-400
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '4px';
        notification.style.fontWeight = 'bold';
        notification.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        notification.style.zIndex = '1000';
        notification.style.animation = 'fadeInOut 3s forwards';
        
        // Add animation style
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(20px); }
                10% { opacity: 1; transform: translateY(0); }
                90% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
        
        // Add to document and remove after animation
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    // Add interactive pixel border effect
    const pixelBorders = document.querySelectorAll('.pixel-border');
    pixelBorders.forEach(border => {
        border.addEventListener('mouseenter', function() {
            const pixels = [this.querySelector('::before'), this.querySelector('::after')];
            pixels.forEach(pixel => {
                if (pixel) {
                    pixel.style.transition = 'background-color 0.3s ease';
                    pixel.style.backgroundColor = '#ec4899'; // pink-500
                }
            });
        });
        
        border.addEventListener('mouseleave', function() {
            const pixels = [this.querySelector('::before'), this.querySelector('::after')];
            pixels.forEach(pixel => {
                if (pixel) {
                    pixel.style.backgroundColor = '#f9a8d4'; // pink-300
                }
            });
        });
    });
    
    // Add exam item hover effect
    const examItems = document.querySelectorAll('.exam-item:not(.completed)');
    examItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0fdff'; // very light cyan
            this.style.transition = 'background-color 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
    
    // Search bar functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = '0 0 0 2px #06b6d4'; // cyan-500
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = 'none';
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            showNotification('Searching for: ' + this.value);
            this.value = '';
        }
    });
    
    // Show welcome message on page load
    setTimeout(() => {
        showNotification('Welcome back, Player_1!');
    }, 1000);

    /* Add this to your existing styles.css file */

/* Diamond Counter */
.diamond-counter {
    display: flex;
    align-items: center;
    background-color: #2d3748;
    padding: 6px 12px;
    border-radius: 20px;
    margin-right: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.diamond-icon {
    font-size: 16px;
    margin-right: 6px;
}

.diamond-count {
    font-family: 'Share Tech Mono', monospace;
    font-weight: bold;
    color: #fff;
}

/* Gift Button Styles */
.gift-button {
    position: relative;
    transition: all 0.3s;
}

.gift-button.available {
    animation: pulse 1.5s infinite;
}

.gift-button.available::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    width: 12px;
    height: 12px;
    background-color: #ff4757;
    border-radius: 50%;
    border: 2px solid #2d3748;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

/* Gift Popup */
.gift-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.gift-popup {
    background-color: #1a202c;
    width: 320px;
    padding: 20px;
    border: 4px solid #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    transform: scale(0.8);
    opacity: 0;
    transition: all 0.3s;
    text-align: center;
}

.gift-popup.active {
    transform: scale(1);
    opacity: 1;
}

.gift-popup.claimed {
    transform: scale(1.2);
    opacity: 0;
}

.gift-popup-header h2 {
    color: #ffd700;
    font-family: 'Share Tech Mono', monospace;
    margin-top: 0;
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
}

.claim-button, .close-button {
    background-color: #5eead4;
    color: #1a202c;
    border: none;
    padding: 10px 20px;
    font-family: 'Share Tech Mono', monospace;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    border: 2px solid transparent;
}

.claim-button:hover, .close-button:hover {
    background-color: #2dd4bf;
    transform: translateY(-2px);
}

.close-button {
    background-color: #6b7280;
}

.close-button:hover {
    background-color: #4b5563;
}

.gift-popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
}

.gift-message {
    color: #ffffff;
    font-family: 'Share Tech Mono', monospace;
    margin-bottom: 10px;
}

.gift-countdown {
    color: #f8e71c;
    font-family: 'Share Tech Mono', monospace;
    font-size: 14px;
}

.gift-box-large {
    font-size: 64px;
    margin-bottom: 20px;
}

.gift-reward {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.diamond-icon.large {
    font-size: 30px;
    margin-right: 10px;
}

.diamond-amount {
    font-family: 'Share Tech Mono', monospace;
    font-size: 24px;
    font-weight: bold;
    color: #5eead4;
}

.gift-animation {
    animation: bounce 2s infinite;
});
