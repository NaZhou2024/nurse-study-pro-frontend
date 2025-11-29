// frontend/src/api.js

// 1️⃣ Read backend URL from .env (Vercel will inject VITE_API_URL automatically)
const API_URL = import.meta.env.VITE_API_URL;

// 2️⃣ Login user
export async function loginUser(data) {
  const res = await fetch(`${API_URL}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include", // Allow cookies/sessions
  });

  return res.json();
}

// 3️⃣ Get ALL topics
export async function getTopics() {
  const res = await fetch(`${API_URL}/api/topics`);
  return res.json();
}

// 4️⃣ Get quizzes for one topic
export async function getQuizById(topicId) {
  const res = await fetch(`${API_URL}/api/quizzes/${topicId}`);
  return res.json();
}
