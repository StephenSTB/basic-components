"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Vars_1 = require("../vars/Vars");
require("../Basic.css");
require("./Text.css");
const Text = (props) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ id: props.id, className: `text-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}`, style: { color: props.color }, onClick: props.onClick }, { children: props.text })));
};
exports.Text = Text;
