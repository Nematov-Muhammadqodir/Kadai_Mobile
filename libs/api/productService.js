import axios from "axios";

const BASE_URL = "http://192.168.0.27:8080";

export const getProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/allProducts`);

    return res.data; // axios auto parses JSON
  } catch (err) {
    console.log("AXIOS ERROR:", err.message);
    throw err;
  }
};
