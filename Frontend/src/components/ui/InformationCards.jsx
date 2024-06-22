import Card from "./Card";

export default function InformationCards({clientes,municipios,cantones,manzanos}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card title="CLIENTES TOTALES" revenue={clientes}  Icon="pi pi-user"/>
            <Card title="MUNICIPIOS TOTALES" revenue={municipios}  Icon="pi pi-map" bgColorFrom="from-blue-200" bgColorTo="to-blue-100" borderColor="border-blue-600" iconBgColor="bg-blue-600" textColor="text-blue-600"  revenueChangeColor="text-blue-500" />
            <Card title="CANTONES TOTALES" revenue={cantones}  Icon="pi pi-heart-fill" bgColorFrom="from-red-200" bgColorTo="to-red-100" borderColor="border-red-600" iconBgColor="bg-red-600" textColor="text-red-600" revenueChangeColor="text-red-500"  />
            <Card title="MANZANOS TOTALES" revenue={manzanos}  Icon="pi pi-home" bgColorFrom="from-purple-200" bgColorTo="to-purple-100" borderColor="border-purple-600" iconBgColor="bg-purple-600" textColor="text-purple-600"  revenueChangeColor="text-purple-500"/>

        </div>
    );
}