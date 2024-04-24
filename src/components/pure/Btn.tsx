import { Children } from "react";

const Button = ({ 
     secondary,
     className, 
     children, 
     click, 
    } : {
        secondary?: boolean, // secondary button
        className?: string,
        children: string,
        click?: () => void | Promise<void>,
    }) => {
    return (
        <button 
        className={ secondary ? 
            className + ' w-full border border-red-800 rounded-md p-2 text-red-800 font-semibold hover:bg-red-800 hover:text-white' 
            : 
            className + ' w-full bg-red-700 rounded-md p-2 text-white font-semibold hover:bg-red-800' } 
        type="submit" 
        onClick={ click }
        > 
        { children } 
        </button>
    );
};

export default Button;
