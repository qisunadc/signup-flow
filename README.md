# Multi-Step Sign Up Web App

A modern, responsive 6-step sign up form with comprehensive validation and a beautiful user interface.

## Features

- **6-Step Process**: Separated into Name, Email, Password, Business Name, Business Website, and Industry steps
- **Progress Tracking**: Visual progress bar showing current step and completion
- **Modern Design**: Clean, professional UI with green theme (#00BD83) and dark background (#13131F)
- **Real-time Validation**: Instant feedback as users type
- **Password Strength**: Enforces strong password requirements
- **Password Toggle**: Show/hide password functionality
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Form Validation**: Comprehensive client-side validation for each step
- **Success Modal**: Beautiful confirmation screen after successful sign up
- **Left-aligned Design**: All text and buttons are left-aligned for better readability

## Step-by-Step Process

### Step 1: Name
- **First Name**: Required, minimum 2 characters, letters and spaces only
- **Last Name**: Required, minimum 2 characters, letters and spaces only
- **Navigation**: Continue button to proceed to email step

### Step 2: Email
- **Email Address**: Required, valid email format
- **Navigation**: Back button to return to name step, Continue button to proceed to password step

### Step 3: Password
- **Password**: Required, minimum 8 characters with:
  - At least one lowercase letter
  - At least one uppercase letter
  - At least one number
  - At least one special character (!@#$%^&*)
- **Confirm Password**: Must match the password
- **Terms & Conditions**: Must be agreed to
- **Navigation**: Back button to return to email step, Continue button to proceed to business step

### Step 4: Business Name
- **Business Name**: Required, minimum 2 characters
- **Navigation**: Back button to return to password step, Continue button to proceed to website step

### Step 5: Business Website
- **Business Website**: Required, valid URL format (must start with http:// or https://)
- **Navigation**: Back button to return to business step, Continue button to proceed to industry step

### Step 6: Business Industry
- **Business Industry**: Required, select from dropdown options
- **Micro Industry**: Optional, text input for specific industry details
- **Navigation**: Back button to return to website step, Create Account button to submit

## How to Use

1. **Open the app**: Simply open `index.html` in any modern web browser
2. **Step 1 - Name**: Enter your first and last name, click "Continue"
3. **Step 2 - Email**: Enter your email address, click "Continue"
4. **Step 3 - Password**: Create a strong password, confirm it, agree to terms, click "Continue"
5. **Step 4 - Business**: Enter your business name, click "Continue"
6. **Step 5 - Website**: Enter your business website URL, click "Continue"
7. **Step 6 - Industry**: Select your business industry, optionally add micro industry, click "Create Account"
8. **Success**: View the confirmation modal

## Progress Bar

The app features a visual progress bar that shows:
- **Current Step**: Highlighted in green (#00BD83)
- **Completed Steps**: Shown in green (#00BD83)
- **Remaining Steps**: Shown in gray
- **Step Labels**: Clear indication of what each step contains

## Design Features

- **Color Scheme**: 
  - Primary: #00BD83 (green)
  - Background: #13131F (dark)
  - Text: White
- **Typography**: Roboto Regular (400 weight)
- **Layout**: Left-aligned text and buttons
- **Responsive**: Mobile-first design

## File Structure

```
signup-webapp/
├── index.html      # Main HTML file with 6-step layout
├── styles.css      # CSS styling with progress bar and step navigation
├── script.js       # JavaScript functionality for multi-step navigation
└── README.md       # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
The app uses a green theme. You can customize colors in `styles.css`:

```css
/* Primary color */
background: #00BD83;

/* Background color */
background: #13131F;

/* Progress bar colors */
.progress-step.active .step-number { background: #00BD83; }
.progress-step.completed .step-number { background: #00BD83; }
```

### Step Configuration
Modify the progress bar in `index.html` to add or remove steps:

```html
<div class="progress-step" data-step="1">
    <div class="step-number">1</div>
    <span class="step-label">Name</span>
</div>
```

### Validation Rules
Modify validation functions in `script.js` to change requirements:

```javascript
function validatePassword(value) {
    // Customize password requirements here
}
```

### Styling
All styling is in `styles.css` and uses modern CSS features like:
- CSS Grid and Flexbox
- CSS Custom Properties
- Modern animations and transitions
- Mobile-first responsive design
- Progress bar animations
- Left-aligned layout

## Development

This is a pure HTML/CSS/JavaScript application with no build process required. Simply edit the files and refresh your browser to see changes.

## Multi-Step Benefits

- **Reduced Cognitive Load**: Users focus on one step at a time
- **Better Completion Rates**: Shorter forms feel less overwhelming
- **Clear Progress Indication**: Users know exactly where they are in the process
- **Better Error Handling**: Validation errors are contextual to each step
- **Mobile Friendly**: Each step fits well on mobile screens
- **Business Focus**: Dedicated steps for business information collection

## Business Information Collection

The app now includes comprehensive business information collection:
- **Business Name**: For company identification
- **Business Website**: For online presence verification
- **Industry Selection**: For business categorization and targeting
- **Micro Industry**: For detailed business classification

## Future Enhancements

- Backend API integration
- Database storage
- Email verification
- Social login options
- Password strength meter
- Additional business fields (company size, revenue, etc.)
- Dark mode toggle
- Step persistence (save progress)
- Business verification process

## License

This project is open source and available under the MIT License. 