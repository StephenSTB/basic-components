"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("../Basic.css");
const Vars_1 = require("../vars/Vars");
require("./Textarea.css");
const Textarea = (props) => {
    return (props.value !== undefined ?
        (0, jsx_runtime_1.jsx)("div", Object.assign({ id: props.container_id, className: `textarea-container-${Vars_1.sizes.includes(props.size) ? props.size : "medium"}-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}-${props.border !== false ? "border" : "borderless"}` }, { children: (0, jsx_runtime_1.jsx)("textarea", { id: props.textarea_id, className: `textarea-${Vars_1.sizes.includes(props.size) ? props.size : "medium"}-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}`, value: props.value, readOnly: true }) }))
        : (0, jsx_runtime_1.jsx)("div", Object.assign({ id: props.container_id, className: `textarea-container-${Vars_1.sizes.includes(props.size) ? props.size : "medium"}-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}-${props.border !== false ? "border" : "borderless"}` }, { children: (0, jsx_runtime_1.jsx)("textarea", { id: props.textarea_id, className: `textarea-${Vars_1.sizes.includes(props.size) ? props.size : "medium"}-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}`, placeholder: props.placeholder, onChange: props.onChange }) })));
};
exports.Textarea = Textarea;
