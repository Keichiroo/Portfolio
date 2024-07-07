document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! Thank you for your message.');
    });
});

function openModal(imgSrc, title, description) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
