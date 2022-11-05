import React from 'react';
import './Tags.css';
import '../styles/fundamentals.css';
import { useState } from 'react';


function Tags(props) {


return (
        
            <text className='tags annotation textColorG1' >{props.tag.name}</text>
        
)
}

export default Tags;