"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Vars_1 = require("../vars/Vars");
require("../Basic.css");
require("./Toggle.css");
const Toggle = (props) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ id: props.id, className: `toggle-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}`, onClick: props.onClick }, { children: [props.active ? (0, jsx_runtime_1.jsx)("div", {}) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), (0, jsx_runtime_1.jsx)("button", { className: `toggle-button-${Vars_1.themes.includes(props.theme) ? props.theme : "light"}` }), !props.active ? (0, jsx_runtime_1.jsx)("div", {}) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})] })));
};
exports.Toggle = Toggle;
