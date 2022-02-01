import React, { FC } from "react";
import { Button } from "antd";
import logo from "./logo.svg";
import "./App.css";



// const App: FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

const App: FC = () => (
  <div className="App">
    <Button type="primary"
    onClick={()=>console.log("click")}>Button</Button>
  </div>
);

export default App;
