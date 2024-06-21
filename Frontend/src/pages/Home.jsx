import Bar from '../components/Chartjs/Bar';
import Line from '../components/Chartjs/Line';
import Pie from '../components/Chartjs/Pie';
import VerticalBar from '../components/Chartjs/VerticalBar';
import backgroundImage from '/imagenes/FarmaYapaLogoFondo.png';

export default function Home() {

    return (
        <>
            <div className=" bg-local bg-cover opacity-35 bg-center h-screen  py-20  absolute"
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto' }}>
            </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 space gap-4 mt-10'>
                <Bar />
                <Pie />
                <VerticalBar/>
                <Line/>

            </div>
        </>

    )
}