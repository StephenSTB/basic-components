import { sizes, themes } from "../vars/Vars";
import "../Basic.css"
import "./Dropdown.css"

interface DropdownProps{
    theme?: string;
    size: string
    options?: Array<JSX.Element>;
    onChange?: any;
    id?: string
}

export const Dropdown = (props: DropdownProps) =>{
    return (
        <select id={props.id} className={`dropdown-${sizes.includes(props.size) ? props.size : "medium"}-${themes.includes(props.theme as string) ? props.theme : "light"}`} onChange={props.onChange}>{props.options}</select>
    )
}