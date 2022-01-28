import "./App.css";
import Containar from "./components/Containar";

import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <Containar />
      </UserProvider>
    </div>
  );
}

export default App;
