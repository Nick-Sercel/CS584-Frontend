const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getSubjects() {
  const response = await fetch(`${BASE_URL}/Subjects/Index`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
