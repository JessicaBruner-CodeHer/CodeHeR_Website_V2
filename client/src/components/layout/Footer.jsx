import logo from "../../assets/LogoMain.png";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <img src={logo} alt="CodeHeR LLC" style={styles.logo} />

        <p style={styles.text}>
          © {new Date().getFullYear()} CodeHeR LLC. All rights reserved.
        </p>

        <p style={styles.email}>
          info@codeherllc.com
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111827",
    color: "#ffffff",
    marginTop: "80px"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 24px",
    textAlign: "center"
  },
  logo: {
    height: "48px",
    marginBottom: "16px"
  },
  text: {
    margin: "8px 0",
    fontSize: "14px"
  },
  email: {
    marginTop: "8px",
    fontSize: "14px",
    opacity: 0.8
  }
};

export default Footer;