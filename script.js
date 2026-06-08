// Initialize QR Code
document.addEventListener('DOMContentLoaded', function() {
    // Generate QR Code for RSVP
    const qrcodeDiv = document.getElementById('qrcode');
    if (qrcodeDiv) {
        new QRCode(qrcodeDiv, {
            text: 'https://forms.gle/your-rsvp-form-link', // Replace with your actual form link
            width: 200,
            height: 200,
            colorDark: "#D4145A",
            colorLight: "#FFFFFF",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    // Initialize Google Map
    initializeMap();

    // Smooth scroll for any anchor links
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

    // Scroll animations
    observeElements();
});

// Initialize Google Map
function initializeMap() {
    // Coordinates for Hyderabad (you can change this to your actual venue)
    const venueLocation = {
        lat: 17.3850,
        lng: 78.4867
    };

    const mapElement = document.getElementById('map');
    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            zoom: 16,
            center: venueLocation,
            styles: [
                {
                    featureType: "all",
                    stylers: [{ saturation: 0 }, { lightness: 0 }]
                },
                {
                    featureType: "road",
                    stylers: [{ saturation: -100 }]
                },
                {
                    featureType: "water",
                    stylers: [{ saturation: 100 }, { color: "#b3d9ff" }]
                }
            ]
        });

        // Add a marker for the venue
        const marker = new google.maps.Marker({
            position: venueLocation,
            map: map,
            title: "Wedding Venue",
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px; font-family: Arial;">
                    <h3 style="margin: 0 0 10px 0; color: #D4145A;">Wedding Venue</h3>
                    <p style="margin: 0;"><strong>Temple Road</strong></p>
                    <p style="margin: 0;">Hyderabad, Telangana 500082</p>
                    <p style="margin: 10px 0 0 0; font-size: 12px;">July 23, 2024 - 5:00 PM</p>
                </div>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });

        // Open info window by default
        infoWindow.open(map, marker);
    }
}

// Intersection Observer for scroll animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe ceremony cards and sections
    document.querySelectorAll('.ceremony-card, .tradition-card, .family-info').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Add scroll event for parallax effect on flowers
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const flowers = document.querySelectorAll('.flower');
    
    flowers.forEach((flower, index) => {
        const speed = 0.5 + (index * 0.1);
        flower.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Countdown timer for wedding day (optional)
function startCountdown() {
    const weddingDate = new Date('2024-07-23T17:00:00').getTime();
    
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // You can display this countdown anywhere on the page
        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s until the wedding!`);
        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            console.log("The wedding has begun!");
        }
    }, 1000);
}

// Optional: Start countdown when page loads
// startCountdown();

// Add to calendar function
function addToCalendar(eventTitle, eventDate, eventLocation) {
    const year = eventDate.getFullYear();
    const month = String(eventDate.getMonth() + 1).padStart(2, '0');
    const day = String(eventDate.getDate()).padStart(2, '0');
    const dateString = `${year}${month}${day}`;
    
    const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${dateString}/${dateString}&location=${encodeURIComponent(eventLocation)}`;
    
    return googleCalendarLink;
}

// Smooth animations for page load
window.addEventListener('load', () => {
    document.querySelectorAll('.header, .couple-section, .section-title').forEach((element, index) => {
        element.style.animation = `fadeInDown 0.8s ease ${index * 0.2}s forwards`;
    });
});

// Add CSS animation for load
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Share functionality
function shareToWhatsApp() {
    const message = "Join us for our wedding celebration! Akhil & Priya. Check out the invitation: [your-site-url]";
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function shareToFacebook() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

// Make functions globally available if needed
window.shareToWhatsApp = shareToWhatsApp;
window.shareToFacebook = shareToFacebook;
window.addToCalendar = addToCalendar;
