import axios from "axios";
import { IAnimalsResponse } from "../models/IAnimalsResponse";
import IAnimal from "../models/IAnimal";

const BASEURL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async () => {
  const response = await axios.get<IAnimalsResponse>(BASEURL);

  return response.data;
};

export const getAnimalById = async (id: string) => {
  const response = await axios.get<IAnimal>(`${BASEURL}/${id}`);

  return response.data;
};
