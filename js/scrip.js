
const Mario = document.querySelector('.Mario');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    Mario.classList.add('jump')

    setTimeout(() =>{
        Mario.classList.remove('jump') 
    },500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const MarioPosition = +window.getComputedStyle(Mario).bottom.replace('px', ' ');
    
    if (pipePosition <= 120 && pipePosition > 0 && MarioPosition < 80 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        Mario.style.animation = 'none';
        Mario.style.bottom = `${MarioPosition}px`;

        Mario.src = './image/game-over.png'
        Mario.style.width = '75px'
        Mario.style.marginLeft = '50px'

        clearInterval(loop);
    };
},10);

document.addEventListener('keydown', jump);