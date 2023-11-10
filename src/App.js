import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MySidebar from "./component/MySidebar"
import MyMain from "./component/MyMain"
import MyPlayer from './component/MyPlayer';


function App() {
  return (
    <>
      <MySidebar/>
      <MyMain/>
      <MyPlayer/>
      </>
  
  );
}

export default App;
