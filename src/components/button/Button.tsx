import { transacting_black, transacting_green } from "@sb-labs/images";
import { Icon } from "../icon/Icon";
import {sizes, themes, colors} from "../vars/Vars"
import "../Basic.css";

import "./Button.css"
interface ButtonProps{
    text?: string;
    icon?: any;
    size: string;
    onClick?: any;
    transacting?: boolean;
    color?: string;
    id?: string;
    theme?: string;
}

export const Button = (props : ButtonProps) =>{
    return(
        <button id={props.id} 
            className={`button-${sizes.includes(props.size) ? props.size : sizes[3]}-${props.theme !== undefined ? themes.includes(props.theme) ? props.theme : colors[0] : colors.includes(props.color as string) ? props.color : colors[0]}`} onClick={props.onClick}>
            {props.transacting ? <Icon className="button-transacting-icon" src={props.theme === undefined ? transacting_black : props.theme === themes[1] ? transacting_green : transacting_black} size={sizes[2]}/> : props.icon}{props.text !== "" ? <b>{props.text}</b> : <></>}
        </button>
    );
}