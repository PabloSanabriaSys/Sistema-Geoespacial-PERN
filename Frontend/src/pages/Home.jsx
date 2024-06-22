import { useEffect, useState } from 'react';
import Bar from '../components/Chartjs/Bar';
import Line from '../components/Chartjs/Line';
import Pie from '../components/Chartjs/Pie';
import VerticalBar from '../components/Chartjs/VerticalBar';
import InformationCards from '../components/ui/InformationCards';
import backgroundImage from '/imagenes/FarmaYapaLogoFondo.png';
import { getTotalData } from '../api/client';
import ViewLoading from './ViewLoading';
import Title from '../components/ui/Title';
import Heatmap from '../components/Chartjs/Heatmap';

export default function Home() {

    const [data, setData] = useState(null)
    const totalData = async () => {
        try {
            const response = await getTotalData()
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.log('Error al obtener ubicaciones de clientes', error);
        }
    }

    useEffect(() => {
        totalData();
    }, []);

    return (
        <div className='sm:px-10 lg:px-20 py-10 px-2 '>
            <Title title="REPORTES" subtitle="" titleSize="sm:text-6xl text-4xl" subtitleSize="sm:text-6xl text-4xl" />

            <div className=" bg-local bg-cover opacity-35 bg-center h-screen  py-20  absolute"
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto' }}>
            </div>
            {
                data === null
                    ? <ViewLoading></ViewLoading>
                    :
                    <>
                        <InformationCards clientes={data.total_clients} municipios={data.total_municipios} cantones={data.total_cantones} manzanos={data.total_manzanos} />

                        <div className='grid sm:grid-cols-2 grid-cols-1 space gap-4 mt-10'>
                        <Heatmap/>

                            <Bar records={[data.m_cochabamba, data.m_quillacollo, data.m_sacaba, data.m_colcapirhua]} />
                            <Pie records={[data.d_cochabamba, data.d_santacruz, data.d_lapaz]} />
                    
                            <Line  records={data.clientes_registrados_por_mes} />

                        </div>
                    </>
            }


        </div>

    )
}