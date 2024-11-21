import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HouseListing from './components/HouseListing.jsx';

import './styles.css';

function App() {
const houses = [
  {
    id: 1,

    title: 'Casa en la playa',
    description: 'Hermosa casa con vista al mar.',
    price: 300000,
    location: 'Barcelona',
    image:['https://static.fotocasa.es/images/ads/eca0bede-2c54-4f51-979d-e19d67cc51bf?rule=web_948x542','https://static.fotocasa.es/images/ads/9b819af2-1ad5-448c-830b-94b9abd03b3c?rule=web_482x269','https://static.fotocasa.es/images/ads/0a72a4b7-2c7c-4b7c-947a-a08324a979e7?rule=web_482x269'],
    promotor: 'Arnau Houses - La teva Casa aprop',
    metros:95,
    baños:2,
    habitaciones:3
  },
  {
    id: 2,
  
    title: 'Apartamento en el centro de Madrid',
    description: 'Moderno apartamento en el corazón de la ciudad.',
    price: 200000,
    location: 'Madrid',
    image:['https://static.fotocasa.es/images/ads/863b27aa-5bb4-4346-9a8c-66149b5321cc?rule=web_948x542','https://static.fotocasa.es/images/ads/5182cc08-ee6b-41b9-92ab-e9b5218d8023?rule=web_482x269','https://static.fotocasa.es/images/ads/497345c2-bae7-4ea2-be7a-9ced6d394cb8?rule=web_482x269'],
    promotor: 'Arnau Houses - La teva Casa aprop',
    metros:95,
    baños:2,
    habitaciones:3
  },
  {
    id: 2,
   
    title: 'Apartamento en el centro',
    description: 'Moderno apartamento en el corazón de la ciudad.',
    price: 200000,
    location: 'Madrid',
    image:['https://static.fotocasa.es/images/ads/863b27aa-5bb4-4346-9a8c-66149b5321cc?rule=web_948x542','https://static.fotocasa.es/images/ads/5182cc08-ee6b-41b9-92ab-e9b5218d8023?rule=web_482x269','https://static.fotocasa.es/images/ads/497345c2-bae7-4ea2-be7a-9ced6d394cb8?rule=web_482x269'],
    promotor: 'Arnau Houses - La teva Casa aprop',
    metros:95,
    baños:2,
    habitaciones:3
  },
  {
    id: 2,
   
    title: 'Apartamento en el centro',
    description: 'Moderno apartamento en el corazón de la ciudad.',
    price: 200000,
    location: 'Madrid',
    image:['https://static.fotocasa.es/images/ads/863b27aa-5bb4-4346-9a8c-66149b5321cc?rule=web_948x542','https://static.fotocasa.es/images/ads/5182cc08-ee6b-41b9-92ab-e9b5218d8023?rule=web_482x269','https://static.fotocasa.es/images/ads/497345c2-bae7-4ea2-be7a-9ced6d394cb8?rule=web_482x269'],
    promotor: 'Arnau Houses - La teva Casa aprop',
    metros:95,
    baños:2,
    habitaciones:3
  },
  {
    id: 2,
  
    title: 'Apartamento en el centro',
    description: 'Moderno apartamento en el corazón de la ciudad.',
    price: 200000,
    location: 'Madrid',
    image:['https://static.fotocasa.es/images/ads/863b27aa-5bb4-4346-9a8c-66149b5321cc?rule=web_948x542','https://static.fotocasa.es/images/ads/5182cc08-ee6b-41b9-92ab-e9b5218d8023?rule=web_482x269','https://static.fotocasa.es/images/ads/497345c2-bae7-4ea2-be7a-9ced6d394cb8?rule=web_482x269'],
    promotor: 'Arnau Houses - La teva Casa aprop',
    metros:95,
    baños:2,
    habitaciones:3
  },
  {
    id: 2,

    title: 'Apartamento en el centro',
    description: 'Moderno apartamento en el corazón de la ciudad.',
    price: 200000,
    location: 'Madrid',
    image:['https://static.fotocasa.es/images/ads/863b27aa-5bb4-4346-9a8c-66149b5321cc?rule=web_948x542','https://static.fotocasa.es/images/ads/5182cc08-ee6b-41b9-92ab-e9b5218d8023?rule=web_482x269','https://static.fotocasa.es/images/ads/497345c2-bae7-4ea2-be7a-9ced6d394cb8?rule=web_482x269'],
    promotor: 'Arnau Houses - La teva Casa aprop',
    metros:95,
    baños:2,
    habitaciones:3
  },
  
  // Puedes agregar más anuncios aquí
];

return (
  <div className="app">
    <div className="house-listings">
      {houses.map(house => (
        <HouseListing key={house.id} house={house} />
      ))}
    </div>
  </div>
);
};



export default App
