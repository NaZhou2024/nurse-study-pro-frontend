import { useEffect, useState } from "react";
import axios from "axios";
import { getTopics } from "../api";

useEffect(() => {
  getTopics().then(setTopics);
}, []);


export default function TopicList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/topics")
      .then((res) => setTopics(res.data));
  }, []);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {topics.map((t) => (
          <li key={t._id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}
