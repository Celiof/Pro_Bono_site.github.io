function handleMouseEnter(){
  this.classList.add('card--hovered'); // adiciona o efeito da imagem saltar criado no codigo abaixo 
  document.body.id = `${this.id}-hovered`; /* ${this.id} isso significa que é em JS, pega o id do elemento que o mouse está em cima e contatenar com hovered */
}

function handleMouseLeave(){
  this.classList.remove('card--hovered'); // esse para remover o efeito da função anterior, se não a imagem não volta ao normal
  document.body.id ='';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('card');  /*  recebe todos os elementos HTML refentes aos cards  */
  /* vamos fazer um looping com for no javaScript */

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter',handleMouseEnter); 
    /* evento de quando o usuario coloca o mouse em cima, adiona uma função chamando ela de 'handleMouseEnter' para adicinar essa classe no nosso elemento */
    card.addEventListener('mouseleave',handleMouseLeave); // precisa para chamar a função criada la em cima 
  }
    
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);     
/* fica esperando um evento da pagina HTML acontecer para ele executar alguma função, nesse caso a função DOMContentLoaded" e então chame a que nós criamos getElementsByClassName, false no final porque não quero colocar mais nenhum parametro */
/*
function selectCarouselItem(selectedItem) {  poderiamos criar com o addEventListener mais esse é outro jeito 
  console.log('Selecionando item', selectedItem);
}   /* criamos essa função pra dar o efeito de rotação quando clicar nos botões */

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); 
  /* para pegar so o tracho Y da string, match é correspondencia achar alguma coisa parecida com o que eu colocar la dentro como argumento  */
  const rotateYDeg = - 120 * (Number(selectedItem) - 1 );   
  /* como temos 3 imagens vai ser 360/3 = 120°, toda vez que girar vai par o centro.fica com valor negativo para girar no sentido anti-horário (-120°), selectedItemsão os cards 1, 2 ou 3 no html, convertemos para numero esse texto Number antes do texto, o menos 1 é sempre subtrair um da soma porque o primeiro tem que começar em 0, mas no ID em html ele está 1, assim se não tiver o -1 na multiplicação ficaria 120 * 1 valor do Id = 120,*/

  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;
 // console.log(newTransform); esse função é para testar no inspecionar elemento na web

  const activeButtonElement = document.querySelector('.controller__button--active');
  activeButtonElement.classList.remove('controller__button--active'); // retiro o comando anterior para colocar o proximo ativo
  selectedButtonElement.classList.add('controller__button--active'); /*adicionamos uma classe ao elemento que acamos de clicar como atributo da nossa função selectedButtonElement */
}