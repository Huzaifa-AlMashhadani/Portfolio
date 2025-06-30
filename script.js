
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Typing animation
        const typingText = document.querySelector('.typing-text');
        const words = ['Senior Full-Stack Developer', 'Tech Lead', 'UI/UX Specialist', 'Cloud Architect'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isEnd = false;

        function type() {
            const currentWord = words[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            
            typingText.textContent = currentChar;
            typingText.style.color = `hsl(${wordIndex * 90}, 100%, 70%)`;
            
            if (!isDeleting && charIndex < currentWord.length) {
                charIndex++;
                setTimeout(type, 100 + Math.random() * 50);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(type, 50);
            } else {
                isDeleting = !isDeleting;
                wordIndex = (!isDeleting && wordIndex === words.length - 1) ? 0 : wordIndex + 1;
                setTimeout(type, isDeleting ? 1000 : 500);
            }
        }

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form submission
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Start typing animation
        window.addEventListener('load', type);

        // Animate floating tech tags on scroll
        const floatingTechs = document.querySelectorAll('.floating-tech');
        window.addEventListener('scroll', () => {
            floatingTechs.forEach(tech => {
                const scrollPosition = window.scrollY;
                const techPosition = tech.offsetTop;
                const distance = scrollPosition - techPosition;
                
                tech.style.transform = `translateY(${Math.sin(distance * 0.01) * 20}px) rotate(${Math.sin(distance * 0.02) * 5}deg)`;
            });
        });