import Restaurant from "./component/restaurant";
import './component/styling/title.css';
import './component/styling/app.css';

const App= () =>{
  return (
    <div className="App">
      <h3 className="webpage-title">The Food Junction </h3>
      <Restaurant/>
    </div>
  );
}

export default App;
