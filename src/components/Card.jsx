function Card({ name, description }) {
  // Props: card content (name + description) comes from parent component
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}

export default Card;
