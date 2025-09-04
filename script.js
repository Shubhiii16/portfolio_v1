
        // Menu toggle functionality
        document.getElementById('menuToggle').addEventListener('click', function () {
            document.getElementById('navLinks').classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function () {
                document.getElementById('navLinks').classList.remove('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function () {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll animations
        function checkVisibility() {
            const sections = document.querySelectorAll('section');
            const timelineItems = document.querySelectorAll('.timeline-item');
            const projectCards = document.querySelectorAll('.project-card');

            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight * 0.75) {
                    section.classList.add('visible');
                }
            });

            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (itemTop < windowHeight * 0.75) {
                    item.classList.add('visible');
                }
            });

            projectCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (cardTop < windowHeight * 0.75) {
                    card.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('load', checkVisibility);

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Animate sections with GSAP
        gsap.utils.toArray('section').forEach(section => {
            gsap.fromTo(section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Animate timeline items
        gsap.utils.toArray('.timeline-item').forEach(item => {
            gsap.fromTo(item,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Animate project cards
        gsap.utils.toArray('.project-card').forEach(card => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Form validation
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thanks for your message! I\'ll get back to you soon.');
            this.reset();
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
