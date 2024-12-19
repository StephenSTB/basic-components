"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Vars_1 = require("../vars/Vars");
require("../Basic.css");
require("./Divider.css");
const Divider = (props) => {
    return ((0, jsx_runtime_1.jsx)("div", { id: props.id, className: `divider-${Vars_1.sizes.includes(props.size) ? props.size : Vars_1.sizes[Vars_1.sizes.length - 1]}-${Vars_1.themes.includes(props.theme) ? props.theme : Vars_1.themes[0]}` }));
};
exports.Divider = Divider;
