import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api"; // optional helper if you export it

export default function QuizPage({ topicId }) {
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(null);

  // Fetch quiz data when topicId changes
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/quizzes/${topicId}`)
      .then((res) => setQuiz(res.data))
      .catch((err) => console.error(err));
  }, [topicId]);

  const handleSubmit = () => {
    const result = quiz.questions.reduce(
      (acc, q) => acc + (q.selected === q.correctAnswer ? 1 : 0),
      0
    );
    setScore(result);
  };

  if (!quiz) return <p>Loading...</p>;

  return (
    <div>
      <h2>{quiz.title}</h2>

      {quiz.questions.map((q, i) => (
        <div key={i}>
          <p>{q.questionText}</p>

          {q.options.map((opt, j) => (
            <button key={j} onClick={() => (q.selected = opt)}>
              {opt}
            </button>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>

      {score !== null && (
        <p>
          Your score: {score}/{quiz.questions.length}
        </p>
      )}
    </div>
  );
}
