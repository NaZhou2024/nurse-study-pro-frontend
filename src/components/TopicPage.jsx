import { useEffect, useState } from "react";
import { getTopics } from "../api"; // or "./api"

export default function TopicPage() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(setTopics);
  }, []);

  return (
    <div>
      {topics.map((t) => (
        <p key={t._id}>{t.name}</p>
      ))}
    </div>
  );
}
