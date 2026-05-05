/**
 * Portfolio Script - Vanilla JavaScript
 * Features: Typing animation, Intersection Observer animations, Mobile menu
 *
 * @format
 */

document.addEventListener("DOMContentLoaded", () => {
	// Typing animation texts
	const typingTexts = ["Nyoman Harun", "Front-End Developer"];
	let textIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	const typingElement = document.querySelector(".typing-text");
	const cursorElement = document.querySelector(".cursor");

	function typeWriter() {
		const currentText = typingTexts[textIndex];

		if (isDeleting) {
			typingElement.textContent = currentText.substring(0, charIndex - 1);
			charIndex--;
		} else {
			typingElement.textContent = currentText.substring(0, charIndex + 1);
			charIndex++;
		}

		let typeSpeed = isDeleting ? 50 : 100;

		if (!isDeleting && charIndex === currentText.length) {
			typeSpeed = 2000; // Pause at full text
			isDeleting = true;
		} else if (isDeleting && charIndex === 0) {
			isDeleting = false;
			textIndex = (textIndex + 1) % typingTexts.length;
			typeSpeed = 500;
		}

		setTimeout(typeWriter, typeSpeed);
	}

	// Start typing after short delay
	setTimeout(typeWriter, 500);

	// Mobile hamburger menu
	const hamburger = document.querySelector(".hamburger");
	const navList = document.querySelector(".nav-list");
	const navLinks = document.querySelectorAll(".nav-link");

	hamburger.addEventListener("click", () => {
		const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
		const willOpen = !isExpanded; // state SETELAH toggle

		hamburger.setAttribute("aria-expanded", willOpen);
		navList.classList.toggle("nav-open");

		// Animasi berdasarkan state baru, bukan state lama
		const spans = hamburger.querySelectorAll("span");
		if (willOpen) {
			// Buka: bentuk silang (X)
			spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
			spans[1].style.transform = "scaleX(0)"; // hilangkan garis tengah
			spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
		} else {
			// Tutup: kembali ke 3 garis
			spans[0].style.transform = "none";
			spans[1].style.transform = "none";
			spans[2].style.transform = "none";
		}
	});

	// Close menu on link click (mobile)
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			hamburger.setAttribute("aria-expanded", "false");
			navList.classList.remove("nav-open");
		});
	});

	// Intersection Observer for scroll animations
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("active");
			}
		});
	}, observerOptions);

	// Observe all reveal elements
	document
		.querySelectorAll(".section, .project-card, .skill-item")
		.forEach((el) => {
			el.classList.add("reveal");
			observer.observe(el);
		});

	// Animate skill bars
	const skillBars = document.querySelectorAll(".skill-progress");

	const skillObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const bar = entry.target;
					const width = bar.dataset.width;
					bar.style.width = width + "%";
					skillObserver.unobserve(bar);
				}
			});
		},
		{ threshold: 0.5 },
	);

	skillBars.forEach((bar) => skillObserver.observe(bar));

	// Smooth scrolling for anchor links with offset for fixed nav
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", (e) => {
			e.preventDefault();
			const target = document.querySelector(anchor.getAttribute("href"));
			if (target) {
				const offsetTop = target.offsetTop - 80;
				window.scrollTo({
					top: offsetTop,
					behavior: "smooth",
				});
			}
		});
	});

	// Performance: Preload critical resources
	if ("loading" in HTMLImageElement.prototype) {
		// Native lazy loading supported
	} else {
		// Fallback for older browsers if needed
	}

	console.log("Portfolio loaded successfully 🎉");
});
