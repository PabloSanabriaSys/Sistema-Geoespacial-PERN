import React, { useState } from 'react'
import { Galleria } from 'primereact/galleria';
import { useEffect } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Fieldset } from 'primereact/fieldset';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { Rating } from 'primereact/rating';
function HomeClient() {
  {/*ESTO ES DE LA GALERIA DE FOTOS */}
  const imagePaths = [
    '/imagenes/HomeClientes/farma1.jpeg',
    '/imagenes/HomeClientes/farma2.jpeg',
    '/imagenes/HomeClientes/farma3.jpeg',
    '/imagenes/HomeClientes/farma4.jpeg',
    '/imagenes/HomeClientes/farma5.jpeg',
    '/imagenes/HomeClientes/farma6.jpeg',
    '/imagenes/HomeClientes/farma7.jpeg',
    '/imagenes/HomeClientes/farma8.jpeg',
    '/imagenes/HomeClientes/farma9.jpeg',
    // Agrega más rutas de imágenes según sea necesario
  ]; 
  const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(imagePaths.map(path => ({ itemImageSrc: path, thumbnailImageSrc: path, alt: 'Image' })));
    }, [imagePaths]);
    const responsiveOptions = [
      {
          breakpoint: '991px',
          numVisible: 4
      },
      {
          breakpoint: '767px',
          numVisible: 3
      },
      {
          breakpoint: '575px',
          numVisible: 1
      }
    ];
    const itemTemplate = (item) => {
      return <img src={item.itemImageSrc} alt={item.alt} className="max-w-96 h-96 block" />;
    }
  
    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} className=" max-w-96 h-16 block" />;
    }

  {/*ESTO ES DEL MENU QUE ESTA ARRIBA */}
  const items = [
    { label: 'Nuestra historia', icon: 'pi pi-home', command: () => scrollToSection('historia')},
    { label: 'Productos', icon: 'pi pi-cart-plus', command: () => scrollToSection('productos')},
    { label: 'Comentarios y Reseñas', icon: 'pi pi-comments' , command: () => scrollToSection('comentarios')},
    
  ];
  
  {/*ESTO ES DEL ACORDEON */}
  const [tabs] = useState([
    {
        header: 'Nacimiento de un sueño:',
        children: 'En el corazón de Cochabamba, Bolivia, Don José Yapa, un farmacéutico apasionado por la salud y el bienestar, abre las puertas de la Farmacia Yapa. Con un espíritu emprendedor y un compromiso inquebrantable, Don José buscaba ofrecer a su comunidad acceso a medicamentos de calidad y un servicio excepcional.',
    },
    {
        header: 'Crecimiento y expansión:',
        children: 'La dedicación y la calidad de Farmacia Yapa la convierten en un referente en la ciudad. Don José, junto a su familia, amplía el catálogo de productos, incluyendo no solo medicamentos sino también productos de parafarmacia y cosmética. La farmacia se convierte en un lugar de confianza para los habitantes de Cochabamba, donde encuentran asesoramiento profesional y un ambiente cálido y acogedor.',
    },
    {
        header: 'Adaptándose a los tiempos: ',
        children: 'Con la llegada de nuevas tecnologías y la evolución del sector farmacéutico, Farmacia Yapa se adapta a los cambios sin perder su esencia. Incorpora sistemas informáticos para optimizar la gestión y atención al cliente, y amplía su horario de atención para mayor comodidad. La farmacia se convierte en un punto de encuentro para la comunidad, donde se ofrecen charlas informativas, campañas de salud y otros eventos para promover el bienestar.',
    },
    {
      header: 'Un legado familiar:',
      children: 'La segunda generación de la familia Yapa toma las riendas de la farmacia, manteniendo vivo el espíritu emprendedor y el compromiso con la salud. Se implementan nuevas estrategias de marketing para llegar a un público más amplio, y se amplía la oferta de productos y servicios. La farmacia se convierte en un referente de la innovación en el sector farmacéutico boliviano.',
    },
    {
      header: 'La era digital: ',
      children: 'Farmacia Yapa se adentra en el mundo digital, creando una página web y presencia en redes sociales para ofrecer una experiencia de compra más cómoda y accesible. Se implementa un sistema de compra online con entrega a domicilio, y se ofrecen servicios de telemedicina para brindar atención médica a distancia. La farmacia se convierte en un punto de referencia para la salud en la era digital.',
    },
  ]);
  
  const createDynamicTabs = () => {
    return tabs.map((tab, i) => {
        return (
            <AccordionTab key={tab.header} header={<span className="text-blue-500 dark:text-blue-400">{tab.header}</span>} disabled={tab.disabled} svg>
               <p className="m-0">  {tab.children} </p>
            </AccordionTab>
        );
    });
  };

{/*ESTO ES PARA QUE SE DESPLACE HACIA UNA SECCION*/ }
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const windowHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;
      const scrollPosition = sectionTop - (windowHeight / 2) + (section.clientHeight / 2);
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };
{/*ESTO ES DEL CARRUSEL DE PRODUCTOS */}

const productsData = [
  { id: 1, name: 'NEXCARE MICROPORE COLOR PIEL', image: '/imagenes/productos/Nexcare.jpg', rating: 4, price: 15.55, inventoryStatus: 'DISPONIBLE' },
  { id: 2, name: 'AROCARBOL POLVO', image: '/imagenes/productos/arocarbol.jpeg',  rating: 4.5, price: 2.5, inventoryStatus: 'ULTIMAS UNIDADES' },
  { id: 3, name: 'AMOXICILINA 500 MG', image: '/imagenes/productos/amoxicilina.jpeg',rating: 4, price: 3.99, inventoryStatus: 'DISPONIBLE' },
  { id: 4, name: 'ALERGIN 4MG', image: '/imagenes/productos/alerginTableta.jpg',rating: 3, price: 5.60, inventoryStatus: 'AGOTADO' },
  { id: 5, name: 'ACEITE PARA BEBÉ', image: '/imagenes/productos/aceitebb.jpeg', rating: 4, price: 15.5, inventoryStatus: 'ULTIMAS UNIDADES' },
  { id: 6, name: 'ACEITE DE COCO', image: '/imagenes/productos/aceiteCoco.png',  rating: 4.5, price: 24.99, inventoryStatus: 'AGOTADO' },
  { id: 7, name: '4 DERM', image: '/imagenes/productos/4derm.jpg', rating: 2, price: 1.5, inventoryStatus: 'DISPONIBLE' },
  { id: 8, name: 'APETITOL INFANTIL JARABE 120 ML', image: '/imagenes/productos/apetitol.png', rating: 3, price: 19.99, inventoryStatus: 'ULTIMAS UNIDADES' },
  { id: 9, name: 'ASEPXIA CARBON DETOX', image: '/imagenes/productos/asepxia.jpeg',  rating: 3.5, price: 34.99, inventoryStatus: 'ULTIMAS UNIDADES' },
  { id: 10, name: 'ASPIRINA 500MG', image: '/imagenes/productos/aspirina.jpeg',  rating: 1, price: 2.55, inventoryStatus: 'AGOTADO' },
  { id: 11, name: 'BRONCOLYPTUS UNGUENTO', image: '/imagenes/productos/bronco.jpeg',  rating: 3, price: 9.99, inventoryStatus: 'DISPONIBLE' },
  { id: 12, name: 'CALMADOL  ', image: '/imagenes/productos/calmadol.jpeg',  rating: 5, price: 2.20, inventoryStatus: 'ULTIMAS UNIDADES' },
  
];
  const [products, setProducts] = useState([]);
  const responsiveOptionsCarrusel = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
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

  useEffect(() => {
      setProducts(productsData);
  }, []);

  const productTemplate = (product) => {
      return (
          <div className="border border-gray-300 rounded m-2 text-center py-5 px-3 h-80 ">
              <div className="mb-3 flex justify-center">
                  <img src={product.image} alt={product.name} className="w-20 shadow-md" />
              </div>
              <div>
                  <h3 className="mb-1">{product.name}</h3>
                  <h3 className="mt-0 mb-3">Bs. {product.price}</h3>
                  <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                  
                  <div className="mt-5 flex flex-wrap gap-2 justify-center">
                    <Rating value={product.rating} readOnly cancel={false}></Rating>
                  </div>
              </div>
          </div>
      );
  };
{/*ESTO ES DE LOS COMENTARIOS */}

const comments = [
  { id:1, avatar: "./imagenes/HomeClientes/clientes/ricaldes.jpg",author: "Jheyson Ricaldes",rating: 4, comment: "He sido cliente de Farmacia Yapa durante muchos años y siempre me han brindado una atención excepcional. El personal es amable, conocedor y siempre dispuesto a ayudar. Además, tienen una amplia gama de productos de alta calidad a precios razonables. Recomiendo encarecidamente Farmacia Yapa a cualquiera que busque una farmacia confiable y de calidad."},
  { id:2, avatar: "./imagenes/HomeClientes/clientes/atora.jpg", author: "Jose Atora",rating: 5, comment: "Estoy muy impresionado con la variedad de productos que ofrece Farmacia Yapa. He podido encontrar todo lo que necesito, desde medicamentos recetados hasta productos de parafarmacia y cosmética. Además, sus precios son muy competitivos, lo que me ha permitido ahorrar dinero en mis compras. Sin duda, Farmacia Yapa se ha convertido en mi farmacia de referencia."},
  { id:3, avatar: "./imagenes/HomeClientes/clientes/brandon.jpg",author: "Brandon Perez",rating: 4, comment: "La farmacia Yapa me ofrece una experiencia de compra cómoda y segura. Su local es amplio, limpio y ordenado, y el personal siempre está atento para ayudarme a encontrar lo que busco. Además, ofrecen la opción de compra online con entrega a domicilio, lo que me resulta muy útil cuando no tengo tiempo de ir a la farmacia personalmente. En general, estoy muy satisfecho con el servicio de Farmacia Yapa."},
  { id:4, avatar: "./imagenes/HomeClientes/clientes/camba.jpg",author: "Sergio Uriona",rating: 3, comment: "Farmacia Yapa es mi farmacia de confianza para toda la familia. Siempre encuentro todo lo que necesito para el cuidado de mi salud y la de mis hijos. Además, el personal es muy amable y paciente con los niños, lo que hace que las visitas a la farmacia sean una experiencia agradable para todos. Recomiendo encarecidamente Farmacia Yapa a todas las familias."},
  { id:5, avatar: "./imagenes/HomeClientes/clientes/coca.jpg",author: "Rafael Coca",rating: 4, comment: "Me encanta que Farmacia Yapa esté comprometida con la salud y el bienestar de la comunidad. Ofrecen charlas informativas, campañas de salud y otros eventos gratuitos para promover hábitos saludables. Además, colaboran con diferentes organizaciones locales para apoyar a las personas más necesitadas. Sin duda, Farmacia Yapa es una farmacia con un gran corazón."},
  { id:6, avatar: "./imagenes/HomeClientes/clientes/erika.jpg",author: "Erika Mamani",rating: 2, comment: "En general, estoy satisfecho con el servicio de Farmacia Yapa. Sin embargo, a veces hay largas colas en la caja, lo que puede ser un poco frustrante. Sería bueno que implementaran un sistema de atención más rápido, como por ejemplo cajas automáticas o más personal en las horas pico."},
  { id:7, avatar: "./imagenes/HomeClientes/clientes/fabri.jpg",author: "Fabricio Balderrama",rating: 1, comment: "En algunas ocasiones, he tenido problemas para encontrar algunos productos específicos en Farmacia Yapa. Me gustaría que ampliaran aún más su surtido de productos para poder encontrar todo lo que necesito en un solo lugar"},
  { id:8, avatar: "./imagenes/HomeClientes/clientes/lucho.jpg",author: "Lucio Aguirre",rating: 2, comment: "La página web de Farmacia Yapa es funcional, pero creo que podría mejorar en algunos aspectos. La navegación podría ser más intuitiva y el diseño podría ser más moderno. Además, sería útil que se pudiera realizar la compra online de forma más rápida y sencilla."},
  { id:9, avatar: "./imagenes/HomeClientes/clientes/onti.jpg",author: "Rodrigo Ontiveros",rating: 3, comment: "El horario de atención de Farmacia Yapa es un poco limitado para mí, ya que cierran temprano los fines de semana. Sería bueno que ampliaran su horario para poder atender a los clientes en un horario más flexible."},

];


{/*ESTO ESE MUESTRA EN LA INTERFAZ*/ }
  return (
    <>
      <div className="card">
        <TabMenu model={items} />
      </div>
      
      <h1 className='font-mono text-3xl text-center p-4'>Historia de Farmacia Yapa: Un viaje a través del tiempo</h1>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div  id="historia" className=" w-xl p-6 border-slate-800 rounded-xl ">
            <div className=" max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl dark:bg-slate-700 ">
                <Accordion>{createDynamicTabs()}</Accordion>
            </div>
        </div>
        <div className="container mx-auto">
            <div className="card max-w-7xl  mx-auto border-2 border-slate-800 bg-gradient-to-l from-slate-400 rounded-2xl">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} className="max-w-5xl h-xl mx-auto" 
                    item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
            </div>
        </div>
            
      </div>
      <h1 className='font-mono text-3xl  p-6 text-center'>Tu salud, nuestro enfoque: <br/>Descubre productos para tu bienestar.</h1>
      <div  id="productos" className=" w-xl p-6  border-slate-800 rounded-xl">
          <div className="max-w-7xl mx-auto rounded-xl shadow-md overflow-hidden md:max-w-7xl ">
            <Carousel value={products} numVisible={5} numScroll={4} responsiveOptionsCarrusel={responsiveOptionsCarrusel} itemTemplate={productTemplate} />
          </div>
      </div> 
      <h1 id="comentarios" className='font-mono text-3xl p-6 text-center'>¡Lo que nuestros clientes opinan!<br/> Descubre por qué nos aman.</h1>
      <div   className=" w-xl p-6 space-x-3 space-y-3 border-slate-800 rounded-xl grid grid-cols-1 md:grid-cols-3">
          {comments.map((comment) => (
            <Fieldset key={comment.id} legend={
              <div className="flex items-center gap-2">
                  <Avatar image={comment.avatar} shape="circle" />
                  <span className="font-bold">{comment.author}</span>
                  <Rating value={comment.rating} readOnly cancel={false}></Rating>
              </div>
            } toggleable>
                <p className="m-0">{comment.comment}</p>
                
            </Fieldset>
          ))}
      </div>       
    </>
  )
}

export default HomeClient;