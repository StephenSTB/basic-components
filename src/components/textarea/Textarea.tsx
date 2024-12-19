import "../Basic.css"
import { sizes, themes } from "../vars/Vars";
import "./Textarea.css"

interface TextareaProps{
    size?: string;
    border?: boolean;
    theme?: string;
    value?: string;
    placeholder?: string;
    buttons?: any;
    container_id?: string;
    textarea_id?: string;
    onChange?: any;
}

export const Textarea = (props : TextareaProps) =>{
    return(
        props.value !== undefined ? 
            <div id={props.container_id} className={`textarea-container-${sizes.includes(props.size as string) ? props.size : "medium"}-${themes.includes(props.theme as string) ? props.theme : "light"}-${props.border !== false ? "border" : "borderless"}`}>
                <textarea id={props.textarea_id} className={`textarea-${sizes.includes(props.size as string) ? props.size : "medium"}-${themes.includes(props.theme as string) ? props.theme : "light"}`} value={props.value} readOnly />
            </div>
        : <div id={props.container_id} className={`textarea-container-${sizes.includes(props.size as string) ? props.size : "medium"}-${themes.includes(props.theme as string) ? props.theme : "light"}-${props.border !== false ? "border" : "borderless"}`}>
            <textarea id={props.textarea_id} className={`textarea-${sizes.includes(props.size as string) ? props.size : "medium"}-${themes.includes(props.theme as string) ? props.theme : "light"}`} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    );       
}