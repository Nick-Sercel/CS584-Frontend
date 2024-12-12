const secretKey = import.meta.env.VITE_ENCRYPTION_TOKEN;
import CryptoJS from "crypto-js";
import { verifyLogin } from "../networking/auth";

export const decryptSessionToken = (encryptedString) => {
  const bytes = CryptoJS.AES.decrypt(encryptedString, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const setLoginSession = (username, password) => {
  const deliniated = username + "+deliniator+" + password;
  const encrypted = CryptoJS.AES.encrypt(deliniated, secretKey).toString();
  sessionStorage.setItem("sessionToken", encrypted);
};

export const loginWithSessionToken = async () => {
  const token = sessionStorage.getItem("sessionToken");
  if (!token) return false;
  const decrypted = decryptSessionToken(token);
  const [username, password] = decrypted.split("+deliniator+");
  const res = await verifyLogin(username, password);
  if (res.success === false) {
    return false;
  }
  console.log("Logged in via session token");
  return res.accountId;
};
