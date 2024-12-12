const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createAccount = async (username, password) => {
  const response = await fetch(`${BASE_URL}/Accounts/Create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Username: username, Password: password }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const verifyLogin = async (username, password) => {
  const response = await fetch(`${BASE_URL}/Accounts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Username: username, Password: password }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
