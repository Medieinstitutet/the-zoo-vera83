import { useEffect } from "react";
import { IAnimalsResponse } from "../models/IAnimalsResponse";
import IAnimal from "../models/IAnimal";

export const useLocalStorageSync = (animal: IAnimal) => {
  useEffect(() => {
    const animalsString = localStorage.getItem("animals");
    if (!animalsString) {
      throw new Error("animal does not exist");
    }
    const animals: IAnimalsResponse = JSON.parse(animalsString);

    const updatedAnimals = animals.map((a) => {
      if (animal.id === a.id) {
        return animal;
      } else {
        return a;
      }
    });

    localStorage.setItem("animals", JSON.stringify(updatedAnimals));
  }, [animal]);
};
