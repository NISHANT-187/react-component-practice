import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  // Dynamic data: array of objects to render cards using map()
  const projects = [
    {
      id: 1,
      name: "Project One",
      description: "React Card Example"
    },
    {
      id: 2,
      name: "Project Two",
      description: "Reusable Components"
    },
    {
      id: 3,
      name: "Project Three",
      description: "Props and State Demo"
    }
  ];

  return (
    <div className="app-container">
      <Header title="React Components Practice" />

      <main className="main-content">
        <section>
          <h2>Card Section</h2>
          <div className="card-grid">
            {/* Dynamic rendering: map() creates one Card per object */}
            {projects.map((project) => (
              <Card
                key={project.id}
                name={project.name}
                description={project.description}
              />
            ))}
          </div>
        </section>

        <Button text="Click Me" />
        <Form />
      </main>

      <Footer name="Nishant Kumar" />
    </div>
  );
}

export default App;
