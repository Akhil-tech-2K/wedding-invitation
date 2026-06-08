// Initialize QR Code
document.addEventListener('DOMContentLoaded', function() {
    // QR code removed — not required for this invitation

    // Initialize Google Map
    // Load Google Maps dynamically using key from config if available
    if (typeof weddingConfig !== 'undefined' && weddingConfig.googleMapsApiKey && weddingConfig.googleMapsApiKey !== 'YOUR_API_KEY_HERE') {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${weddingConfig.googleMapsApiKey}`;
        script.defer = true;
        script.async = true;
        script.onload = () => initializeMap();
        document.head.appendChild(script);
    } else {
        // Attempt to initialize map anyway (may fail if API not loaded)
        initializeMap();
    }

    // Create location QR codes for map links
    createLocationQRCodes();

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

function createLocationQRCodes() {
    if (typeof QRCode === 'undefined') return;

    const weddingLink = weddingConfig && weddingConfig.venue ? weddingConfig.venue.mapLink : '';
    const receptionLink = weddingConfig && weddingConfig.receptionVenue ? weddingConfig.receptionVenue.mapLink : '';

    const weddingQr = document.getElementById('weddingLocationQr');
    const receptionQr = document.getElementById('receptionLocationQr');

    if (weddingQr && weddingLink) {
        new QRCode(weddingQr, {
            text: weddingLink,
            width: 200,
            height: 200,
            colorDark: "#D4145A",
            colorLight: "#FFFFFF",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    if (receptionQr && receptionLink) {
        new QRCode(receptionQr, {
            text: receptionLink,
            width: 200,
            height: 200,
            colorDark: "#D4145A",
            colorLight: "#FFFFFF",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

// Initialize Google Map
function initializeMap() {
    // Coordinates for Hyderabad (you can change this to your actual venue)
    // Use coordinates from config if provided
    const venueLocation = (typeof weddingConfig !== 'undefined' && weddingConfig.venue && weddingConfig.venue.latitude && weddingConfig.venue.longitude) ?
        { lat: weddingConfig.venue.latitude, lng: weddingConfig.venue.longitude } :
        { lat: 17.3850, lng: 78.4867 };

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
                    <h3 style="margin: 0 0 10px 0; color: #D4145A;">${weddingConfig && weddingConfig.venue ? weddingConfig.venue.name : 'Wedding Venue'}</h3>
                    <p style="margin: 0;"><strong>${weddingConfig && weddingConfig.venue ? weddingConfig.venue.address : ''}</strong></p>
                    <p style="margin: 0;">${weddingConfig && weddingConfig.venue ? (weddingConfig.venue.city || '') : ''}</p>
                    <p style="margin: 10px 0 0 0; font-size: 12px;">${(weddingConfig && weddingConfig.ceremonies && weddingConfig.ceremonies[0]) ? weddingConfig.ceremonies[0].date + ' - ' + weddingConfig.ceremonies[0].time : ''}</p>
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

// ===== MUSIC PLAYER =====
document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('musicToggle');
    const audio = document.getElementById('backgroundMusic');
    let isPlaying = false;

    if (musicBtn && audio) {
        // Use config music URL if provided
        if (typeof weddingConfig !== 'undefined' && weddingConfig.musicUrl) {
            const source = audio.querySelector('source');
            if (source) source.src = weddingConfig.musicUrl;
            audio.load();
        }
        musicBtn.addEventListener('click', function() {
            if (isPlaying) {
                audio.pause();
                musicBtn.classList.remove('playing');
                isPlaying = false;
            } else {
                audio.play().catch(function(error) {
                    console.log("Audio play failed:", error);
                });
                musicBtn.classList.add('playing');
                isPlaying = true;
            }
        });

        // Start music automatically with user interaction
        document.addEventListener('click', function autoStart() {
            if (!isPlaying) {
                audio.play().catch(function(error) {
                    console.log("Auto-play prevented by browser");
                });
                musicBtn.classList.add('playing');
                isPlaying = true;
                document.removeEventListener('click', autoStart);
            }
        }, { once: true });
    }
});

// ===== FABs: Share / Directions / Add to Calendar =====
document.addEventListener('DOMContentLoaded', function() {
    const shareFab = document.getElementById('shareFab');
    const directionsFab = document.getElementById('directionsFab');
    const calendarFab = document.getElementById('calendarFab');

    if (shareFab) {
        shareFab.addEventListener('click', function() {
            // Prefer Web Share API
            const title = `${weddingConfig.groom.name} & ${weddingConfig.bride.name}`;
            const text = `Join us: ${title} — ${weddingConfig.ceremonies[0].date}`;
            const url = weddingConfig.sharing && weddingConfig.sharing.websiteUrl ? weddingConfig.sharing.websiteUrl : window.location.href;
            if (navigator.share) {
                navigator.share({ title, text, url }).catch(()=>{});
            } else {
                // fallback: copy link
                navigator.clipboard && navigator.clipboard.writeText(url).then(()=> alert('Link copied to clipboard'));
            }
        });
    }

    if (directionsFab) {
        directionsFab.addEventListener('click', function() {
            const mapLink = (weddingConfig && weddingConfig.venue && weddingConfig.venue.mapLink) ? weddingConfig.venue.mapLink : (weddingConfig.receptionVenue && weddingConfig.receptionVenue.mapLink) ? weddingConfig.receptionVenue.mapLink : '';
            if (mapLink) window.open(mapLink, '_blank');
        });
    }

    if (calendarFab) {
        calendarFab.addEventListener('click', function() {
            if (weddingConfig && weddingConfig.ceremonies && weddingConfig.ceremonies[0]) {
                const c = weddingConfig.ceremonies[0];
                const dt = new Date(weddingConfig.weddingDate || new Date());
                const link = addToCalendar(c.name, dt, weddingConfig.venue ? weddingConfig.venue.name : '');
                window.open(link, '_blank');
            }
        });
    }
});

// ===== Ceremony modal behavior =====
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('ceremonyModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const modalMap = document.getElementById('modalMap');
    const modalCalendar = document.getElementById('modalCalendar');

    function openModal(ceremony) {
        modalTitle.textContent = ceremony.name;
        modalBody.innerHTML = `<p><strong>Date:</strong> ${ceremony.date}</p><p><strong>Time:</strong> ${ceremony.time}</p><p>${ceremony.details || ''}</p><p><strong>Venue:</strong> ${ceremony.venue}</p>`;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');

        modalMap.onclick = () => { if (ceremony.mapLink) window.open(ceremony.mapLink, '_blank'); };
        modalCalendar.onclick = () => { const dt = new Date(weddingConfig.weddingDate || new Date()); window.open(addToCalendar(ceremony.name, dt, ceremony.venue), '_blank'); };
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }

    modalClose && modalClose.addEventListener('click', closeModal);

    // Attach modal openers to ceremony cards
    document.querySelectorAll('.ceremony-card').forEach((card, idx) => {
        card.addEventListener('click', () => {
            const ceremony = (weddingConfig && weddingConfig.ceremonies && weddingConfig.ceremonies[idx]) ? weddingConfig.ceremonies[idx] : null;
            if (ceremony) openModal(ceremony);
        });
        card.style.cursor = 'pointer';
    });
});

// ===== Back to top =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (!backToTop) return;
    if (window.pageYOffset > 400) backToTop.classList.add('show'); else backToTop.classList.remove('show');
});
backToTop && backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// ===== CONFETTI ANIMATION =====
function createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;

    const colors = ['#D4145A', '#FDB750', '#F37335', '#FFD700', '#FF69B4', '#FF1493'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 0.5;
        const duration = Math.random() * 2 + 2.5;

        confetti.style.left = left + '%';
        confetti.style.top = '-20px';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `confettiFall ${duration}s linear ${delay}s forwards`;

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// Trigger confetti on page load
window.addEventListener('load', function() {
    setTimeout(createConfetti, 500);
});

// Trigger confetti on scroll to couple section
const coupleSection = document.querySelector('.couple-section');
if (coupleSection) {
    let confettiTriggered = false;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !confettiTriggered) {
                createConfetti();
                confettiTriggered = true;
            }
        });
    }, { threshold: 0.5 });

    observer.observe(coupleSection);
}

// ===== ENHANCED SCROLL ANIMATIONS =====
// Add scale animation on hover for ceremony cards
document.addEventListener('DOMContentLoaded', function() {
    const ceremonyCards = document.querySelectorAll('.ceremony-card');
    
    ceremonyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
});

// Sparkle animation on header
const headerTitle = document.querySelector('.main-title');
if (headerTitle) {
    headerTitle.addEventListener('click', function() {
        createConfetti();
    });
    
    // Add title animation
    headerTitle.style.cursor = 'pointer';
    headerTitle.title = 'Click for celebration!';
}
