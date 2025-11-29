import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/topics`)
      .then((res) => res.json())
      .then((data) => console.log("Frontend → Backend connection OK:", data))
      .catch((err) => console.error("Connection FAILED:", err));
  }, []);

  return <h1>Testing Backend Connection… Check Console</h1>;
}

export default App;
