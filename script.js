// Form elements
const nameForm = document.getElementById('nameForm');
const emailForm = document.getElementById('emailForm');
const passwordForm = document.getElementById('passwordForm');
const businessForm = document.getElementById('businessForm');
const websiteForm = document.getElementById('websiteForm');
const industryForm = document.getElementById('industryForm');
const submitBtn = document.getElementById('submitBtn');
const successModal = document.getElementById('successModal');

// Input elements
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const termsCheckbox = document.getElementById('terms');
const businessNameInput = document.getElementById('businessName');
const businessWebsiteInput = document.getElementById('businessWebsite');
const businessIndustrySelect = document.getElementById('businessIndustry');
const microIndustryInput = document.getElementById('microIndustry');

// Error message elements
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const termsError = document.getElementById('termsError');
const businessNameError = document.getElementById('businessNameError');
const businessWebsiteError = document.getElementById('businessWebsiteError');
const businessIndustryError = document.getElementById('businessIndustryError');
const microIndustryError = document.getElementById('microIndustryError');

// Password toggle buttons
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

// Navigation buttons
const nextToEmail = document.getElementById('nextToEmail');
const backToName = document.getElementById('backToName');
const nextToPassword = document.getElementById('nextToPassword');
const backToEmail2 = document.getElementById('backToEmail2');
const nextToBusiness = document.getElementById('nextToBusiness');
const backToPassword = document.getElementById('backToPassword');
const nextToWebsite = document.getElementById('nextToWebsite');
const backToBusiness = document.getElementById('backToBusiness');
const nextToIndustry = document.getElementById('nextToIndustry');
const backToWebsite = document.getElementById('backToWebsite');

// Progress elements
const progressSteps = document.querySelectorAll('.progress-step');
const progressLines = document.querySelectorAll('.progress-line');
const stepContents = document.querySelectorAll('.step-content');

// Current step tracking
let currentStep = 1;

// Validation functions
function validateFirstName(value) {
    if (!value.trim()) {
        return 'First name is required';
    }
    if (value.length < 2) {
        return 'First name must be at least 2 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
        return 'First name can only contain letters and spaces';
    }
    return '';
}

function validateLastName(value) {
    if (!value.trim()) {
        return 'Last name is required';
    }
    if (value.length < 2) {
        return 'Last name must be at least 2 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
        return 'Last name can only contain letters and spaces';
    }
    return '';
}

function validateEmail(value) {
    if (!value.trim()) {
        return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
    }
    return '';
}

function validatePassword(value) {
    if (!value) {
        return 'Password is required';
    }
    if (value.length < 8) {
        return 'Password must be at least 8 characters long';
    }
    if (!/(?=.*[a-z])/.test(value)) {
        return 'Password must contain at least one lowercase letter';
    }
    if (!/(?=.*[A-Z])/.test(value)) {
        return 'Password must contain at least one uppercase letter';
    }
    if (!/(?=.*\d)/.test(value)) {
        return 'Password must contain at least one number';
    }
    if (!/(?=.*[!@#$%^&*])/.test(value)) {
        return 'Password must contain at least one special character (!@#$%^&*)';
    }
    return '';
}

function validateConfirmPassword(password, confirmPassword) {
    if (!confirmPassword) {
        return 'Please confirm your password';
    }
    if (password !== confirmPassword) {
        return 'Passwords do not match';
    }
    return '';
}

function validateTerms(checked) {
    if (!checked) {
        return 'You must agree to the terms and conditions';
    }
    return '';
}

function validateBusinessName(value) {
    if (!value.trim()) {
        return 'Business name is required';
    }
    if (value.length < 2) {
        return 'Business name must be at least 2 characters';
    }
    return '';
}

function validateBusinessWebsite(value) {
    if (!value.trim()) {
        return 'Business website is required';
    }
    const urlRegex = /^https?:\/\/.+/;
    if (!urlRegex.test(value)) {
        return 'Please enter a valid website URL starting with http:// or https://';
    }
    return '';
}

function validateBusinessIndustry(value) {
    if (!value) {
        return 'Please select a business industry';
    }
    return '';
}

// Display error message
function showError(element, message) {
    element.textContent = message;
    element.style.display = message ? 'block' : 'none';
}

// Clear error message
function clearError(element) {
    element.textContent = '';
    element.style.display = 'none';
}

// Add/remove error styling
function setInputError(input, hasError) {
    if (hasError) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
}

// Step navigation functions
function goToStep(step) {
    // Validate that the step is accessible (only allow going to completed steps or current step)
    if (step > currentStep && !canGoToStep(step)) {
        return;
    }
    
    // Hide all step contents
    stepContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Show current step content
    document.getElementById(`step${step}`).classList.add('active');
    
    // Update progress bar
    updateProgressBar(step);
    
    currentStep = step;
}

// Check if user can go to a specific step
function canGoToStep(step) {
    // Can go to current step or any completed step
    if (step <= currentStep) {
        return true;
    }
    
    // For future steps, check if previous steps are completed
    switch (step) {
        case 2:
            return firstNameInput.value.trim() && lastNameInput.value.trim();
        case 3:
            return firstNameInput.value.trim() && lastNameInput.value.trim() && emailInput.value.trim();
        case 4:
            return firstNameInput.value.trim() && lastNameInput.value.trim() && 
                   emailInput.value.trim() && passwordInput.value && confirmPasswordInput.value && termsCheckbox.checked;
        case 5:
            return firstNameInput.value.trim() && lastNameInput.value.trim() && 
                   emailInput.value.trim() && passwordInput.value && confirmPasswordInput.value && 
                   termsCheckbox.checked && businessNameInput.value.trim();
        case 6:
            return firstNameInput.value.trim() && lastNameInput.value.trim() && 
                   emailInput.value.trim() && passwordInput.value && confirmPasswordInput.value && 
                   termsCheckbox.checked && businessNameInput.value.trim() && businessWebsiteInput.value.trim();
        default:
            return false;
    }
}

function updateProgressBar(step) {
    progressSteps.forEach((progressStep, index) => {
        const stepNumber = index + 1;
        progressStep.classList.remove('active', 'completed');
        
        if (stepNumber < step) {
            progressStep.classList.add('completed');
        } else if (stepNumber === step) {
            progressStep.classList.add('active');
        }
    });
    
    progressLines.forEach((line, index) => {
        line.classList.remove('completed');
        if (index + 1 < step) {
            line.classList.add('completed');
        }
    });
}

// Real-time validation for step 1
firstNameInput.addEventListener('input', () => {
    const error = validateFirstName(firstNameInput.value);
    showError(firstNameError, error);
    setInputError(firstNameInput, !!error);
});

lastNameInput.addEventListener('input', () => {
    const error = validateLastName(lastNameInput.value);
    showError(lastNameError, error);
    setInputError(lastNameInput, !!error);
});

// Real-time validation for step 2
emailInput.addEventListener('input', () => {
    const error = validateEmail(emailInput.value);
    showError(emailError, error);
    setInputError(emailInput, !!error);
});

// Real-time validation for step 3
passwordInput.addEventListener('input', () => {
    const error = validatePassword(passwordInput.value);
    showError(passwordError, error);
    setInputError(passwordInput, !!error);
    
    // Also validate confirm password when password changes
    if (confirmPasswordInput.value) {
        const confirmError = validateConfirmPassword(passwordInput.value, confirmPasswordInput.value);
        showError(confirmPasswordError, confirmError);
        setInputError(confirmPasswordInput, !!confirmError);
    }
});

confirmPasswordInput.addEventListener('input', () => {
    const error = validateConfirmPassword(passwordInput.value, confirmPasswordInput.value);
    showError(confirmPasswordError, error);
    setInputError(confirmPasswordInput, !!error);
});

termsCheckbox.addEventListener('change', () => {
    const error = validateTerms(termsCheckbox.checked);
    showError(termsError, error);
});

// Real-time validation for step 4
businessNameInput.addEventListener('input', () => {
    const error = validateBusinessName(businessNameInput.value);
    showError(businessNameError, error);
    setInputError(businessNameInput, !!error);
});

// Real-time validation for step 5
businessWebsiteInput.addEventListener('input', () => {
    const error = validateBusinessWebsite(businessWebsiteInput.value);
    showError(businessWebsiteError, error);
    setInputError(businessWebsiteInput, !!error);
});

// Real-time validation for step 6
businessIndustrySelect.addEventListener('change', () => {
    const error = validateBusinessIndustry(businessIndustrySelect.value);
    showError(businessIndustryError, error);
    setInputError(businessIndustrySelect, !!error);
});

// Password toggle functionality
togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    
    // Update icon
    const svg = togglePassword.querySelector('svg');
    if (type === 'text') {
        svg.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        `;
    } else {
        svg.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        `;
    }
});

toggleConfirmPassword.addEventListener('click', () => {
    const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
    confirmPasswordInput.type = type;
    
    // Update icon
    const svg = toggleConfirmPassword.querySelector('svg');
    if (type === 'text') {
        svg.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        `;
    } else {
        svg.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        `;
    }
});

// Step 1: Name form submission
nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const firstNameErrorMsg = validateFirstName(firstNameInput.value);
    const lastNameErrorMsg = validateLastName(lastNameInput.value);
    
    showError(firstNameError, firstNameErrorMsg);
    showError(lastNameError, lastNameErrorMsg);
    setInputError(firstNameInput, !!firstNameErrorMsg);
    setInputError(lastNameInput, !!lastNameErrorMsg);
    
    if (!firstNameErrorMsg && !lastNameErrorMsg) {
        goToStep(2);
    }
});

// Step 2: Email form submission
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailErrorMsg = validateEmail(emailInput.value);
    showError(emailError, emailErrorMsg);
    setInputError(emailInput, !!emailErrorMsg);
    
    if (!emailErrorMsg) {
        goToStep(3);
    }
});

// Step 3: Password form submission
passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const passwordErrorMsg = validatePassword(passwordInput.value);
    const confirmPasswordErrorMsg = validateConfirmPassword(passwordInput.value, confirmPasswordInput.value);
    const termsErrorMsg = validateTerms(termsCheckbox.checked);
    
    showError(passwordError, passwordErrorMsg);
    showError(confirmPasswordError, confirmPasswordErrorMsg);
    showError(termsError, termsErrorMsg);
    setInputError(passwordInput, !!passwordErrorMsg);
    setInputError(confirmPasswordInput, !!confirmPasswordErrorMsg);
    
    if (passwordErrorMsg || confirmPasswordErrorMsg || termsErrorMsg) {
        return;
    }
    
    goToStep(4);
});

// Step 4: Business name form submission
businessForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const businessNameErrorMsg = validateBusinessName(businessNameInput.value);
    showError(businessNameError, businessNameErrorMsg);
    setInputError(businessNameInput, !!businessNameErrorMsg);
    
    if (!businessNameErrorMsg) {
        goToStep(5);
    }
});

// Step 5: Business website form submission
websiteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const businessWebsiteErrorMsg = validateBusinessWebsite(businessWebsiteInput.value);
    showError(businessWebsiteError, businessWebsiteErrorMsg);
    setInputError(businessWebsiteInput, !!businessWebsiteErrorMsg);
    
    if (!businessWebsiteErrorMsg) {
        goToStep(6);
    }
});

// Step 6: Industry form submission
industryForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const businessIndustryErrorMsg = validateBusinessIndustry(businessIndustrySelect.value);
    showError(businessIndustryError, businessIndustryErrorMsg);
    setInputError(businessIndustrySelect, !!businessIndustryErrorMsg);
    
    if (businessIndustryErrorMsg) {
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success modal
        successModal.classList.add('show');
        
        // Reset all forms
        nameForm.reset();
        emailForm.reset();
        passwordForm.reset();
        businessForm.reset();
        websiteForm.reset();
        industryForm.reset();
        clearAllErrors();
        
        // Reset to first step
        goToStep(1);
        
    } catch (error) {
        console.error('Sign up failed:', error);
        alert('Sign up failed. Please try again.');
    } finally {
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

// Navigation buttons
backToName.addEventListener('click', () => {
    goToStep(1);
});

backToEmail2.addEventListener('click', () => {
    goToStep(2);
});

document.getElementById('backToPassword').addEventListener('click', () => {
    goToStep(3);
});

document.getElementById('backToBusiness').addEventListener('click', () => {
    goToStep(4);
});

document.getElementById('backToWebsite').addEventListener('click', () => {
    goToStep(5);
});

// Clear all errors
function clearAllErrors() {
    clearError(firstNameError);
    clearError(lastNameError);
    clearError(emailError);
    clearError(passwordError);
    clearError(confirmPasswordError);
    clearError(termsError);
    clearError(businessNameError);
    clearError(businessWebsiteError);
    clearError(businessIndustryError);
    clearError(microIndustryError);
    
    setInputError(firstNameInput, false);
    setInputError(lastNameInput, false);
    setInputError(emailInput, false);
    setInputError(passwordInput, false);
    setInputError(confirmPasswordInput, false);
    setInputError(businessNameInput, false);
    setInputError(businessWebsiteInput, false);
    setInputError(businessIndustrySelect, false);
}

// Close modal
function closeModal() {
    successModal.classList.remove('show');
}

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successModal.classList.contains('show')) {
        closeModal();
    }
});

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
    // Focus on first input
    firstNameInput.focus();
    
    // Clear any existing errors
    clearAllErrors();
    
    // Initialize progress bar
    updateProgressBar(1);
});

// Make goToStep function globally accessible
window.goToStep = goToStep; 