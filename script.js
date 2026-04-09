const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');

const list =  document.querySelectorAll('.item');
console.log(btnPrev);
console.log(list);


//logica usando forEach
function voltar() {
    console.log("voltar");
    let activeOld = document.querySelector('.item.active');
    activeOld.classList.remove('active');

    
    list.forEach((item, index) => {
        if (item === activeOld) {
            if (index === 0) {
                list[list.length - 1].classList.add('active');
            } else {
                list[index - 1].classList.add('active');
            }
        }
    });   
}

//logica simples usando index
let count = list.length;
let index = 0;

function avancar() {
    console.log("avançar");
    
    let activeNot = document.querySelector('.active');
       activeNot.classList.remove('active');

    console.log(count);
    index += 1;
    console.log(index);
    if (index >= count) {
        index = 0;
    }
    list[index].classList.add('active');
   

}

btnPrev.addEventListener('click', voltar);
btnNext.addEventListener('click',avancar);