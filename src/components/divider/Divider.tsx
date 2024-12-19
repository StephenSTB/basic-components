import {sizes, themes} from "../vars/Vars"
import "../Basic.css"
import "./Divider.css"

interface DividerProps{
    theme?: string;
    size?: string;
    id?: string;
}

export const Divider = (props : DividerProps) =>{
    return (
        <div id={props.id} className={`divider-${sizes.includes(props.size as string) ? props.size : sizes[sizes.length - 1]}-${themes.includes(props.theme as string) ? props.theme : themes[0]}`} />
    )
}