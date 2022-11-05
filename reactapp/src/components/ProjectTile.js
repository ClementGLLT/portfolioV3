import React from 'react';
import './ProjectTile.css';
import '../styles/fundamentals.css';
import { Button, useRef } from 'react';
import Tags from '../components/Tags';
import {useInView} from 'framer-motion';
 


function ProjectTile(props) {

    const animation = useRef(null);
    const isInView = useInView(animation);

    var tagList = [];
  // eslint-disable-next-line array-callback-return
  props.tile.tags.map((tag) => {
    tagList.push(
      <Tags
        tag={tag}
      />
    );
  });

  function onclick() {
    props.clickModalProject();
    props.setInfoModal(props.tile);
  }


return (
        <div className='tileMainContainer' ref={animation} onClick={onclick}
        style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
            <div className='tileMainLeftContainer'>
                <div className='tileLeftTitleContainer'>
                    <div className='h1 number'>{props.tile.number}.</div>
                    <div className='h3 title'>{props.tile.title}</div>
                </div>
                <div className='body textColorG1 description'>{props.tile.description}</div>
                <div className='tagsContainer'>{tagList}</div>
            </div>
            
                <div style={{backgroundImage: `url(${props.tile.urlTile})` }} resizeMode="cover" className="photo"> </div>
        </div> 
)
}

export default ProjectTile;