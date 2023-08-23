import axios from "axios";
import { IAnimalsResponse } from "../models/IAnimalsResponse";

const BASEURL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async () => {
  const animals = localStorage.getItem("animals");
  if (animals) {
    return JSON.parse(animals);
  }
  const response = await axios.get<IAnimalsResponse>(BASEURL);
  localStorage.setItem("animals", JSON.stringify(response.data));

  return response.data;
};

export const getAnimalById = async (id: string) => {
  const animalsString = localStorage.getItem("animals");
  if (!animalsString) {
    throw new Error("animal does not exist");
  }
  const animals: IAnimalsResponse = JSON.parse(animalsString);

  const animal = animals.find((a) => parseInt(id) === a.id);

  if (!animal) {
    throw new Error("animal does not exist");
  }
  return animal;
};
