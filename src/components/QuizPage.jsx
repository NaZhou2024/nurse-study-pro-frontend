import { useState, useEffect } from "react";
import axios from "axios";
import { getTopics } from "../api";

useEffect(() => {
  getTopics().then(setTopics);
}, []);


export default function QuizPage({ topicId }) {
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/quizzes/${topicId}`)
      .then((res) => setQuiz(res.data));
  }, [topicId]);

  const handleSubmit = () => {
    const result = quiz.questions.reduce(
      (acc, q, i) => acc + (q.selected === q.correctAnswer ? 1 : 0),
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
