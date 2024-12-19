"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Vars_1 = require("../vars/Vars");
require("../Basic.css");
require("./Icon.css");
const Icon = (props) => {
    return ((0, jsx_runtime_1.jsx)("img", { id: props.id, className: props.className !== undefined ? props.className : `icon-${Vars_1.sizes.includes(props.size) ? props.size : "small"}${props.round === false ? "" : "-round"}`, src: props.src, alt: "" }));
};
exports.Icon = Icon;
