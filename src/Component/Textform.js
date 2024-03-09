import React,{useState} from 'react'
export default function Textform(props) {
    const [text,setText]=useState('Enter text here')
const handleUpClick=()=>{
 
    const newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase","success")
}
const handleLoClick=()=>{

    const newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase","success")

}
const handleClearClick=()=>{
    const newText=''
    setText(newText)
}
const handleOnChanged=(event)=>{
    console.log('Text Changed')
    setText(event.target.value)
}
const handleCopy=()=>{
        navigator.clipboard.writeText(text)

}
const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
}
  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3" >
  <textarea className="form-control my-3"  value={text} onChange={handleOnChanged} style={{background: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8" />
  <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
  <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
  <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
  <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
  <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Handle Extra Spaces</button>


</div>
</div>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text Summary </h2>
    <p>{text.split(" ").length-1} words and {text.length} character</p>
    <p>{0.008*text.split(" ").length} reading minutes</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}
