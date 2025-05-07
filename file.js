document.addEventListener('DOMContentLoaded', function() {
    // Handle menu button clicks
    const menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all menu buttons
            menuButtons.forEach(btn => btn.classList.remove('active'));
            /
            / Add active class to clicked button
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

// Diamond counter and gift system
let diamonds = localStorage.getItem('diamonds') ? parseInt(localStorage.getItem('diamonds')) : 0;
let lastGiftDate = localStorage.getItem('lastGiftDate') || null;

// Create diamond counter UI
function createDiamondCounter() {
    const diamondCounter = document.createElement('div');
    diamondCounter.className = 'diamond-counter pixel-border';
    diamondCounter.innerHTML = `
        <div class="diamond-icon">💎</div>
        <div class="diamond-count">${diamonds}</div>
    `;
    
    // Add to the header
    const userSection = document.querySelector('.user-section');
    userSection.insertBefore(diamondCounter, userSection.firstChild);
}

// Create gift popup
function createGiftPopup() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'gift-overlay';
    
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'gift-popup pixel-border';
    
    // Random diamond amount (5-20)
    const diamondAmount = Math.floor(Math.random() * 16) + 5;
    
    popup.innerHTML = `
        <div class="gift-popup-header">
            <h2>DAILY REWARD!</h2>
        </div>
        <div class="gift-popup-content">
            <div class="gift-box-large">
                <div class="gift-animation">🎁</div>
            </div>
            <div class="gift-reward">
                <div class="diamond-icon large">💎</div>
                <div class="diamond-amount">+${diamondAmount}</div>
            </div>
        </div>
        <button class="claim-button">CLAIM REWARD</button>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Add event listener to claim button
    const claimButton = popup.querySelector('.claim-button');
    claimButton.addEventListener('click', () => {
        // Add diamonds
        diamonds += diamondAmount;
        localStorage.setItem('diamonds', diamonds);
        
        // Update diamond counter
        updateDiamondCount();
        
        // Set last gift date to today
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('lastGiftDate', today);
        
        // Close popup with animation
        popup.classList.add('claimed');
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 600);
    });
    
    // Add animation class after a short delay to trigger animation
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
}

// Update the diamond count display
function updateDiamondCount() {
    const diamondCountElement = document.querySelector('.diamond-count');
    if (diamondCountElement) {
        diamondCountElement.textContent = diamonds;
    }
}

// Set up gift button click handler
function setupGiftButton() {
    const giftButton = document.querySelector('.gift-button');
    if (giftButton) {
        const today = new Date().toISOString().split('T')[0];
        
        // If user hasn't claimed gift today
        if (lastGiftDate !== today) {
            giftButton.classList.add('available');
        }
        
        // Add click event to gift button - always allow clicking, but check if reward can be claimed
        giftButton.addEventListener('click', () => {
            const today = new Date().toISOString().split('T')[0];
            
            if (lastGiftDate !== today) {
                // User can claim gift today
                createGiftPopup();
            } else {
                // User already claimed today
                createAlreadyClaimedPopup();
            }
        });
    }
}

// Create "already claimed" popup
function createAlreadyClaimedPopup() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'gift-overlay';
    
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'gift-popup pixel-border';
    
    popup.innerHTML = `
        <div class="gift-popup-header">
            <h2>ALREADY CLAIMED</h2>
        </div>
        <div class="gift-popup-content">
            <div class="gift-message">You've already claimed your daily reward today!</div>
            <div class="gift-countdown">Come back tomorrow for more diamonds!</div>
        </div>
        <button class="close-button">CLOSE</button>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Add event listener to close button
    const closeButton = popup.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    // Add animation class after a short delay to trigger animation
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
}

// Initialize diamond system
function initDiamondSystem() {
    createDiamondCounter();
    setupGiftButton();
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initDiamondSystem);
});
