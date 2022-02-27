import { Link } from "react-router-dom";

const Header = ()=>{
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/contacts">Contacts</Link>
      </nav>
    </div>
  );
}


export default Header