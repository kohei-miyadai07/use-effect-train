import UserProfile from "./component/UserProfile";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <UserProfile />
      </div>
    </>
  );
};

export default App;
