interface ButtonProps { 
    tittle: string; 
    variant?: "primary" | "outline"; 
    className?: string; 
    onClick?: () => void; 
} 
 
export const Button: React.FC<ButtonProps> = ({ 
    tittle, 
    variant = "primary", 
    className, 
}) => { 
 const baseStyle = 
   "px-10 py-3 rounded font-medium transition-all duration-200"; 
 const variantStyle = 
   variant === "primary" 
     ? "bg-red-900 text-white hover:bg-red-800" 
     : "border border-red-900 text-red-900 hover:bg-red-100"; 
 return ( 
   <button className={`${baseStyle} ${variantStyle} ${className}`}> 
     {tittle} 
   </button> 
 ); 
}; 
 
export default Button; 