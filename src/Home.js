import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { title: 'Spatalino', isEbreo: false, id: 1, link: '/spatalino' },
  { title: 'Parenzo', isEbreo: true, id: 2, link: '/parenzo' },
  { title: 'Cruciani', isEbreo: false, id: 3, link: '/cruciani' },
];

function ProductButton({ link }) {
    return (
      <Link to={link}>
        <button>
          Go to section
        </button>
      </Link>
    );
  }
  
  export default function Home() {
    const listItems = products.map(product => (
      <li
        key={product.id}
        style={{
          color: product.isEbreo ? 'red' : 'black',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <span style={{ marginRight: '10px' }}>{product.title}</span>
        <ProductButton link={product.link} />
      </li>
    ));
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Membri della Zanzara</h1>
          <ul>{listItems}</ul>
        </header>
      </div>
    );
  }
