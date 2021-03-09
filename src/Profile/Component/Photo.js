import React from "react";

import image from "../images/imageprof.jpg";


export default function ProfilPhoto() {
  return (
    <>

     <img src={image} alt="PhotoProfil"
     width="220" className="img"/>
      {props.children}
    </>
  );
}
