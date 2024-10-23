import React from 'react';

const products = [
  {
    id: 1,
    image: 'https://i.zst.com.br/thumbs/12/1c/1b/-978814202.jpg',
    price: 'R$3200,00',
  },
  {
    id: 2,
    Image: 'https://www.asus.com/media/Odin/Websites/global/Series/9.png',
    price: 'R$6500,00',
  },
  {
    id: 3,
    Image:
      'https://img.freepik.com/psd-gratuitas/levitando-fones-de-ouvido-ainda-vida_23-2150806982.png?semt=ais_hybrid',
    price: '399,99',
  },
];

function Produtos() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
