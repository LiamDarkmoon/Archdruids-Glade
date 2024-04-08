import { Children } from "react";

const Bttn = ({
     className, 
     click, 
     children 
    } : {
        className: string,
        click: () => void,
        children: string,
    }) => {
    return (
        <button className={ className + ' bttn' } type="submit" onClick={ click }> { children } </button>
    );
};

export default Bttn;
