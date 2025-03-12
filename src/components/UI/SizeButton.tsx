interface Iprops {
  children: React.ReactNode;
  className?: string;
}
const SizeButton = ({ children, className }: Iprops) => {
  return (
    <button
      className={` ${className} border-2 border-gray-400 px-2 font-Montserrat text-lg text-gray-500 hover:bg-gray-400 hover:text-white transition-colors duration-200`}
    >
      {children}
    </button>
  );
};

export default SizeButton;
