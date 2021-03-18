import logo from './logo.svg';
import './App.css';
import AvatarHash from "./AvatarHash";

function App() {
  return (
    <div className="App" style={{paddingTop: '100px'}}>
      <AvatarHash size={100} seed="songych@163.com" />
    </div>
  );
}

export default App;
