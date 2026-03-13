import logo from "../../assets/LogoMain.png";

function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="CodeHeR LLC" style={styles.logo} />
        </div>

        <nav style={styles.nav}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    width: "100%",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    height: "42px"
  },
  nav: {
    display: "flex",
    gap: "24px"
  },
  link: {
    textDecoration: "none",
    color: "#1f2937",
    fontWeight: 500
  }
};

export default Navbar;