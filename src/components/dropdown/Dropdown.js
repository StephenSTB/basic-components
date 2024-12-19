"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Vars_1 = require("../vars/Vars");
require("../Basic.css");
require("./Dropdown.css");
const Dropdown = (props) => {
    return ((0, jsx_runtime_1.jsx)("select", Object.assign({ id: props.id, className: `dropdown-${Vars_1.sizes.includes(props.size) ? props.size : "medium"}-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}`, onChange: props.onChange }, { children: props.options })));
};
exports.Dropdown = Dropdown;
