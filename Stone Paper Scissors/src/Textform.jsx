import React, { useState } from 'react'

export default function Textform(props) {
    const [text, settext] = useState("Enter text Here");

    const handleUp = () => {
        console.log("Convert to upper case button was Clicked");
        let newText = text.toUpperCase();
        settext(newText);
    }

    const handleLo = () => {
        console.log("Convert to upper case button was Clicked");
        let newText = text.toLowerCase();
        settext(newText);
    }

    const handleOnChange = (event) => {
        settext(event.target.value);
    }
    return (


        <div className="container">
            <div className='container'>
                <div className="txtarea">
                    <h1>{props.heading} </h1>
                    <div className="mb-3">
                        <label htmlFor="txtarea" className="form-label" >Example textarea</label>
                        <textarea className="form-control" id="txtarea" rows="5" value={text} onChange={handleOnChange}></textarea>
                    </div>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUp}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLo}>Convert to LowererCase</button>
            </div>

            <div className="container">
                  <h1>Your text Summary is</h1>

                  <p>Above Paragraph have {text.split(" ").length} words  and {text.length} characters </p>
                  <p>{0.008 * text.split(" ").length} Minutes reading</p>

                  <h3>Preview</h3>
                   <p>{text}</p>
            </div>
        </div>



    )
}
