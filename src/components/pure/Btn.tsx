import { Children } from "react";

const Button = ({
     className, 
     children, 
     click, 
    } : {
        className?: string,
        children: string,
        click: () => void,
    }) => {
    return (
        <button className={ className + ' bttn' } type="submit" onClick={ click }> { children } </button>
    );
};

export default Button;
