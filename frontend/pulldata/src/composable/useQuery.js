
import { api } from "../config/api.js"

export async function fetchCats() {
  try {
    const response = await api.get('/');
    return response.data.text;   // return the data instead of mutating directly
  } catch (error) {
    console.error(error);
    return []; // fallback empty array
  }
}
