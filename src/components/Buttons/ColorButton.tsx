interface Iprops {
  className?: string;
  style?: React.CSSProperties; // ✅ Add this
}

const ColorButton = ({ className, style }: Iprops) => {
  return (
    <button
      className={`border border-slate-600 rounded-full w-6 h-6 hover:scale-110 transition-transform duration-200 cursor-pointer ${className}`}
      style={style}
    ></button>
  );
};

export default ColorButton;
