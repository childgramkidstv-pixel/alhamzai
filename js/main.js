document.addEventListener('DOMContentLoaded', function () {

    // Mobile menu toggle
    var mobileToggle = document.querySelector('.mobile-toggle');
    var mobileMenu = document.querySelector('.mobile-menu');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    var navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            navbar.style.padding = '16px 0';
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offset = 80;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    // ===== AI Agent Celebration Animation =====
    function triggerCelebrationAnimation() {
        var scene = document.querySelector('.scene-3d');
        if (!scene) return;

        scene.classList.add('animate');

        // Generate dynamic data particles burst
        for (var i = 0; i < 18; i++) {
            (function(index) {
                setTimeout(function() {
                    var particle = document.createElement('div');
                    particle.className = 'data-particle dp-dynamic';
                    var colors = ['#6366f1', '#06b6d4', '#a855f7', '#22c55e'];
                    var color = colors[Math.floor(Math.random() * colors.length)];
                    particle.style.background = color;
                    particle.style.boxShadow = '0 0 8px ' + color;
                    particle.style.left = (10 + Math.random() * 80) + '%';
                    particle.style.bottom = '0';
                    particle.style.width = (3 + Math.random() * 4) + 'px';
                    particle.style.height = particle.style.width;
                    var duration = 2.5 + Math.random() * 2;
                    particle.style.animation = 'dataRiseDynamic ' + duration + 's ease-out ' + (Math.random() * 0.5) + 's forwards';
                    scene.appendChild(particle);

                    setTimeout(function() {
                        if (particle.parentNode) particle.parentNode.removeChild(particle);
                    }, (duration + 1) * 1000);
                }, index * 80);
            })(i);
        }

        // Generate circuit node burst
        for (var j = 0; j < 8; j++) {
            (function(index) {
                setTimeout(function() {
                    var node = document.createElement('div');
                    node.className = 'circuit-node cn-dynamic';
                    node.style.left = (5 + Math.random() * 90) + '%';
                    node.style.top = (10 + Math.random() * 70) + '%';
                    var nDuration = 2 + Math.random() * 1.5;
                    node.style.animation = 'nodeBurst ' + nDuration + 's ease-out forwards';
                    scene.appendChild(node);

                    setTimeout(function() {
                        if (node.parentNode) node.parentNode.removeChild(node);
                    }, (nDuration + 0.5) * 1000);
                }, index * 150);
            })(j);
        }

        // Generate holographic glyph burst
        var glyphs = ['\u25CE', '\u2B2E', '\u2B2F', '\u2609', '\u25C8', '\u2726'];
        for (var k = 0; k < 6; k++) {
            (function(index) {
                setTimeout(function() {
                    var glyph = document.createElement('div');
                    glyph.className = 'holo-glyph';
                    glyph.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
                    var gColors = ['#06b6d4', '#6366f1', '#a855f7', '#22c55e'];
                    glyph.style.color = gColors[Math.floor(Math.random() * gColors.length)];
                    glyph.style.left = (15 + Math.random() * 70) + '%';
                    glyph.style.top = (15 + Math.random() * 50) + '%';
                    glyph.style.fontSize = (16 + Math.random() * 12) + 'px';
                    glyph.style.opacity = '0';
                    glyph.style.position = 'absolute';
                    glyph.style.pointerEvents = 'none';
                    glyph.style.zIndex = '12';
                    glyph.style.textShadow = '0 0 10px currentColor';
                    var gDuration = 2.5 + Math.random() * 2;
                    glyph.style.animation = 'glyphFloat ' + gDuration + 's ease-out ' + (Math.random() * 0.8) + 's forwards';
                    scene.appendChild(glyph);

                    setTimeout(function() {
                        if (glyph.parentNode) glyph.parentNode.removeChild(glyph);
                    }, (gDuration + 1) * 1000);
                }, index * 200);
            })(k);
        }

        // Generate energy ring burst
        for (var l = 0; l < 4; l++) {
            (function(index) {
                setTimeout(function() {
                    var ring = document.createElement('div');
                    ring.className = 'energy-ring';
                    ring.style.position = 'absolute';
                    ring.style.top = '50%';
                    ring.style.left = '50%';
                    ring.style.width = (60 + index * 40) + 'px';
                    ring.style.height = (60 + index * 40) + 'px';
                    ring.style.marginTop = -(30 + index * 20) + 'px';
                    ring.style.marginLeft = -(30 + index * 20) + 'px';
                    ring.style.border = '1px solid rgba(6, 182, 212, 0.3)';
                    ring.style.borderRadius = '50%';
                    ring.style.pointerEvents = 'none';
                    ring.style.zIndex = '4';
                    var rDuration = 2 + index * 0.3;
                    ring.style.animation = 'ringExpand ' + rDuration + 's ease-out ' + (index * 0.2) + 's forwards';
                    scene.appendChild(ring);

                    setTimeout(function() {
                        if (ring.parentNode) ring.parentNode.removeChild(ring);
                    }, (rDuration + 0.5) * 1000);
                }, index * 250);
            })(l);
        }
    }

    // Add dynamic AI animation keyframes via style injection
    var dynamicStyle = document.createElement('style');
    dynamicStyle.textContent = [
        '@keyframes dataRiseDynamic {',
        '    0% { opacity: 0; transform: translateY(0) scale(0.5); }',
        '    8% { opacity: 1; transform: translateY(-20px) scale(1); }',
        '    100% { opacity: 0; transform: translateY(-420px) scale(0.3); }',
        '}',
        '@keyframes nodeBurst {',
        '    0% { opacity: 0; transform: scale(0); }',
        '    30% { opacity: 1; transform: scale(1.8); }',
        '    60% { opacity: 0.8; transform: scale(1.2); }',
        '    100% { opacity: 0; transform: scale(0.5); }',
        '}',
        '@keyframes glyphFloat {',
        '    0% { opacity: 0; transform: translateY(20px) scale(0.5) rotate(0deg); }',
        '    20% { opacity: 0.9; transform: translateY(5px) scale(1) rotate(-20deg); }',
        '    60% { opacity: 0.7; transform: translateY(-30px) scale(0.9) rotate(20deg); }',
        '    100% { opacity: 0; transform: translateY(-60px) scale(0.5) rotate(0deg); }',
        '}',
        '@keyframes ringExpand {',
        '    0% { opacity: 0; transform: scale(0.3); }',
        '    30% { opacity: 0.5; }',
        '    100% { opacity: 0; transform: scale(2.5); }',
        '}'
    ].join('\n');
    document.head.appendChild(dynamicStyle);

    // Form validation helpers
    function clearErrors(form) {
        form.querySelectorAll('.form-group').forEach(function (group) {
            group.classList.remove('has-error');
        });
    }

    function showError(inputId) {
        var input = document.getElementById(inputId);
        if (input) {
            input.closest('.form-group').classList.add('has-error');
        }
    }

    // Contact form handling
    var contactForm = document.getElementById('contactForm');
    var formSuccess = document.getElementById('formSuccess');
    var formSubmitting = document.getElementById('formSubmitting');

    if (contactForm) {
        // Prevent default form submission completely
        contactForm.setAttribute('novalidate', 'novalidate');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            try {
                clearErrors(contactForm);

                var fullName = document.getElementById('fullName').value.trim();
                var email = document.getElementById('email').value.trim();
                var businessType = document.getElementById('businessType').value;
                var automationType = document.getElementById('automationType').value;
                var message = document.getElementById('message').value.trim();

                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                var hasError = false;

                if (!fullName) {
                    showError('fullName');
                    hasError = true;
                }
                if (!email || !emailRegex.test(email)) {
                    showError('email');
                    hasError = true;
                }
                if (!businessType) {
                    showError('businessType');
                    hasError = true;
                }
                if (!automationType) {
                    showError('automationType');
                    hasError = true;
                }
                if (!message) {
                    showError('message');
                    hasError = true;
                }

                if (hasError) return false;

                var submitBtn = contactForm.querySelector('.btn-submit');
                submitBtn.disabled = true;

                contactForm.classList.add('hidden');
                if (formSubmitting) {
                    formSubmitting.classList.remove('hidden');
                    window.scrollTo({ top: formSubmitting.getBoundingClientRect().top + window.pageYOffset - 100, behavior: 'smooth' });
                }

                var airtableBaseId = 'appuxknKN1vY0rzuw';
                var airtableApiKey = 'pat8Ss15pQtedHmdc.3fa57a97645d8d647ebe6afea01fec7458686669f6e015fc0b58f9176cf71513';
                var airtableTableName = 'Clients Details';
                var airtableUrl = 'https://api.airtable.com/v0/' + airtableBaseId + '/' + encodeURIComponent(airtableTableName);

                var fields = {
                    'Full Name': fullName,
                    'Email': email,
                    'Company Name': document.getElementById('companyName').value.trim() || '',
                    'Phone Number': document.getElementById('phone').value.trim() || '',
                    'Business Type': document.getElementById('businessType').options[document.getElementById('businessType').selectedIndex].text,
                    'Automation Type': document.getElementById('automationType').options[document.getElementById('automationType').selectedIndex].text,
                    'Pricing Plan': document.getElementById('pricingPlan').value ? document.getElementById('pricingPlan').options[document.getElementById('pricingPlan').selectedIndex].text : '',
                    'Budget': document.getElementById('budget').value ? document.getElementById('budget').options[document.getElementById('budget').selectedIndex].text : '',
                    'Message': message
                };

                var payload = JSON.stringify({ fields: fields });

                fetch(airtableUrl, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + airtableApiKey,
                        'Content-Type': 'application/json'
                    },
                    body: payload
                }).then(function (response) {
                    return response.json().then(function (data) {
                        if (response.ok) {
                            if (formSubmitting) formSubmitting.classList.add('hidden');
                            contactForm.classList.add('hidden');
                            formSuccess.classList.remove('hidden');
                            window.scrollTo({ top: formSuccess.getBoundingClientRect().top + window.pageYOffset - 100, behavior: 'smooth' });
                            triggerCelebrationAnimation();
                        } else {
                            if (formSubmitting) formSubmitting.classList.add('hidden');
                            contactForm.classList.remove('hidden');
                            var errorMsg = 'Something went wrong. Please try again.';
                            if (data && data.error && data.error.message) {
                                errorMsg = data.error.message;
                            }
                            alert(errorMsg);
                        }
                        submitBtn.innerHTML = '<span>Submit Request</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
                        submitBtn.disabled = false;
                    });
                }).catch(function (err) {
                    if (formSubmitting) formSubmitting.classList.add('hidden');
                    contactForm.classList.remove('hidden');
                    alert('Network error. Please check your connection and try again.');
                    submitBtn.innerHTML = '<span>Submit Request</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
                    submitBtn.disabled = false;
                });

            } catch (err) {
                alert('Error: ' + err.message);
            }

            return false;
        });

        // Also prevent form submission on button click
        var submitBtn = contactForm.querySelector('.btn-submit');
        if (submitBtn) {
            submitBtn.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }
    }

    // Clear error on input
    document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea').forEach(function (input) {
        input.addEventListener('input', function () {
            this.closest('.form-group').classList.remove('has-error');
        });

        input.addEventListener('change', function () {
            this.closest('.form-group').classList.remove('has-error');
        });
    });

    // Intersection Observer for fade-in animations
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    var animateElements = document.querySelectorAll('.contact-card, .consultation-item, .why-point, .stat, .service-card, .different-card, .tech-card, .approach-step, .solution-block, .solution-card, .philosophy-card, .outcome-stat, .about-what-item, .about-belief, .about-reason-row, .about-tech-pill');
    animateElements.forEach(function (el) {
        el.classList.add('animate-hidden');
        observer.observe(el);
    });

    // Section headers animation
    var sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(function (el) {
        el.classList.add('animate-hidden');
        observer.observe(el);
    });

    // Stagger animation delay
    document.querySelectorAll('.contact-info-grid .contact-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.why-points .why-point').forEach(function (point, i) {
        point.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.services-grid .service-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.different-grid .different-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.tech-grid .tech-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.approach-steps .approach-step').forEach(function (step, i) {
        step.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.solutions-section .solution-block').forEach(function (block, i) {
        block.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.solutions-cards-grid .solution-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.12) + 's';
    });

    document.querySelectorAll('.philosophy-grid .philosophy-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.outcome-stats .outcome-stat').forEach(function (stat, i) {
        stat.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.about-features-grid .about-feature-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.about-principles-grid .about-principle-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.about-why-grid .about-why-card').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.about-what-right .about-what-item').forEach(function (item, i) {
        item.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.about-beliefs-list .about-belief').forEach(function (item, i) {
        item.style.transitionDelay = (i * 0.1) + 's';
    });

    document.querySelectorAll('.about-reasons-stack .about-reason-row').forEach(function (item, i) {
        item.style.transitionDelay = (i * 0.1) + 's';
    });

    // CTA content animation
    var ctaContent = document.querySelector('.cta-content');
    if (ctaContent) {
        ctaContent.classList.add('animate-hidden');
        observer.observe(ctaContent);
    }

    // Consultation info animation
    var consultationInfo = document.querySelector('.consultation-info');
    if (consultationInfo) {
        consultationInfo.classList.add('animate-hidden');
        observer.observe(consultationInfo);
    }

    // Why description animation
    var whyDescription = document.querySelector('.why-description');
    if (whyDescription) {
        whyDescription.classList.add('animate-hidden');
        observer.observe(whyDescription);
    }

    // Journey step animation
    var journeyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                journeyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.journey-step').forEach(function (step) {
        journeyObserver.observe(step);
    });

    // Counter animation for impact numbers
    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-target'));
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1500;
        var start = 0;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target + suffix;
            }
        }
        requestAnimationFrame(step);
    }

    var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.impact-number').forEach(function (el) {
        counterObserver.observe(el);
    });

    // Pricing toggle (setup / monthly)
    var pricingToggle = document.getElementById('pricingToggle');
    if (pricingToggle) {
        var toggleLabels = document.querySelectorAll('.pricing-toggle-label');
        pricingToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            var isMonthly = this.classList.contains('active');

            toggleLabels.forEach(function (label) {
                label.classList.remove('active');
                if (isMonthly && label.getAttribute('data-view') === 'monthly') {
                    label.classList.add('active');
                } else if (!isMonthly && label.getAttribute('data-view') === 'setup') {
                    label.classList.add('active');
                }
            });

            document.querySelectorAll('.price-view-setup').forEach(function (el) {
                el.classList.toggle('active', !isMonthly);
            });
            document.querySelectorAll('.price-view-monthly').forEach(function (el) {
                el.classList.toggle('active', isMonthly);
            });
        });

        toggleLabels.forEach(function (label) {
            label.addEventListener('click', function () {
                var view = this.getAttribute('data-view');
                if (view === 'monthly' && !pricingToggle.classList.contains('active')) {
                    pricingToggle.click();
                } else if (view === 'setup' && pricingToggle.classList.contains('active')) {
                    pricingToggle.click();
                }
            });
        });
    }

    // Pricing cards animation
    var pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.12) + 's';
        observer.observe(card);
    });

    // Maintenance cards animation
    var maintenanceCards = document.querySelectorAll('.maintenance-card');
    maintenanceCards.forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
        observer.observe(card);
    });

    // Auto-select pricing plan from URL params
    var urlParams = new URLSearchParams(window.location.search);
    var planParam = urlParams.get('plan');
    if (planParam) {
        var planSelect = document.getElementById('pricingPlan');
        if (planSelect) {
            var option = planSelect.querySelector('option[value="' + planParam + '"]');
            if (option) {
                planSelect.value = planParam;
                planSelect.closest('.form-group').classList.add('has-selection');
            }
        }
    }

    // Pricing page "Get Started" buttons pass plan param
    document.querySelectorAll('.btn-pricing').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            var card = this.closest('.pricing-card');
            if (card) {
                var plan = card.getAttribute('data-plan');
                var href = this.getAttribute('href');
                if (href && href.indexOf('#') !== -1) {
                    this.setAttribute('href', href.split('?')[0] + '?plan=' + plan);
                }
            }
        });
    });

    // Compare section "Choose" buttons pass plan param
    document.querySelectorAll('.compare-feature-row:last-child .btn-pricing-sm').forEach(function (btn, i) {
        var plans = ['starter', 'growth', 'professional', 'business', 'enterprise'];
        btn.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href && href.indexOf('#') !== -1 && plans[i]) {
                this.setAttribute('href', href.split('?')[0] + '?plan=' + plans[i]);
            }
        });
    });

    // ===== Scroll Progress Bar =====
    var scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        });
    }

    // ===== Phone Chat Comparison Animation =====
    var manualChat = document.getElementById('manualChat');
    var aiChat = document.getElementById('aiChat');
    var manualStatusEl = document.getElementById('manualStatus');
    var compareResult = document.getElementById('compareResult');

    if (manualChat && aiChat) {
        var conversations = [
            [
                { side: 'cust', text: "Hi, I need help with my order" },
                { side: 'manual-wait', ms: 3200 },
                { side: 'manual', text: "Sure, let me check... one moment" },
                { side: 'ai', text: "I'd be happy to help! What's your order number?" },
                { side: 'cust', text: "It's order #4521" },
                { side: 'manual-wait', ms: 4000 },
                { side: 'manual', text: "Okay checking now, please hold..." },
                { side: 'ai', text: "Found it! Ships today. Tracking: TRK-7829" },
                { side: 'cust', text: "Can I change the delivery address?" },
                { side: 'manual-wait', ms: 3500 },
                { side: 'manual', text: "I'll need to transfer you to shipping..." },
                { side: 'ai', text: "Updated! New address confirmed. Anything else?" },
                { side: 'cust', text: "That's all, thanks!" },
                { side: 'manual-wait', ms: 2500 },
                { side: 'manual', text: "Please wait while I confirm..." },
                { side: 'ai', text: "All set! Have a great day!" },
                { side: 'result', text: "AI resolved in 2 seconds" },
                { side: 'wait', ms: 3000 }
            ],
            [
                { side: 'cust', text: "Do you offer refunds?" },
                { side: 'manual-wait', ms: 2800 },
                { side: 'manual', text: "Let me find our refund policy..." },
                { side: 'ai', text: "Yes! 30-day money back guarantee. Want to start a return?" },
                { side: 'cust', text: "Yes please, order #8834" },
                { side: 'manual-wait', ms: 4500 },
                { side: 'manual', text: "Still looking for the policy page..." },
                { side: 'ai', text: "Return initiated! Refund of $499 arrives in 3-5 days." },
                { side: 'result', text: "AI resolved in 2 seconds" },
                { side: 'wait', ms: 3000 }
            ],
            [
                { side: 'cust', text: "Is your product compatible with Mac?" },
                { side: 'manual-wait', ms: 3000 },
                { side: 'manual', text: "Hmm, let me ask the tech team..." },
                { side: 'ai', text: "Yes! Fully compatible with macOS 12+. Need help installing?" },
                { side: 'cust', text: "What about iOS?" },
                { side: 'manual-wait', ms: 3800 },
                { side: 'manual', text: "I think so? Let me double check..." },
                { side: 'ai', text: "Absolutely! iOS 16+ supported. Here's the App Store link." },
                { side: 'result', text: "AI resolved in 2 seconds" },
                { side: 'wait', ms: 3000 }
            ]
        ];

        var convIdx = 0;
        var msgIdx = 0;
        var manualTimer = null;

        function addBubble(container, text, cls) {
            var el = document.createElement('div');
            el.className = 'hp-bubble ' + cls;
            el.textContent = text;
            container.appendChild(el);
            container.scrollTop = container.scrollHeight;
        }

        function addTyping(container, phoneEl) {
            var el = document.createElement('div');
            el.className = 'hp-typing';
            el.innerHTML = '<div class="hp-typing-dot"></div><div class="hp-typing-dot"></div><div class="hp-typing-dot"></div>';
            container.appendChild(el);
            container.scrollTop = container.scrollHeight;
            return el;
        }

        function removeEl(el) {
            if (el && el.parentNode) el.parentNode.removeChild(el);
        }

        function clearChats() {
            manualChat.innerHTML = '';
            aiChat.innerHTML = '';
            if (compareResult) compareResult.classList.remove('show');
            if (manualStatusEl) {
                manualStatusEl.textContent = 'Online';
                manualStatusEl.classList.remove('typing');
            }
        }

        function runConversation() {
            var conv = conversations[convIdx];
            msgIdx = 0;
            clearChats();
            processMsg(conv);
        }

        function processMsg(conv) {
            if (msgIdx >= conv.length) {
                convIdx = (convIdx + 1) % conversations.length;
                setTimeout(runConversation, 2000);
                return;
            }

            var msg = conv[msgIdx];
            msgIdx++;

            if (msg.side === 'cust') {
                addBubble(manualChat, msg.text, 'hp-bubble-cust');
                addBubble(aiChat, msg.text, 'hp-bubble-cust');
                setTimeout(function () { processMsg(conv); }, 600);

            } else if (msg.side === 'manual-wait') {
                if (manualStatusEl) {
                    manualStatusEl.textContent = 'Typing...';
                    manualStatusEl.classList.add('typing');
                }
                var typEl = addTyping(manualChat);
                clearTimeout(manualTimer);
                manualTimer = setTimeout(function () {
                    removeEl(typEl);
                    if (manualStatusEl) {
                        manualStatusEl.textContent = 'Online';
                        manualStatusEl.classList.remove('typing');
                    }
                    processMsg(conv);
                }, msg.ms);

            } else if (msg.side === 'manual') {
                addBubble(manualChat, msg.text, 'hp-bubble-manual');
                setTimeout(function () { processMsg(conv); }, 500);

            } else if (msg.side === 'ai') {
                addBubble(aiChat, msg.text, 'hp-bubble-ai');
                setTimeout(function () { processMsg(conv); }, 800);

            } else if (msg.side === 'result') {
                if (compareResult) {
                    compareResult.querySelector('span:last-child').textContent = msg.text;
                    compareResult.classList.add('show');
                }
                setTimeout(function () { processMsg(conv); }, 1500);

            } else if (msg.side === 'wait') {
                setTimeout(function () { processMsg(conv); }, msg.ms);
            }
        }

        setTimeout(runConversation, 1500);
    }

    // ===== Typewriter Effect =====
    var twEl = document.getElementById('heroTypewriter');
    if (twEl) {
        var words = ['24/7', 'on Autopilot', 'Smarter', 'Faster'];
        var wordIdx = 0;
        var charIdx = 0;
        var deleting = false;
        var typeSpeed = 90;

        function typeLoop() {
            var current = words[wordIdx];
            if (deleting) {
                charIdx--;
                twEl.textContent = current.substring(0, charIdx);
                if (charIdx === 0) {
                    deleting = false;
                    wordIdx = (wordIdx + 1) % words.length;
                    setTimeout(typeLoop, 400);
                    return;
                }
                setTimeout(typeLoop, 50);
            } else {
                charIdx++;
                twEl.textContent = current.substring(0, charIdx);
                if (charIdx === current.length) {
                    deleting = true;
                    setTimeout(typeLoop, 1800);
                    return;
                }
                setTimeout(typeLoop, typeSpeed);
            }
        }
        setTimeout(typeLoop, 800);
    }

    // ===== Hero Fade-Up Animations =====
    var heroItems = document.querySelectorAll('.anim-fade-up');
    setTimeout(function () {
        heroItems.forEach(function (el) {
            el.classList.add('is-visible');
        });
    }, 200);

    // ===== Scroll Reveal =====
    var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.anim-reveal').forEach(function (el) {
        revealObs.observe(el);
    });

    // ===== Counter Animation =====
    var countObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var target = parseInt(el.getAttribute('data-to'));
                if (!target) return;
                var dur = 1800;
                var start = null;
                function tick(ts) {
                    if (!start) start = ts;
                    var p = Math.min((ts - start) / dur, 1);
                    var ease = 1 - Math.pow(1 - p, 4);
                    el.textContent = Math.floor(ease * target);
                    if (p < 1) requestAnimationFrame(tick);
                    else el.textContent = target;
                }
                requestAnimationFrame(tick);
                countObs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.hp-count').forEach(function (el) {
        countObs.observe(el);
    });

});
