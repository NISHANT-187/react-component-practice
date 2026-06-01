function Header({ title }) {
  // Props: we receive title from App and display it in the header
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
