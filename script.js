// ================= ACTIVE NAV LINK =================
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ================= SMOOTH SCROLL =================
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        if(link.getAttribute("href").startsWith("#")){
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

// ================= MODAL FUNCTION =================
const modals = document.querySelectorAll(".modal");
const btns = document.querySelectorAll(".view-more-btn");
const closes = document.querySelectorAll(".close");

// Open modal
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = document.getElementById(btn.dataset.modal);
        if(modal){
            modal.style.display = "block";
        }
    });
});

// Close modal with X
closes.forEach(span => {
    span.addEventListener("click", () => {
        span.closest(".modal").style.display = "none";
    });
});

// Close modal by clicking outside content
window.addEventListener("click", e => {
    modals.forEach(modal => {
        if(e.target === modal){
            modal.style.display = "none";
        }
    });
});

// ================= FADE-IN EFFECT =================
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("show");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

