# South Indian Telugu Wedding Invitation Website

A beautiful, interactive wedding invitation website featuring South Indian Telugu marriage traditions, Google Maps integration, QR codes, and animated flower decorations.

## Features

✨ **Key Features:**
- 🌸 Animated flower decorations with parallax scrolling
- 💑 Bride & Groom profile sections with Telugu text
- 📅 Multiple ceremony sections (Mehendi, Sangeet, Haldi, Wedding, Reception)
- 🗺️ Google Maps integration for venue location
- 📱 QR Code for RSVP with customizable link
- 🎨 South Indian Telugu cultural elements and traditions
- 👨‍👩‍👧‍👦 Family details section
- 🎭 Traditional attire and ritual descriptions
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and scroll effects
- 🎵 Professional South Indian wedding styling

## Project Structure

```
wedding-invitation/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Setup Instructions

### 1. Basic Setup
No server required! Simply open `index.html` in a modern web browser.

### 2. Customize Your Information

#### Edit `index.html`:

1. **Bride & Groom Names** (Line 87-95):
   ```html
   <h2>Priya</h2>  <!-- Change to bride's name -->
   <h2>Akhil</h2>  <!-- Change to groom's name -->
   ```

2. **Ceremony Details** (Lines 105-150):
   - Change dates, times, and venues for each ceremony
   - Update ceremony locations as needed

3. **Family Details** (Lines 288-310):
   - Add parents' and siblings' names
   - Customize family information

4. **Contact Information** (Lines 278-282):
   - Update phone number
   - Change email address
   - Update WhatsApp number

### 3. Configure Google Maps

1. Get your Google Maps API key:
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable Maps JavaScript API
   - Create an API key

2. Replace the API key in `index.html` (Line 11):
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE"></script>
   ```

3. Update venue coordinates in `script.js` (Line 36):
   ```javascript
   const venueLocation = {
       lat: 17.3850,  // Your venue latitude
       lng: 78.4867   // Your venue longitude
   };
   ```

### 4. Configure QR Code

1. Create a Google Form for RSVP:
   - Go to [Google Forms](https://forms.google.com/)
   - Create a new form with guest details
   - Get the shareable link

2. Update QR code link in `script.js` (Line 10):
   ```javascript
   new QRCode(qrcodeDiv, {
       text: 'YOUR_RSVP_FORM_LINK_HERE',
       // ... rest of config
   });
   ```

### 5. Color Customization

Edit the CSS variables in `styles.css` (Lines 14-19):
```css
:root {
    --primary-color: #D4145A;      /* Main red/pink */
    --secondary-color: #FDB750;    /* Gold/orange */
    --accent-color: #F37335;       /* Accent orange */
    --gold-color: #FFD700;         /* Gold ornaments */
    --text-dark: #333;             /* Dark text */
    --text-light: #666;            /* Light text */
    --bg-light: #FFF8F3;           /* Background */
}
```

## Customization Guide

### Add More Ceremonies

In `index.html`, duplicate a ceremony card and modify:
```html
<div class="ceremony-card mehendi">
    <div class="ceremony-icon">💅</div>
    <div class="ceremony-details">
        <h4>Your Ceremony Name</h4>
        <p class="telugu-text">Telugu text here</p>
        <p><strong>Date:</strong> Your date</p>
        <p><strong>Time:</strong> Your time</p>
        <p><strong>Venue:</strong> Your venue</p>
    </div>
</div>
```

### Modify Traditions Section

Edit the traditions cards in `index.html` (Lines 240-260) to include:
- Different wedding traditions
- Regional customs
- Family rituals

### Change Flower Emojis

In `index.html` (Lines 21-25), replace flower emojis:
- 🌸 (Cherry Blossom)
- 🌼 (Sunflower)
- 🌺 (Hibiscus) - Traditional South Indian flower
- 🌻 (Sunflower)
- 🌷 (Tulip)

### Add More Details

- Add more sections by duplicating the structure
- Include pre-wedding events, photo galleries, gift registry
- Add video links to engagement or pre-wedding shoots

## Deployment Options

### Option 1: GitHub Pages
```bash
# Initialize git repo if not done
git init

# Add files
git add .
git commit -m "Initial wedding invitation"

# Create GitHub repository and push
git push origin main
```

Enable GitHub Pages in repository settings (Settings > Pages > Main branch).

### Option 2: Netlify
1. Sign up at [Netlify](https://netlify.com)
2. Drag and drop your folder
3. Done! Your site goes live

### Option 3: Vercel
```bash
npm install -g vercel
vercel
```

### Option 4: Traditional Hosting
Upload all files to any web hosting service:
- Bluehost
- Hostinger
- Godaddy
- Any FTP-based hosting

## Customization Examples

### Example 1: Add Countdown Timer

Uncomment in `script.js`:
```javascript
startCountdown();
```

Create a display element in HTML to show the countdown.

### Example 2: Add Photo Gallery

Add a new section in `index.html`:
```html
<section class="gallery-section">
    <h3 class="section-title">Pre-Wedding Gallery</h3>
    <!-- Add photo grid here -->
</section>
```

### Example 3: Add Gift Registry

```html
<section class="gift-section">
    <h3 class="section-title">Gift Registry</h3>
    <div class="gift-links">
        <a href="#">Amazon Registry</a>
        <a href="#">Wedding Registry</a>
    </div>
</section>
```

## Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Features Explained

### Animated Flowers
- Floating flowers in background with parallax effect
- Customizable through CSS animations
- Responsive on all screen sizes

### Telugu Integration
- Telugu text translations for ceremonies
- Sanskrit blessings in header and footer
- Cultural authenticity

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly buttons

### Accessibility
- Semantic HTML
- Clear color contrasts
- Screen reader friendly
- Keyboard navigation

## Tips & Best Practices

1. **Google Maps API**
   - Keep your API key secure
   - Set API restrictions for your domain
   - Test location accuracy

2. **QR Code**
   - Test RSVP form link before sharing
   - Use shorter URLs if possible
   - Include backup contact method

3. **Mobile Testing**
   - Test on actual devices
   - Check Google Maps on mobile
   - Verify flower animations performance

4. **Performance**
   - Compress images if adding gallery
   - Lazy load heavy content
   - Monitor API usage

5. **Sharing**
   - Share link on WhatsApp with preview
   - Post on social media
   - Email invitation link to guests
   - Use share buttons functionality

## Troubleshooting

### Google Maps Not Showing
- Verify API key is correct
- Check API is enabled in Console
- Ensure domain is in API restrictions
- Check browser console for errors

### QR Code Not Scanning
- Ensure URL is valid and accessible
- Test with multiple QR scanners
- Check contrast in colors
- Ensure adequate size (200x200px minimum)

### Animations Not Working
- Check browser compatibility
- Clear browser cache
- Enable JavaScript
- Update browser to latest version

## Support & Customization

For further customizations:
1. Modify CSS for different color schemes
2. Add more sections by duplicating structure
3. Integrate with email services for invitations
4. Add password protection for guests-only content

## Credits

- Icons & Emojis: Unicode emoji library
- Google Maps API
- QR Code Library: davidshimjs/qrcodejs
- Fonts: Google Fonts & System fonts

## License

This template is provided as-is for personal use. Feel free to customize and share!

---

**Happy Wedding! 🎉**

For questions or support, contact the developer or customize further as needed.

---

### Quick Checklist Before Sharing

- [ ] Update bride and groom names
- [ ] Update all ceremony dates and times
- [ ] Update venue addresses and Google Maps location
- [ ] Configure Google Maps API key
- [ ] Create and link RSVP Google Form
- [ ] Generate QR code with form link
- [ ] Update family details
- [ ] Update contact information
- [ ] Test on mobile and desktop
- [ ] Test Google Maps functionality
- [ ] Test QR code scanning
- [ ] Share with family and guests
- [ ] Track RSVPs through Google Form

Enjoy your special day! 💕🎊