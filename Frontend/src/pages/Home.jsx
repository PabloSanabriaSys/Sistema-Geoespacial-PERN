import backgroundImage from '/imagenes/FarmaYapaLogoFondo.png';

export default function Home() {

    return (
        <div className=" bg-local bg-cover opacity-35 bg-center h-screen  py-20  " 
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto' }}>
            
        </div>
    )
}