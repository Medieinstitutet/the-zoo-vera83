import axios from "axios";
import { IAnimalsResponse } from "../models/IAnimalsResponse";

const BASEURL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async () => {
  const response = await axios.get<IAnimalsResponse>(BASEURL);

  return response.data;
};
