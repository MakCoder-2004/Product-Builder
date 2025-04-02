interface SizeButtonProps {
  size: string;
  className?: string;
}

const SizeButton = ({ size, className }: SizeButtonProps) => {
  return (
    <span className={`inline-flex items-center justify-center border border-gray-300 rounded ${className}`}>
      {size}
    </span>
  );
};
export default SizeButton;
