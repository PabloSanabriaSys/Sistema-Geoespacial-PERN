import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';

const productsData = [
  { id: 1, name: 'NEXCARE MICROPORE COLOR PIEL', image: '/imagenes/productos/Nexcare.jpg', category: 'Dermatológicos', rating: 4, price: 15.55, inventoryStatus: 'DISPONIBLE' },
  { id: 2, name: 'AROCARBOL POLVO', image: '/imagenes/productos/arocarbol.jpeg', category: 'Alivio del Dolor', rating: 4.5, price: 2.5, inventoryStatus: 'ULTIMAS UNIDADES' },
  { id: 3, name: 'AMOXICILINA 500 MG', image: '/imagenes/productos/amoxicilina.jpeg', category: 'Alivio del Dolor', rating: 4, price: 3.99, inventoryStatus: 'DISPONIBLE' },
  { id: 4, name: 'ALERGIN 4MG', image: '/imagenes/productos/alerginTableta.jpg', category: 'Salud Respiratoria', rating: 3, price: 5.60, inventoryStatus: 'AGOTADO' },
  { id: 5, name: 'ACEITE PARA BEBÉ', image: '/imagenes/productos/aceitebb.jpeg', category: 'Dermatológicos', rating: 4, price: 15.5, inventoryStatus: 'ULTIMAS UNIDADES' },
  { id: 6, name: 'ACEITE DE COCO', image: '/imagenes/productos/aceiteCoco.png', category: 'Dermatológicos', rating: 4.5, price: 24.99, inventoryStatus: 'AGOTADO' },
  { id: 7, name: '4 DERM', image: '/imagenes/productos/4derm.jpg', category: 'Dermatológicos', rating: 2, price: 1.5, inventoryStatus: 'DISPONIBLE' },
  { id: 8, name: 'APETITOL INFANTIL JARABE 120 ML', image: '/imagenes/productos/apetitol.png', category: 'Vitaminas, Minerales y Sumplementos', rating: 3, price: 19.99, inventoryStatus: 'ULTIMAS UNIDADES' },
  { id: 9, name: 'ASEPXIA CARBON DETOX', image: '/imagenes/productos/asepxia.jpeg', category: 'Dermatológicos', rating: 3.5, price: 34.99, inventoryStatus: 'ULTIMAS UNIDADES' },
  { id: 10, name: 'ASPIRINA 500MG', image: '/imagenes/productos/aspirina.jpeg', category: 'Alivio del Dolor', rating: 1, price: 2.55, inventoryStatus: 'AGOTADO' },
  { id: 11, name: 'BRONCOLYPTUS UNGUENTO', image: '/imagenes/productos/bronco.jpeg', category: 'Alivio del Dolor', rating: 3, price: 9.99, inventoryStatus: 'DISPONIBLE' },
  { id: 12, name: 'CALMADOL  ', image: '/imagenes/productos/calmadol.jpeg', category: 'Alivio del Dolor', rating: 5, price: 2.20, inventoryStatus: 'ULTIMAS UNIDADES' },
  // Agrega más productos según sea necesario
];
 function ProductsClient({updateCart }) {
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState('grid');
  
    useEffect(() => {
        // Simulación de carga de productos
        setProducts(productsData);
    }, []);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'DISPONIBLE':
                return 'success';
            case 'ULTIMAS UNIDADES':
                return 'warning';
            case 'AGOTADO':
                return 'danger';
            default:
                return null;
        }
    };
    
  
    const listItem = (product, index) => {
      return (
        <div className="grid-cols-12" key={product.id}>
          <div className='flex flex-col md:flex-row xl:items-start p-4 gap-4 border-t-2 ' >
              <img className="w-40 sm:size-20 xl:size-36 shadow-xl block xl:block mx-auto border-2 rounded-xl " src={product.image} alt={product.name} />
              <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                  <div className='flex flex-col items-center sm:items-start gap-3'>
                    <div className="text-2xl font-bold ">{product.name}</div>
                    <Rating value={product.rating} readOnly cancel={false}></Rating>
                    <div className="flex items-center gap-3">                      
                        <span className="flex items-center gap-2">
                          <i className="pi pi-tag"></i>
                          <span className="font-semibold">{product.category}</span>
                        </span>
                        <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    </div>
                  </div>
                  
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                      <span className="text-2xl font-semibold">Bs. {product.price}</span>
                      <Button icon="pi pi-shopping-cart" className="rounded-full" disabled={product.inventoryStatus === 'AGOTADO'} ></Button>
                  </div>
              </div>
          </div>
        </div>
          
      );
  };
  const gridItem = (product) => {
    return (
      <div className="p-4 border rounded-lg" key={product.id}  >
        <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{product.category}</span>
            </div>
            <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
        </div>
        <div className="flex flex-col items-center gap-3 py-5" >
          <img className=" mx-auto sm:size-48 lg:size-60 drop-shadow-lg rounded-lg" src={product.image} alt={product.name} />
          <div className="text-2xl font-bold">{product.name}</div>
          <Rating value={product.rating} readOnly cancel={false}></Rating>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">Bs. {product.price}</span>
          <Button icon="pi pi-shopping-cart" className="rounded-full" disabled={product.inventoryStatus === 'AGOTADO'}></Button>
        </div>
      </div>  
    );
  };
  const itemTemplate = (product, layout, index) => {
    if (!product) {
        return;
    }

    if (layout === 'list') return listItem(product, index);
    else if (layout === 'grid') return gridItem(product);
  };

  const listTemplate = (products, layout) => {
      return <div className={classNames({'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 p-4 space-x-4 space-y-4': layout === 'grid'}, {'p-4 border rounded-lg': layout === 'list'})}>
        {products.map((product, index) => itemTemplate(product, layout, index))}
      </div>;
  };

  const header = () => {
      return (
          <div className="flex justify-end">
              <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
          </div>
          
      );
  };

  return (
    <div className="card ">
      <div ></div>
      <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
    </div>
  )
}
 
export default ProductsClient