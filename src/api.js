import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/topics`)
      .then((res) => res.json())
      .then((data) => console.log("Frontend → Backend connection OK:", data))
      .catch((err) => console.error("Connection FAILED:", err));
  }, []);

  return (
    <div>
      <h1>Testing Frontend → Backend</h1>
    </div>
  );
}

export default App;
