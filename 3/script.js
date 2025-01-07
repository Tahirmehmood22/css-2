document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.style.maxWidth = '500px';
    form.style.margin = '20px auto';
    form.style.padding = '20px';
    form.style.backgroundColor = '#f0f0f0';
    form.style.borderRadius = '8px';
    form.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';

    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.display = 'block';
        label.style.marginBottom = '5px';
        label.style.fontWeight = 'bold';
        label.style.color = '#333';
    });

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    inputs.forEach(input => {
        input.style.width = '100%';
        input.style.padding = '8px';
        input.style.marginBottom = '15px';
        input.style.border = '1px solid #ddd';
        input.style.borderRadius = '4px';
    });

    const select = document.querySelector('select');
    select.style.width = '100%';
    select.style.padding = '8px';
    select.style.marginBottom = '15px';
    select.style.border = '1px solid #ddd';
    select.style.borderRadius = '4px';

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.style.marginRight = '5px';
    });

    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.padding = '10px 20px';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    submitButton.style.cursor = 'pointer';

    document.querySelector('label[for="name"]').textContent = 'Full Name:';
    document.querySelector('label[for="email"]').textContent = 'Email Address:';
    document.querySelector('label[for="phone"]').textContent = 'Phone Number:';
    document.querySelector('label[for="message"]').textContent = 'Your Message:';
    document.querySelector('label[for="options"]').textContent = 'Select an Option:';

    document.querySelector('label[for="radio1"]').textContent = 'Option A';
    document.querySelector('label[for="radio2"]').textContent = 'Option B';
    document.querySelector('label[for="radio3"]').textContent = 'Option C';
});
