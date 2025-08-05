import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import AOS from "aos"; // ✅ Import AOS
import "aos/dist/aos.css"; // ✅ Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      once: true,        // Animates only once when element enters viewport
      duration: 1000     
    });
  }, []);

  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
