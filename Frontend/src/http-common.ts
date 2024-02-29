import axios from "axios";


export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + "", // Ajoutez le token dans l'en-tête
  }
});
