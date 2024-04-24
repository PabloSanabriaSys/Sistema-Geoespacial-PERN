
export default function Title({title, subtitle, titleSize, subtitleSize }) {
  return (
    <div className="mb-10">
      <h1 className={`text-center font-bold ${titleSize}`}>
        {title}
        <span className={`block ${subtitleSize} `}>
        {subtitle} 
        </span>
      </h1>
    </div>
  );
}
