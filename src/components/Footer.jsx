function Footer({ name }) {
  // Props: we receive the student name from App
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{year} | {name}</p>
    </footer>
  );
}

export default Footer;
