import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Sohaila Mohamed</p>
      </div>
    </footer>
  );
}

export default Footer;
