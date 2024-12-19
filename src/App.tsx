import { useState } from 'react';
import './App.css';

import Web3 from 'web3';

import { Icon, Button, Input, Popup, Toggle, Textarea, Divider, Text, Dropdown, GetWeb3 } from "./components"

import { flame, user, search, ethereum_black, ethereum_green, ethereum_white, copy, settings_black, settings_green, close } from "@sb-labs/images"

function App() {

  const [popupState1, setPopupState1] = useState(false)
  const [popupState2, setPopupState2] = useState(false)

  const [toggleState1, setToggleState1] = useState(false)
  const [toggleState2, setToggleState2] = useState(false)

  const [textPopState, setTextPopState] = useState(false)

  const [typeToggle, setTypeToggle] =  useState(false);
  const [type, setType] = useState("light")

  const [button_state, setButtonState] = useState(true);
  const [button_icon, setButtonIcon] = useState(settings_black);

  const [button_type, setButtonType] = useState("light")

  const [connected_text, setConnectedText] = useState("Connect")

  const options = [<option>Test1</option>,<option>Test2</option>, <option>Test3</option>]

  

  const activatePopup = (pop: number) =>{
    //console.log("activate popup")
    pop === 1 ? setPopupState1(!popupState1) : setPopupState2(!popupState2)
  }
  
  const activateToggle = (tog : number) =>{
    //console.log("activate toggle")
    tog === 1 ? setToggleState1(!toggleState1) : setToggleState2(!toggleState2)
  }

  const textPop = () =>{
    setTextPopState(!textPopState)
  }

  const toggleType = () =>{
    let tog = !typeToggle
    let type = tog ? "dark" : "light";
    setType(type)
    setTypeToggle(tog)
  }

  const changeIcon = () =>{

    let state = !button_state
    
    setButtonState(state)
    //console.log(state)
    let _icon = state ? settings_black : settings_green;
    setButtonIcon(_icon)
    let buttonT = state ?  "light" : "dark"
    setButtonType(buttonT);
  }

  const getWeb3 = (web3: Web3) =>{
    console.log("get web3")
    console.log(web3.eth.currentProvider)
    setConnectedText("Connected")
  }

  return (
    <div className="App">
      <div className='small-box'>
        <Button size='icon' icon={<Icon src="following"/>}  theme='dark'/>
      </div>
      <Dropdown options={options} theme="dark" size='medium'/>
    
      <Text theme="dark" text="This is dark text."/>
      <Icon src={ button_icon } size="mini" />
      <Button size='medium' text="testing" icon={<Icon size='mini' src = {button_icon} />} theme={button_type} onClick={changeIcon}/>
      <Toggle active={typeToggle} theme={type} onClick={toggleType}/>
    
      
      <Icon src={ user } size="mini" id="icon-id"/>
      <Icon src={ user } size="small" id="icon-id"/>
      <Icon src={ user } size="medium" id="icon-id"/>
      <Icon src={ user } size="large" id="icon-id"/>
      
        <Button size='icon' color="black" icon={<Icon src={flame} size="small"/>} />
        <Button size='medium' color="green" icon={<Icon src={ethereum_white} size="mini"/>} text="Tester"/>
        <Button size='large' color="teal" icon={<Icon src={user} size="small"/>} text="Create Button"/>
        <Button size='medium' color='purple' transacting={true} text="test"/>
        <Button size='medium' color='white' icon={<Icon src={ethereum_black} size="mini"/>} text='Testing'/>
        <Button size='medium' color='black' icon={<Icon src={ethereum_green} size="mini"/>} text='Testing' />
        <Button size='large' color='red' text='Testing3' />

  
        <Input size="small"/>
        <Input size="small" button={true} icon={close} placeholder="Placeholder..."/>
        <Input size='medium' button={true} icon={search} theme={type}/>
        <Input size='medium' button={true} icon={flame} theme="dark"/>
        <div style={{width: "90vw"}}><Input /></div>
        
        <Popup text='Copied!' offset={{bottom: "45px", right: "-35px"}} display={popupState1} element={<Button size='medium' color='purple' text='Click Me!' onClick={() => activatePopup(1)}/>}/>
        <Popup text='Copied Dark! longer text then normal' offset={{bottom: "45px", right: "-5px"}} theme="dark" display={popupState2} element={<Button size='icon' icon={<Icon src={flame} size="small"/>} color='black' onClick={() => activatePopup(2)}/>}/>
        
        <Toggle active={toggleState1} onClick={() =>activateToggle(1)} />
        <Toggle active={toggleState2} onClick={() => activateToggle(2)} theme="dark"/>

        <Textarea size="mini" border={true} value="base forward fluid lemon doctor cupboard script sell cluster oven else document"/>
        <Textarea size="mini" border={true} theme="dark"/>

        <Textarea size="small" border={true} value="base forward fluid lemon doctor cupboard script sell cluster oven else document"/>
        <Textarea size="small" border={true} theme="dark" value="base forward fluid lemon doctor cupboard script sell cluster oven else document"/>
        <Textarea size="medium" border={true} />
        <Textarea size="medium" border={false} placeholder="Enter Message..."/>
        <Textarea size="medium" border={true} theme="dark"/>
        <Textarea size="medium" border={false} theme="dark" value="base forward fluid lemon doctor cupboard script sell cluster oven else document" />

        <div id= "textarea-section">
          <Textarea size="medium" border={true} theme="dark" value="base forward fluid lemon doctor cupboard script sell cluster oven else document"/>
          <Popup id="textarea-pop" text="Copied!" offset={{bottom: "35px", right: "0px"}} theme="dark" display={textPopState} 
            element={<Button icon={<Icon src={copy} size="mini"/>} color="black" size="icon" onClick={textPop}/>}  />
        </div>

        <div id="textarea-section">
          <Textarea size="medium" border={true} theme={"dark"} placeholder="Enter Message..."/>
        </div>

        <Divider />
        <Divider theme="dark"/>

        <GetWeb3 text={connected_text} networkIds = {[1337, 1101]} default_network={1337} getWeb3 = {getWeb3}></GetWeb3>
    </div>
  );
}

export default App;
