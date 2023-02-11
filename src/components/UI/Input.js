import classes from './Input.module.css';

const Input = props =>{
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* {...props.input} - to specjalny zapis, który gwarantuje, że jeśli w obiekcie input będzie jakis atrybut, stanowiący cechę inputa np. type="text", to zostanie dodany do tego tagu  */}
         
        <input {...props.input}/>
    </div>
};

export default Input;