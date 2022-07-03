import { React } from 'react';

const Dash = (props) => {
    
    return (
        <div className={`w-[40px] h-[3px] ${props.color}`}></div>
    );
}

export default Dash;