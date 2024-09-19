import { Children } from "react";

const Button = ({ 
     secondary,
     className, 
     children, 
     click, 
    } : {
        secondary?: boolean, // secondary button
        className?: string,
        children: React.ReactNode,
        click?: () => void | Promise<void>,
    }) => {
    return (
        <button 
        className={ secondary ? 
            className + ' w-full border border-rose-800 rounded-md p-2 text-rose-800 font-semibold hover:bg-rose-800 hover:text-amber-50' 
            : 
            className + ' w-full bg-rose-700 rounded-md p-2 text-amber-50 font-semibold hover:bg-rose-800' } 
        type="submit" 
        onClick={ click }
        > 
        { children } 
        </button>
    );
};

export default Button;
