import { themes } from "../vars/Vars"
import "../Basic.css";
import "./Popup.css";

interface PopupProps{
    theme?: string;
    text: string;
    display: boolean;
    element?: JSX.Element,
    id?: string,
    offset?: any
}

export const Popup = (props: PopupProps) =>{

    return(
        <div id={props.id}  className={props.text.length < 30 ? "popup-container-small" : "popup-container-medium"}> 
            <div className={props.display ? `popup-display-${themes.includes(props.theme as string) ? props.theme : "light"}` : "popup-hide"} 
                style={{bottom: props.offset.bottom === undefined ? "45px" : props.offset.bottom, right: props.offset.right === undefined ? "0px" : props.offset.right}}> 
                <b>{props.text}</b> </div> <div className="popup-element">{props.element}
            </div> 
        </div>
    );
}