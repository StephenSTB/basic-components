import { sizes } from "../vars/Vars";
import "../Basic.css";
import "./Icon.css";

interface IconProps{
    src: any;
    size?: string;
    className?: string;
    id?: string;
    round?: boolean
}

export const Icon = (props: IconProps) =>{

    return(
        <img id={props.id} className={props.className !== undefined ? props.className : `icon-${sizes.includes(props.size as string) ? props.size : "small"}${props.round === false ? "": "-round"}`} src={props.src} alt=""/>
    );
    
}