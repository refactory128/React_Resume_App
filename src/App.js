import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
function App() {
  return (
    <div className="App">
      <div className="Heading">
        <h1>Resume Entry Form</h1>
      </div>

      <General />
      <Education />
      <Work />
    </div>
  );
}

export default App;
