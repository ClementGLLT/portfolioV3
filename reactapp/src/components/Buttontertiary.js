import React from 'react';
import './Buttontertiary.css';
import '../styles/fundamentals.css';
import { useState } from 'react';


function Buttontertiary(props) {


return (
        <button className='container'>
        <div className='textColorPrimary body'>
            <text className={props.textOrientation}>{props.label}</text>
        </div>
        <div className="underLineButton">
        </div>


    </button> 
)
}

export default Buttontertiary;