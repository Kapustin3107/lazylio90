import './App.css'
import "./styles/global.scss";

// import of entrance page      
import EntrancePage from "./pages/entrance-page/EntrancePage";


/**
 * The root component of the application. This component renders the entire
 * application. It does not render anything by itself, but is a container for
 * other components.
 */
function App() {
    return (
      <EntrancePage />
    );
}

export default App
