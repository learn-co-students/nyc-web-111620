import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// return value! returns the JSX
// different naming: capital letter!
function App() {
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList />
    </div>
  );
}

export default App;
