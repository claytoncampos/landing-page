// Make Cards
const sectionCards = document.querySelector('section.cards');

const card = document.querySelector('div.card');

const btnSetItem = document.getElementById('send-info');

var inputName = document.querySelector('#nome');

var inputEmail = document.querySelector('#email');

const products = [
  {
    title: 'Tênis Nike Air Max 270 React Masculino',
    value: 'R$ 270.00',
    thumb:
      'https://authenticfeet.vteximg.com.br/arquivos/ids/228716-600-600/Tenis-Nike-Air-Max-27-React-Masculino-Multicolor.jpg?v=637044260135100000',
    product_id: 'GykTLqODQuU',
    product_desc: '70% OFF',
  },
  {
    title: 'Tênis Air Max 97 Masculino Branco + Azul',
    value: 'R$ 330.00',
    thumb:
      'https://artwalk.vteximg.com.br/arquivos/ids/225642-1000-1000/Tenis-Nike-Air-Max-97-Masculino-Multicolor.jpg?v=637323403836200000',
    product_id: 'HN1UjzRSdBk',
    product_desc: '50% OFF',
  },
  {
    title: 'Tênis Air Max Plus EOI Masculino Preto',
    value: 'R$ 420.00',
    thumb:
      'https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-plus-eoi-masculino-DA5561-001-1.jpg',
    product_id: 'rAzHvYnQ8DY',
    product_desc: '50% OFF',
  },
];

products.map((product) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute('id', product.product_id);
  cardClone.querySelector('img').src = product.thumb;
  cardClone.querySelector('.title').innerHTML = product.title;
  cardClone.querySelector('.info > p.text--medium').innerHTML = product.value;
  cardClone.querySelector('.info > p.price').innerHTML = product.product_desc;
  sectionCards.appendChild(cardClone);
});

function clearInputs() {
  inputName.value = '';
  inputEmail.value = '';
}

function setLocalStorage() {
  localStorage.setItem('nome', inputName.value);
  localStorage.setItem('email', inputEmail.value);
  clearInputs();
}
