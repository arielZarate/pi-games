import "./App.css";
import axios from 'axios'
import AllRoutes from "./AllRoutes";

axios.defaults.baseURL="http://localhost:4000/"

function App() {

  return (
    <div className="App">
    
    <AllRoutes/>

    </div>
  );
}

export default App;
