import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase function was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length > 0)
            props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase function was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length > 0)
            props.showAlert("Converted to LowerCase!", "success");
    }

    const handleInvClick = () => {
        // console.log("InverseCase function was clicked " + text);
        let i = 0;
        let newText = '';
        while (i < text.length) {
            let s = text.charAt(i);
            if (s === s.toUpperCase()) {
                s = s.toLowerCase();
            }
            else {
                s = s.toUpperCase();
            }
            newText = newText + s;
            i++;
        }
        setText(newText);
        if (text.length > 0)
            props.showAlert("Cases are inverted!", "success");
    }

    const handleCopyClick = () => {
        // console.log("Copy function was clicked " + text);
        navigator.clipboard.writeText(text);
        if (text.length > 0)
            props.showAlert("Copied text to clipboard!", "success");
    }

    const handleClearClick = () => {
        // console.log("Clear function was clicked " + text);
        let newText = "";
        setText(newText);
        if (text.length > 0)
            props.showAlert("Cleared text!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#0c478b', color: props.mode === 'light' ? 'black' : 'white'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleInvClick}>Inverse Case</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-outline-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h3>Your Text Summary</h3>
            <p>{text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters</p>
            <p>{text.length > 0 ? 0.008 * text.split(" ").length : 0} minutes reading</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : 'Type something in textbox above to preview here'}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}