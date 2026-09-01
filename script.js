const readMoreBtn = document.querySelector('.read-more');
const readMoreText = document.querySelector('.read-more-text');
const readMoreIcon = document.querySelector('.read-more-logo');
const text = document.querySelector('.about-cps');

readMoreBtn.addEventListener('click', function() {
    const isExpanded = text.classList.toggle('expanded-text');

    if (isExpanded) {
        readMoreText.textContent = 'Свернуть';
        readMoreIcon.classList.add('rotated');
    } else {
        readMoreText.textContent = 'Читать далее';
        readMoreIcon.classList.remove('rotated');
    }
})
