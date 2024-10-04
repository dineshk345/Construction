function openModal(project) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const image = document.getElementById('modal-image');
    const description = document.getElementById('modal-description');

    if (project === 'Modern house') {
        title.innerText = 'Modern House';
        image.src = 'images/Modern house.jfif';
        description.innerText = 'A beautiful modern house with sustainable design.';
    } else if (project === 'Office buildings') {
        title.innerText = 'Office Building';
        image.src = 'images/Office buildings.jfif';
        description.innerText = 'A state-of-the-art office building with eco-friendly features.';
    } else if (project === 'Urban park') {
        title.innerText = 'Urban Park';
        image.src = 'images/urban park.jfif';
        description.innerText = 'An urban park designed for community engagement.';
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            document.getElementById('responseMessage').innerText = 'Thank you for your message, ' + name + '!';
            this.reset(); // Clear the form
        } else {
            document.getElementById('responseMessage').innerText = 'Please fill out all fields.';
        }
    });
});

