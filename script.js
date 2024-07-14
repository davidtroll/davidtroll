const backgrounds = [
    'url("images/shadow.jpg")',
    'url("images/sonic.jpg")',
    'url("images/knuckles.jpg")',
    'url("images/tails.jpg")',
    'url("images/mario.jpg")',
    'url("images/luigi.jpg")'
];

let currentBackground = 0;

document.getElementById('changeBackground').addEventListener('click', () => {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    document.querySelector('.background').style.backgroundImage = backgrounds[currentBackground];
});
