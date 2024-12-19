"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Vars_1 = require("../vars/Vars");
require("../Basic.css");
require("./Popup.css");
const Popup = (props) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ id: props.id, className: props.text.length < 30 ? "popup-container-small" : "popup-container-medium" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: props.display ? `popup-display-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}` : "popup-hide", style: { bottom: props.offset.bottom === undefined ? "45px" : props.offset.bottom, right: props.offset.right === undefined ? "0px" : props.offset.right } }, { children: [(0, jsx_runtime_1.jsx)("b", { children: props.text }), " "] })), " ", (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "popup-element" }, { children: props.element }))] })));
};
exports.Popup = Popup;
