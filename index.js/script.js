// script.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('property-modal');
    const closeBtn = document.querySelector('.close-btn');
    const detailBtns = document.querySelectorAll('.details-btn');

    detailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Aqui você pode usar os dados do imóvel para preencher o modal
            const propertyTitle = btn.parentElement.querySelector('h3').textContent;
            const propertyDescription = btn.parentElement.querySelector('p').textContent;

            document.getElementById('modal-title').textContent = propertyTitle;
            document.getElementById('modal-description').textContent = propertyDescription;
            
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

