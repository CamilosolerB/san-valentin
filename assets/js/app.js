const btnSi = document.querySelector('.botones__btn-si');
const btnNo = document.querySelector('.botones__btn-no');
const randomPic = document.querySelector('.random-pics__cats');
const question = document.querySelector('.question');

const musica = new Audio('./assets/musica/chachacha.mp3');
const accept = new Audio('./assets/musica/canicall.mp3')
musica.play();
// Si acepta: 
btnSi.addEventListener('click', ()=>{
    randomPic.src = './assets/fotos/0.jpg';
    question.innerText = ' Uwu!!!!! :3 ';
    question.classList.add('question-style');
    musica.pause();
    accept.play();
    btnSi.style.display = 'none';
    btnNo.style.display = 'none';


})


// Lógica: 

let contador = 0;

btnNo.addEventListener('click', ()=>{

        switch (contador) {
            
            case 0:
                btnNo.innerText = 'Segura?';
                btnSi.classList.add('estilo-1');
                randomPic.src = './assets/fotos/2.jpg'
                break;
            
            case 1:
                btnNo.innerText = 'Segurísima?';
                btnSi.classList.add('estilo-2');
                randomPic.src = './assets/fotos/3.jpg'
                break;
        
            case 2:
                btnNo.innerText = 'de verdad? :( ?';
                btnSi.classList.add('estilo-3');
                randomPic.src = './assets/fotos/4.jpg'

                break;

            default:
                btnNo.innerText = ':(';
                btnSi.classList.add('estilo-4');
                randomPic.src = './assets/fotos/5.jpg'

                break;
        }

        contador++
        
})






