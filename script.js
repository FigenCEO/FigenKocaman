// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }
        
        lastScroll = currentScroll;
    });
}

// Mobile Section Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const sectionToggles = document.querySelectorAll('.section-toggle');
    
    sectionToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const sectionHeader = this.closest('.section-header');
            const sectionContent = sectionHeader?.nextElementSibling;
            
            if (sectionContent && sectionContent.classList.contains('section-content')) {
                const isExpanded = sectionContent.classList.contains('expanded');
                
                if (isExpanded) {
                    // Collapse
                    sectionContent.classList.remove('expanded');
                    this.classList.remove('active');
                } else {
                    // Expand
                    sectionContent.classList.add('expanded');
                    this.classList.add('active');
                }
            }
        });
    });

    // Initialize sections - start expanded on mobile
    if (window.innerWidth <= 768) {
        const sectionContents = document.querySelectorAll('.section-content');
        sectionContents.forEach(content => {
            content.classList.add('expanded');
            const toggle = content.previousElementSibling?.querySelector('.section-toggle');
            if (toggle) {
                toggle.classList.add('active');
            }
        });

        // Allow clicking the header to toggle on mobile
        const sectionHeaders = document.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            header.addEventListener('click', function(e) {
                // Don't trigger if clicking the toggle button itself
                if (!e.target.closest('.section-toggle')) {
                    const toggle = this.querySelector('.section-toggle');
                    if (toggle) {
                        toggle.click();
                    }
                }
            });
        });
    }
});
