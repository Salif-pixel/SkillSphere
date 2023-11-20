import "../style/Header.css"
import Login from "./Login";
import logo from "../assets/logo.png"
function Header() {
  return (
    <div className="Header container-fluid  ">
      
      <div className=" Header-nav d-flex  w-100">
        <img src={logo} className="logo"/>
        <div className="Header-items d-flex flex-direction-row">
            <div className="Header-item1"><h3>S'identifier</h3></div>
            <div className="Header-item2"><h3>S'inscrire</h3></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
