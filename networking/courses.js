const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getCourses() {
  const response = await fetch(`${BASE_URL}/Courses/Index`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
