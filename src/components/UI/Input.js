import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) =>{
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* {...props.input} - to specjalny zapis, który gwarantuje, że jeśli w obiekcie input będzie jakis atrybut, stanowiący cechę inputa np. type="text", to zostanie dodany do tego tagu  */}
         
        <input ref={ref} {...props.input}/>
    </div>
});

export default Input;