import axios from "axios";
import { createContext } from "react";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
});
