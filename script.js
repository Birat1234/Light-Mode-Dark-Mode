const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');


//Color Light or Dark
function colorMode(color) {
    image1.src = `img/undraw_conceptual_idea_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_proud_coder_${color}.svg`;
    image4.src = `img/undraw_Presentation_${color}.svg`;
    image5.src = `img/undraw_Growing_${color}.svg`;
}


//Dark Mode function
function darkMode() {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    textBox.style.backgroundColor = 'rgb(27,32,33)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-star');
    colorMode('dark');
}

//Light Mode function
function lightMode() {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    textBox.style.backgroundColor = 'rgb(91, 138, 114);';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-star','fa-sun');
    colorMode('light');
}


//Swith the themes dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light'); 
        lightMode();
    }
}

//EventListener

toggleSwitch.addEventListener('change', switchTheme);