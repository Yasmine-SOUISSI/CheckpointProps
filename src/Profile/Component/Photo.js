import React from "react";

import image from "../image/imageprof.jpg"


export default function ProfilPhoto(props) {
  return (
    <>

     <img src={image} alt="PhotoProfil"
     width="220" className="img"/>
      {props.children}
    </>
  );
}
