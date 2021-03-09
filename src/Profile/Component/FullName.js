import React from "react";
import ProfilPhoto from "./Photo";

export default function FullName(props) {
  return (
    <div>
      <ProfilPhoto />
      <h1> {props.name}</h1>
    </div>
  );
}
