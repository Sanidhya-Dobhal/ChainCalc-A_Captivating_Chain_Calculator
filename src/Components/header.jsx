import img from "../assets/calculator.png";
function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        width: 300,
        alignItems: "center",
        margin: "48px auto 0 auto",
      }}
    >
      <img src={img} style={{ marginRight: 20, width: 38, height: 38 }} />
      <h1 style={{ fontWeight: 700, fontSize: 28 }}>ChainCalc.com</h1>
    </header>
  );
}

export default Header;
