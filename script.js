// Toggle text on button click
const btnToggleMessage = document.getElementById('btnToggleMessage');
const messageToToggle = document.getElementById('messageToToggle');

btnToggleMessage.addEventListener('click', () => {
    messageToToggle.textContent = messageToToggle.textContent === 'This message will toggle when you click the button.'
        ? 'You toggled the message!'
        : 'This message will toggle when you click the button.';
});

// Change image on hover
const imgHoverChange = document.getElementById('imgHoverChange');
const textHoverChange = document.getElementById('textHoverChange');

imgHoverChange.addEventListener('mouseover', () => {
    imgHoverChange.src = 'image-2.jpg'; // Change to the second image on hover
    textHoverChange.textContent = 'You hovered over the image!';
});

imgHoverChange.addEventListener('mouseout', () => {
    imgHoverChange.src = 'image.jpg'; // Revert to the original image
    textHoverChange.textContent = 'Hover over the image to see it change!';
});

// Change color of list items (Cities) on click
const cityColorList = document.getElementById('cityColorList');
const listItems = cityColorList.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', () => {
        listItems[i].style.color = listItems[i].style.color === 'blue' ? 'orange' : 'blue';
    });
};

// Display user input from form
const favoriteColorForm = document.getElementById('favoriteColorForm');
const displayColorResponse = document.getElementById('displayColorResponse');

favoriteColorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userFavoriteColor = document.getElementById('userFavoriteColor').value;
    displayColorResponse.textContent = `Your favorite color is ${userFavoriteColor}!`;
});
