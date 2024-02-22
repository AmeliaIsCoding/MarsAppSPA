import React from 'react';
import './Info.css';

type InfoProps = {title: string, para1: string, para2: string, imgSrc: string}

function Info(props: InfoProps) {
  return (
    <div className="Info">
        <p>
          <header className="Info-title"> {props.title} </header>
          <p  className="Info-para">{props.para1}</p>
          <p className="Info-para">{props.para2}</p>
          <img src={props.imgSrc} className="Info-image" alt="infoImage" />
        </p>
    </div>
  );
}

export default Info;
