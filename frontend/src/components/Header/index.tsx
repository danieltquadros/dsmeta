import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmetaLogoContainer">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          {"Desenvolvido por "}
          <a href="https://github.com/danieltquadros">Daniel T.Quadros</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
