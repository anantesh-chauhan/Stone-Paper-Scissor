import React, { useState } from 'react'

export default function Text(props) {

    const [text, setText] = useState("Hello");

    const handleLo = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange =(event)=>{
       setText(event.target.value);
    }
    return (
        <div>
            

            <div className='container'>
                <div className="txtarea">
                    {/* <h1>{props.heading}</h1> */}
                    <h1>{props.heading} </h1>
                    <div className="mb-3">
                        <label htmlFor="txtarea" className="form-label" >Example textarea</label>
                        <textarea className="form-control" id="txtarea" rows="5" value={text} onChange={handleOnChange}></textarea>
                    </div>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUp}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLo}>Convert to LowererCase</button>
                <button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
            </div>

            <div className="container my-3" >
                <h1>Summary</h1>
                <p>Given Text has <b>{text.split(" ").length} Words</b> </p>
                <p>Given Text has <b>{text.length} Characters</b> </p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}
