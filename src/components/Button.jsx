import { useState } from "react";

function Button({ text }) {
  // State: count stores button click count
  const [count, setCount] = useState(0);

  // Event handling: runs every time user clicks button
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <section className="counter-section">
      <button className="btn" onClick={handleClick}>{text}</button>
      <p>Button clicked: <strong>{count}</strong> times</p>
    </section>
  );
}

export default Button;
