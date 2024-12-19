import { Icon } from "../icon/Icon"
import {themes, sizes} from "../vars/Vars"
import "../Basic.css"
import "./Input.css"

interface InputProps{
    size?: string;
    placeholder?: string;
    onChange?: any;
    onKeyDown?: any;
    button?: boolean;
    icon?: any;
    onClick?: any;
    theme?: string;
    inputType?: string;
    id?:string;
}

export const Input = (props : InputProps) =>{
    return (
        <div id={props.id} className={`input-${sizes.includes(props.size as string) ? props.size : "width"}-${props.theme !== "dark" ? "light" : "dark"}`}>
            <input className={`input-bar-${themes.includes(props.theme as string) ? props.theme : "light"}`} placeholder={props.placeholder} onChange={props.onChange} onKeyDown={props.onKeyDown} type={props.inputType}/>
            {
                (props.button !== undefined && props.icon !== undefined) &&
                <button className={`input-button-${themes.includes(props.theme as string) ? props.theme : "light"}`} onClick={props.onClick}> 
                    <Icon src={props.icon} size="mini"/>
                </button>
            }
        </div>
    );
}