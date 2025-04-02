interface ColorButtonProps {
  color: string;
  className?: string;
}

const ColorButton = ({ color, className }: ColorButtonProps) => {
  return (
    <div 
      className={`inline-block rounded-full border border-gray-300 ${className}`}
      style={{ backgroundColor: color }}
    />
  );
};

export default ColorButton;
