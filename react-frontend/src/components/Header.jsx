import "../styles/header.css";

function Header() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header className="header">
      <h2>My React App</h2>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}

export default Header;
