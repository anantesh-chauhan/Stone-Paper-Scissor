import React, { useState } from 'react'
import './body.css'
export default function Body() {

    const [myStyle, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })
    
    const [btnTxt,setbtnTxt]=useState('Enable Dark Mode');
    const toggle = () => {
        if (myStyle.color === 'black') {
            setStyle(
                {
                    color: 'white',
                    backgroundColor: 'black',
                    border: '1px solid white',
                }
            ) 
            setbtnTxt('Enable Light Mode');
        }
        else{
            setStyle(
                {
                    color: 'black',
                    backgroundColor: 'white',
                    border: '1px solid red',
                }
            ) 
            setbtnTxt('Enable Dark Mode');
        }
    }

    const [cs,scs] = useState(0);

    const [us,sus] = useState(0);

    const [t,nt] = useState(0);

    const [cc,ncc] = useState("First Select Your Choice");

    const [result,nresult] = useState("Select your choice");

    const [uc,suc] = useState('Select your choice From above');

    const getResultS = ()=>{
        let  x=Math.random()*3 +1 ;
        x=Math.floor(x);
        suc("Stone");
        if(x==1){
            ncc("Stone");
            nresult("Tie");
            nt(t+1);
        }
        else if(x==2){
            ncc("Paper")
            nresult("Computer Won");
            scs(cs+1);
        }
        else{
            ncc("Scissors")
            nresult("You Won");
            sus(us+1);
        }

    }


    const getResultP = ()=>{
        let  x=Math.random()*3 +1 ;
        x=Math.floor(x);
        suc("Paper");
        if(x==1){
            ncc("Stone");
            nresult("You Won");
            sus(us+1);
        }
        else if(x==2){
            ncc("Paper")
            nresult("Tie");
            nt(t+1);
        }
        else{
            ncc("Scissors")
            nresult("Computer Won");
            scs(cs+1);
        }
    }

    const getResultSc = ()=>{
        let  x=Math.random()*3 +1 ;
        x=Math.floor(x);
        suc("Scissors");
        if(x==1){
            ncc("Stone");
            nresult("Computer Won");
            scs(cs+1);
        }
        else if(x==2){
            ncc("Paper")
            nresult("You Won");
            sus(us+1);
        }
        else{
            ncc("Scissors")
            nresult("Tie");
            nt(t+1);
        }
    }
    return (
        <div className="container my-2">
            <div className="container my-5" style={myStyle}>
                <button type="button" onClick={toggle} class="btn btn-primary my-3">{btnTxt}</button>
            </div>
            <div className="action" style={myStyle}>
                <button className='btn btn-container '  onClick={getResultS}> <img src="https://media.istockphoto.com/id/1067431158/photo/gemstones-collection-jewelry-set.jpg?s=612x612&w=0&k=20&c=EWHN9XrWwlcjz0yk9JrBu28uzZFjN7KfIUcAPsSb-i0=" alt="Stone" /> </button>
                <button className='btn btn-container '  onClick={getResultP}> <img  src="https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Paper" /> </button>
                <button className='btn btn-container '  onClick={getResultSc}> <img src="https://thumbs.dreamstime.com/b/scissors-top-view-w-path-446167.jpg" alt="Scissors" /> </button>
            </div>

            <div className="result" style={myStyle}>
                 <h1>Your Choice : {uc}</h1>
                 <h1>Computer Choice : {cc}</h1>
                 <h1>Result is : {result}</h1>
                <h1>Score</h1>

                <h2>Computer : {cs} </h2>
                <h2>User : {us} </h2>
                <h2>Tie : {t}</h2>
            </div>

        </div>
    )
}
