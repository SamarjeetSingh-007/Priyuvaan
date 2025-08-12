// Service Pages JavaScript Fixes
document.addEventListener('DOMContentLoaded', function() {
    
    // Fix dropdown menu functionality
    const dropdownItems = document.querySelectorAll('.navigation li.dropdown');
    
    dropdownItems.forEach(function(dropdown) {
        const dropdownMenu = dropdown.querySelector('ul');
        
        if (dropdownMenu) {
            // Show dropdown on hover
            dropdown.addEventListener('mouseenter', function() {
                dropdownMenu.style.display = 'block';
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateY(0)';
            });
            
            // Hide dropdown when leaving
            dropdown.addEventListener('mouseleave', function() {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
                setTimeout(function() {
                    if (dropdownMenu.style.opacity === '0') {
                        dropdownMenu.style.display = 'none';
                    }
                }, 300);
            });
        }
    });
    
    // Ensure sticky header dropdowns also work
    const stickyDropdowns = document.querySelectorAll('.sticky-header .navigation li.dropdown');
    
    stickyDropdowns.forEach(function(dropdown) {
        const dropdownMenu = dropdown.querySelector('ul');
        
        if (dropdownMenu) {
            dropdown.addEventListener('mouseenter', function() {
                dropdownMenu.style.display = 'block';
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
            });
            
            dropdown.addEventListener('mouseleave', function() {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                setTimeout(function() {
                    if (dropdownMenu.style.opacity === '0') {
                        dropdownMenu.style.display = 'none';
                    }
                }, 300);
            });
        }
    });
    
    // Mobile menu improvements
    const mobileToggler = document.querySelector('.mobile-nav-toggler');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileCloseBtn = document.querySelector('.mobile-menu .close-btn');
    
    if (mobileToggler && mobileMenu) {
        mobileToggler.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.classList.add('mobile-menu-open');
        });
    }
    
    if (mobileCloseBtn && mobileMenu) {
        mobileCloseBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && !mobileMenu.contains(e.target) && !mobileToggler.contains(e.target)) {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
        }
    });
});

// Additional CSS fixes for better mobile menu
const additionalCSS = `
.mobile-menu.active {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateX(0) !important;
}

.mobile-menu {
    transition: all 0.3s ease !important;
    transform: translateX(-100%) !important;
}

.mobile-menu-open {
    overflow: hidden !important;
}

/* Better dropdown animations */
.main-menu .navigation > li > ul {
    transition: all 0.3s ease !important;
    transform: translateY(-10px) !important;
}

.main-menu .navigation > li.dropdown:hover > ul {
    transform: translateY(0) !important;
}
`;

// Inject additional CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);
