$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // JavaScript to change navbar and social icons on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const socialIcons = document.querySelectorAll('.social-icons a');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        socialIcons.forEach(icon => {
            icon.style.color = '#fff'; // Change color of icons to white on scroll
        });
    } else {
        navbar.classList.remove('scrolled');
        socialIcons.forEach(icon => {
            icon.style.color = '#f00'; // Reset color of icons to red when at the top
        });
    }
});
window.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.portfolio-box');
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxTop < windowHeight - 50) {
            box.classList.add('flip'); // Add flip class
            box.style.opacity = '1';
        } else {
            box.classList.remove('flip'); // Remove flip class
            box.style.opacity = '0';
        }
    });
});


window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const parallaxSection = document.getElementById('parallax-section');
    parallaxSection.style.backgroundPositionY = `${scrollTop * 0.5}px`; // Adjust the factor for parallax speed
});

    window.addEventListener('scroll', function() {
        var boxes = document.querySelectorAll('.box');
        var windowHeight = window.innerHeight;

        boxes.forEach(function(box) {
            var boxTop = box.getBoundingClientRect().top;
            if (boxTop < windowHeight * 0.75) { // Change to image if 75% of box is visible
                box.style.transform = 'scale(1.1)';
            } else {
                box.style.transform = 'scale(1)';
            }
        });
    });


document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const dot = item.querySelector('.timeline-dot');
        const media = item.querySelector('.timeline-media');
        const content = item.querySelector('.timeline-content');
        const video = media.querySelector('video'); // Get the video element

        item.addEventListener('mouseenter', function() {
            const mediaPosition = getComputedStyle(media).order === '2' ? 'right' : 'left';
            if (mediaPosition === 'right') {
                dot.style.transform = 'translate(-50%, -50%) translateX(80px)'; // Move dot towards the right
            } else if (mediaPosition === 'left') {
                dot.style.transform = 'translate(-50%, -50%) translateX(-80px)'; // Move dot towards the left
            }
        });

        item.addEventListener('mouseleave', function() {
            dot.style.transform = 'translate(-50%, -50%)';
        });

        content.addEventListener('mouseenter', function() {
            if (content.classList.contains('white-bg')) {
                content.style.background = 'rgba(255, 0, 0, 0.1)'; // Red translucent for white background
                content.style.color = '#fff'; // White text
            } else if (content.classList.contains('red-bg')) {
                content.style.background = 'rgba(34, 34, 34, 0.1)'; // #222 translucent for red background
            }
        });

        content.addEventListener('mouseleave', function() {
            if (content.classList.contains('white-bg')) {
                content.style.background = '#fff'; // Revert to white background
                content.style.color = '#000'; // Black text
            } else if (content.classList.contains('red-bg')) {
                content.style.background = 'crimson'; // Revert to red background
            }
        });

        // Adjust video playback to fit the medium size on page
        media.addEventListener('click', function() {
            if (video) {
                if (video.paused) {
                    video.play();
                    video.style.width = '100%'; // Set video width to fit container
                    video.style.height = 'auto'; // Maintain aspect ratio
                } else {
                    video.pause();
                }
            }
        });
    });
});



    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Python Expert", "Bot Developer", " Web Developer",  "c++ Developer","R Developer", "Web scrapper", "Model Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Python Expert", "Bot Developer", " Web Developer",  "c++ Developer","R Developer", "Web scrapper", "Model Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});