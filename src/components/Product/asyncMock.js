import tabla01 from './Imagenes/tabla01.jpg';
import tabla02 from './Imagenes/tabla02.jpg';
import tabla03 from './Imagenes/tabla03.jpg';
import tabla04 from './Imagenes/tabla04.jpg';
import bota01 from './Imagenes/bota01.jpg';
import bota02 from './Imagenes/bota02.jpg';
import bota03 from './Imagenes/bota03.jpg';
import bota04 from './Imagenes/bota04.jpg';
import fijacion01 from './Imagenes/fijacion01.jpg';
import fijacion02 from './Imagenes/fijacion02.jpg';
import fijacion03 from './Imagenes/fijacion03.jpg';
import fijacion04 from './Imagenes/fijacion04.jpg';
import goggle01 from './Imagenes/goggles01.jpg';
import goggle02 from './Imagenes/goggles02.jpg';
import goggle03 from './Imagenes/goggles03.jpg';
import goggle04 from './Imagenes/goggles04.jpg';


const Products = [
    {
    id: 'tabla01',
    name: 'Tabla SUPER',
    stock: 5,
    price: 100,
    image:[tabla01],
    category: 'tabla',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'tabla02',
    name: 'Tabla MEGA',
    stock: 5,
    price: 200,
    image:[tabla02],
    category: 'tabla',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'tabla03',
    name: 'Tabla ULTRA',
    stock: 5,
    price: 300,
    image:[tabla03],
    category: 'tabla',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'tabla04',
    name: 'Tabla 4EVER',
    stock: 2,
    price: 400,
    image:[tabla04],
    category: 'tabla',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'bota01',
    name: 'Bota SUPER',
    stock: 5,
    price: 100,
    image:[bota01],
    category: 'bota',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'bota02',
    name: 'Bota MEGA',
    stock: 5,
    price: 200,
    image:[bota02],
    category: 'bota',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'bota03',
    name: 'Bota ULTRA',
    stock: 5,
    price: 300,
    image:[bota03],
    category: 'bota',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'bota04',
    name: 'Bota 4EVER',
    stock: 2,
    price: 400,
    image:[bota04],
    category: 'bota',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'goggle01',
    name: 'Goggle SUPER',
    stock: 5,
    price: 100,
    image:[goggle01],
    category: 'goggle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'goggle02',
    name: 'Goggle MEGA',
    stock: 5,
    price: 200,
    image:[goggle02],
    category: 'goggle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'goggle03',
    name: 'Goggle ULTRA',
    stock: 5,
    price: 300,
    image:[goggle03],
    category: 'goggle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'goggle04',
    name: 'Goggle 4EVER',
    stock: 2,
    price: 400,
    image:[goggle04],
    category: 'goggle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'fijacion01',
    name: 'Fijacion SUPER',
    stock: 5,
    price: 100,
    image:[fijacion01],
    category: 'fijacion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'fijacion02',
    name: 'Fijacion MEGA',
    stock: 5,
    price: 200,
    image:[fijacion02],
    category: 'fijacion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'fijacion03',
    name: 'Fijacion ULTRA',
    stock: 5,
    price: 300,
    image:[fijacion03],
    category: 'fijacion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
    id: 'fijacion04',
    name: 'Fijacion 4EVER',
    stock: 2,
    price: 400,
    image:[fijacion04],
    category: 'fijacion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
];

export default Products;



const DELAY = 200

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Products)
    }, DELAY)
  })
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Products.find(prod => prod.id === id))
      }, DELAY)
    })
};
  
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products.filter(prod => prod.category === category))
        }, DELAY)
    })
};