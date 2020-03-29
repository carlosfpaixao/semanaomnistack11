import React from 'react';

//export default function Header(title) {
//export default function Header(props) {
export default function Header({ title, children }) {
  return (
    <header>
      {/* <h1>{props.title}</h1> */}
      <h1>{title}</h1>
      {/* <h1>{props.children}</h1> */}
      <h1>{children}</h1>
    </header>
  );
}
