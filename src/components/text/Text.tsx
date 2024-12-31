import { themes } from "../vars/Vars";
import "../Basic.css"
import "./Text.css"

interface TextProps{
    theme: string;
    id?: string;
    text?: string;
    color?: string;
    onClick?: any;
}


export const Text = (props : TextProps) =>{
    return (
        <div id={props.id} className={`text-${themes.includes(props.theme) ? props.theme : "light"}`} style={{color: props.color}} onClick={props.onClick}>{props.text}</div>
    )
}