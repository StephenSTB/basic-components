import { useEffect, useState } from "react"

import { Button } from "../button/Button";
import Web3 from "web3"

import "./get-web3.css"

import { networkData } from "@sb-labs/web3-data/networks/NetworkData"

interface GetWeb3Props{
	theme?: string;
    text: string;
    default_network: number;
    networkIds: number[]
    getWeb3(web3: Web3): any; 
}

declare global {
    interface Window{
      ethereum?:any
    }
}

interface SwitchError{
	code: number
}

export const GetWeb3 = (props: GetWeb3Props) => {

    const [connect, setConnect] = useState(false)

    useEffect(() =>{
        
        const connectWeb3 = async () =>{
			console.log("connectWeb3")
            setConnect(false)
            if (window.ethereum) {
                if(!connect){
                    return
                }

				window.ethereum.on('accountsChanged', async () => {
					// Handle the new accounts, or lack thereof.
					// "accounts" will always be an array, but it can be empty.
					window.location.reload()
					//setState(state =>({...state, connect: true}))
					
					//setConnect(true);
				});

				window.ethereum.on('chainChanged', async () => {
					// Handle the new chain.
					// Correctly handling chain changes can be complicated.
					// We recommend reloading the page unless you have good reason not to.
					window.location.reload();
					//setState(state => ({...state, connect: true}))
					//setConnect(true)
					
				});

                try{
					await window.ethereum.request({ method: 'eth_requestAccounts' });
				}
				catch(error){
					console.error("error", error);
					return;
				}

                const web3 = new Web3(window.ethereum);

                const connected = props.networkIds.includes(await web3.eth.getChainId() as unknown as number)
                
				//const getChainId = await web3.eth.getChainId()

				//console.log("get chain:", getChainId);

                //console.log(connected)

                const chainId = "0x" + Number(props.default_network).toString(16)
                //console.log(chainId)

                if(!connected){
					
					try{
						console.log("here")
						await window.ethereum.request( {
							"method": "wallet_switchEthereumChain",
							"params": [{ "chainId": chainId}],
						});
						
					}
					catch(swtichError){
						let error = swtichError as SwitchError
						if(error.code === 4902){
                            console.log("error")
							try{
							window.ethereum.request({
								method: "wallet_addEthereumChain",
								params: [
                                    networkData[props.default_network.toString() as keyof typeof networkData]
                                ],
							});
							}
							catch(error){
							console.log(error)
							}
						}
					}
                }
                props.getWeb3(web3)
            }
        }

        connectWeb3()

    }, [connect])

    return(
        <Button text={props.text} size="large" onClick={() => setConnect(true)} theme={props.theme}/>
    );
}