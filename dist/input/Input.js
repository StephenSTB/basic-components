"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = require("../icon/Icon");
const Vars_1 = require("../vars/Vars");
require("../Basic.css");
require("./Input.css");
const Input = (props) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ id: props.id, className: `input-${Vars_1.sizes.includes(props.size) ? props.size : "width"}-${props.theme !== "dark" ? "light" : "dark"}` }, { children: [(0, jsx_runtime_1.jsx)("input", { className: `input-bar-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}`, placeholder: props.placeholder, onChange: props.onChange, onKeyDown: props.onKeyDown, type: props.inputType }), (props.button !== undefined && props.icon !== undefined) &&
                (0, jsx_runtime_1.jsx)("button", Object.assign({ className: `input-button-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}`, onClick: props.onClick }, { children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { src: props.icon, size: "mini" }) }))] })));
};
exports.Input = Input;
