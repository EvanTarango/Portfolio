document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });
});

function scrollToAdditionalContent(contentId, buttonElement) {
    const additionalContent = document.getElementById(contentId);
    if (additionalContent) {
        additionalContent.style.display = 'block'; // Show the additional content if it's hidden
        const additionalContentOffset = additionalContent.offsetTop;
        window.scrollTo({
            top: additionalContentOffset,
            behavior: 'smooth', // Smooth scrolling animation
        });
    }
    // Disable the button after clicking to prevent multiple clicks
    buttonElement.disabled = true;
}

// Example usage for the "More about Me" button:
const showMoreButton = document.getElementById('showMoreButton');
showMoreButton.addEventListener('click', () => {
    scrollToAdditionalContent('additionalContent', showMoreButton);
});

// Example usage for the "More about Me 2" button:
const showMoreButton2 = document.getElementById('showMoreButton2');
showMoreButton2.addEventListener('click', () => {
    scrollToAdditionalContent('additionalContent2', showMoreButton2);
});

const showMoreButton3 = document.getElementById('showMoreButton3');
showMoreButton3.addEventListener('click', () => {
    scrollToAdditionalContent('additionalContent3', showMoreButton3);
});

console.log(additionalContent.style.display);

const showMoreButton4 = document.getElementById('showMoreButton4');
showMoreButton4.addEventListener('click', () => {
    scrollToAdditionalContent('additionalContent4', showMoreButton4);
});

console.log(additionalContent.style.display);
