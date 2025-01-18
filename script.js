function learnMore() {
    alert("Welcome to Healthy Minds! Let's explore a healthier you.");
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.hero .slider img');
const dots = document.querySelectorAll('.hero .dots .dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
// Add this at the end of your existing JavaScript file

function showNotification() {
    const notificationBar = document.getElementById('notificationBar');
    notificationBar.classList.add('show');
}

function goToChatbot() {
    document.querySelector('nav a[href="#chatbot"]').click();
}

// Show the notification bar after 3 seconds
setTimeout(showNotification, 3000);
// Add this at the end of your existing JavaScript file

function showNotification() {
    const notificationBar = document.getElementById('notificationBar');
    notificationBar.classList.add('show');
}

function closeNotification() {
    const notificationBar = document.getElementById('notificationBar');
    notificationBar.classList.remove('show');
}

function goToChatbot() {
    document.querySelector('nav a[href="#chatbot"]').click();
}

// Show the notification bar after 3 seconds
setTimeout(showNotification, 3000);
// Add this at the end of your existing JavaScript file

function showNotification() {
    const notificationBar = document.getElementById('notificationBar');
    notificationBar.classList.add('show');
}

function closeNotification() {
    const notificationBar = document.getElementById('notificationBar');
    notificationBar.classList.remove('show');
}

function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    chatbotContainer.classList.toggle('show');
}

function goToChatbot() {
    toggleChatbot();
    closeNotification();
}

// Show the notification bar after 3 seconds
setTimeout(showNotification, 3000);

function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    if (message) {
        addMessage('You', message);
        input.value = '';
        getBotResponse(message);
    }
}

function addMessage(sender, message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(message) {
    let response = '';
    if (message.toLowerCase().includes('Hi')) {
        response = 'Hello! How can I assist you today?';
    } else if (message.toLowerCase().includes('how are you doing')) {
        response = 'I am doing great! How about you?';
    } else {
        response = 'I am here to support you. Please tell me more.';
    }
    setTimeout(() => addMessage('Bot', response), 1000);
}