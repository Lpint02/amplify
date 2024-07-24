import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const products = [
	{ title: 'Spatalino', isEbreo: false, id: 1, link: 'https://pbs.twimg.com/profile_images/1193448180266029057/6f09jm6x_400x400.jpg'},
	{ title: 'Parenzo', isEbreo: true, id: 2, link: 'https://wips.plug.it/cips/libero.it/magazine/cms/2022/07/david-parenzo.jpg' },
	{ title: 'Cruciani', isEbreo: false, id: 3, link: 'https://www.arabonormannaunesco.it/wp-content/uploads/2024/06/giuseppe-cruciani-20240621-arabonormannounesco.it_.jpg'},
  ];

  function ProductButton({ link }) {
	const [count, setCount] = useState(0);
	function handleClick() {
		alert('You clicked me!');
		setCount(count + 1);
	  }
	return (
	  <a href={link} target="_blank" rel="noopener noreferrer">
		<button onClick={handleClick}>
		  Go to link (clicked {count} times)
		</button>
	  </a>
	);
  }
  
  export default function MyApp() {
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
	  <div className='App'>
		<header className='App-header'>
		<h1>Membri della Zanzara</h1>
		<ul>{listItems}</ul>
		</header>
	  </div>
	);
  }
