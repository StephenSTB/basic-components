"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWeb3 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = require("../button/Button");
const web3_1 = __importDefault(require("web3"));
require("./get-web3.css");
const NetworkData_1 = require("@sb-labs/web3-data/networks/NetworkData");
const GetWeb3 = (props) => {
    const [connect, setConnect] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const connectWeb3 = () => __awaiter(void 0, void 0, void 0, function* () {
            console.log("connectWeb3");
            setConnect(false);
            if (window.ethereum) {
                if (!connect) {
                    return;
                }
                window.ethereum.on('accountsChanged', () => __awaiter(void 0, void 0, void 0, function* () {
                    // Handle the new accounts, or lack thereof.
                    // "accounts" will always be an array, but it can be empty.
                    window.location.reload();
                    //setState(state =>({...state, connect: true}))
                    //setConnect(true);
                }));
                window.ethereum.on('chainChanged', () => __awaiter(void 0, void 0, void 0, function* () {
                    // Handle the new chain.
                    // Correctly handling chain changes can be complicated.
                    // We recommend reloading the page unless you have good reason not to.
                    window.location.reload();
                    //setState(state => ({...state, connect: true}))
                    //setConnect(true)
                }));
                try {
                    yield window.ethereum.request({ method: 'eth_requestAccounts' });
                }
                catch (error) {
                    console.error("error", error);
                    return;
                }
                const web3 = new web3_1.default(window.ethereum);
                const connected = props.networkIds.includes(yield web3.eth.getChainId());
                //const getChainId = await web3.eth.getChainId()
                //console.log("get chain:", getChainId);
                //console.log(connected)
                const chainId = "0x" + Number(props.default_network).toString(16);
                //console.log(chainId)
                if (!connected) {
                    try {
                        console.log("here");
                        yield window.ethereum.request({
                            "method": "wallet_switchEthereumChain",
                            "params": [{ "chainId": chainId }],
                        });
                    }
                    catch (swtichError) {
                        let error = swtichError;
                        if (error.code === 4902) {
                            console.log("error");
                            try {
                                window.ethereum.request({
                                    method: "wallet_addEthereumChain",
                                    params: [
                                        NetworkData_1.networkData[props.default_network.toString()]
                                    ],
                                });
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                    }
                }
                props.getWeb3(web3);
            }
        });
        connectWeb3();
    }, [connect]);
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, { text: props.text, size: "large", onClick: () => setConnect(true), theme: props.theme }));
};
exports.GetWeb3 = GetWeb3;
