const Button = ({ children }) => {
  return (
    <button
      className="
      text-white
       font-medium
      p-3 
      bg-wine-red 
      rounded-2xl
      font-sans
      transform hover:scale-110
     "
    >
      {children}
    </button>
  );
};

export default Button;
