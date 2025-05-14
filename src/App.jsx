import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import ProjectToReact from "./Components/ProjectToReact.jsx";
import LabDay2 from "./Components/LabDay2.jsx";
import Coin from "./Components/Coin.jsx";
import ReusableBtn from "./Components/ReusableBtn.jsx";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <ProjectToReact/>
      <Home />

      <Login/> */}
      <div className="flex justify-center items-center">
      <ReusableBtn 
        label='btn1'
        onClick={() => alert('btn1 done')} 
        variant="primary" 
        size="medium" 
      />
      <ReusableBtn 
        label='btn2'
        onClick={() => alert('btn2 done')} 
        variant="secondary" 
        size="small" 
      />
      <ReusableBtn 
        label='btn3'
        onClick={() => alert('bt3 done')} 
        variant="danger" 
        size="large" 
      />
    </div>
      <LabDay2/>
      <Coin/>
    </div>
  );
}
export default App;
