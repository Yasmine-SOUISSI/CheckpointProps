import React from "react";

export default function FullName(props) {
  return (
    <div>
      {props.children}
      <h1> {props.name}</h1>
    </div>
  );
}
