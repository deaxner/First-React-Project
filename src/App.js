import Takenlijst from "./components/takenlijst";


function App() {

  return (
    <div>
      <h1> Mijn takenlijst</h1>
      <Takenlijst text='learning React'/>
      <Takenlijst text='setting up a Git repository'/>
      <Takenlijst text='writing the demo and expanding on it'/>

    </div>
  );
}

export default App;
