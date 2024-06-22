
export default function Card({ bgColorFrom = "from-green-200", bgColorTo = "to-green-100", borderColor = "border-green-600", iconBgColor = "bg-green-600", textColor = "text-gray-600", revenue = "$3249", revenueChangeColor = "text-green-500", Icon = "pi pi-check", title = "Total Revenue" }) {
    return (
        <div className={`bg-gradient-to-b ${bgColorFrom} ${bgColorTo} border-b-4 ${borderColor} rounded-lg shadow-xl p-5`}>
            <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                    <div className={`rounded-full p-5 ${iconBgColor}`}>
                        <i className={`font-bold uppercase ${Icon}`} style={{ color: 'white',fontSize: '1.5rem' }}/>
                    </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                    <h2 className={`font-bold uppercase ${textColor}`}>{title}</h2>
                    <p className="font-bold text-3xl text-black">
                        {revenue}
                    </p>
                </div>
            </div>
        </div>
    );
}