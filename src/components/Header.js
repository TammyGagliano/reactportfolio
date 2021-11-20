import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerImg">
        <img src={`${process.env.PUBLIC_URL}/images/header.jpg`} alt="" 
        style=
        {{
          display: "flex",
          justifyContent: "center",
          alignItems: "left",
        }}/>
      </div>
    </div>
  );
};

export default Header;
