import { themes } from "../vars/Vars";
import "../Basic.css"
import "./Toggle.css"

interface ToggleProps{
    onClick?: any;
    theme?: string;
    active: boolean;
    id?: string;
}

export const Toggle = (props : ToggleProps) =>{
    return(
        <div id={props.id} className={`toggle-${themes.includes(props.theme as string) ? props.theme : "light"}`} onClick={props.onClick}>
            {props.active ? <div></div>  : <></>}
            <button className={`toggle-button-${themes.includes(props.theme as string ) ? props.theme : "light"}`}/> 
            {!props.active ? <div></div>  : <></>}
        </div>
    );
}