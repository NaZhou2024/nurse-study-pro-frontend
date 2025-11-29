const API_URL = import.meta.env.VITE_API_URL;

export async function loginUser(data) {
  const res = await fetch(`${API_URL}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getTopics() {
  const res = await fetch(`${API_URL}/api/topics`);
  return res.json();
}
