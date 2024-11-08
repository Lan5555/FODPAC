import { CSSProperties } from "react"

interface props{
    children:React.ReactNode,
    onPressed?:()=> void, 
    className?:any
    type?:'button' | 'submit' | 'reset',
    disabled?:boolean
}
const ElevatedButton:React.FC<props> = ({children,onPressed, className='',
     type='button', disabled =false}) => {
    const style:CSSProperties = {
        padding:'8px',
        borderRadius:'5px',
        boxShadow:'0 0 1.5px black',
        textAlign:'center',
        fontSize:'10pt',
        
    }
    return(
        <button onClick={onPressed} style={style}
         className={`button ${className}`} type={type} disabled={disabled}>
            {children}
        </button>
    );
}

export default ElevatedButton;