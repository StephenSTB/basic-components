"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const images_1 = require("@sb-labs/images");
const Icon_1 = require("../icon/Icon");
const Vars_1 = require("../vars/Vars");
require("../Basic.css");
require("./Button.css");
const Button = (props) => {
    return ((0, jsx_runtime_1.jsxs)("button", Object.assign({ id: props.id, className: `button-${Vars_1.sizes.includes(props.size) ? props.size : Vars_1.sizes[3]}-${props.theme !== undefined ? Vars_1.themes.includes(props.theme) ? props.theme : Vars_1.colors[0] : Vars_1.colors.includes(props.color) ? props.color : Vars_1.colors[0]}`, onClick: props.onClick }, { children: [props.transacting ? (0, jsx_runtime_1.jsx)(Icon_1.Icon, { className: "button-transacting-icon", src: props.theme === undefined ? images_1.transacting_black : props.theme === Vars_1.themes[1] ? images_1.transacting_green : images_1.transacting_black, size: Vars_1.sizes[2] }) : props.icon, props.text !== "" ? (0, jsx_runtime_1.jsx)("b", { children: props.text }) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})] })));
};
exports.Button = Button;
