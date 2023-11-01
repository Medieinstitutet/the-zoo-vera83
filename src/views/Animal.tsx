import { useLoaderData } from "react-router-dom";
import IAnimal from "../models/IAnimal";
import { Header } from "../components/Header";
import { useState } from "react";
import { useLocalStorageSync } from "../hooks";
import "../App.css";

export const Animal = () => {
  const data = useLoaderData() as IAnimal;
  const [animal, setAnimal] = useState(data);

  useLocalStorageSync(animal);

  const feedAnimal = () => {
    const updatedAnimal = {
      ...animal,
      isFed: true,
      lastFed: new Date(),
    };
    setAnimal(updatedAnimal);
  };

  return (
    <>
      <Header />
      <div className="animal-container">
        <img className="image" src={animal.imageUrl} alt="" />
        <h3>{animal.name}</h3>
        <div className="animal-description-container">
          <p className="animal-description">{animal.longDescription}</p>
        </div>
        <p>
          •{" "}
          <strong>{`Senast matad: ${animal.lastFed.toLocaleString()}`} </strong>
        </p>
        <button
          className={`button ${animal.isFed ? "disabled-button" : "notFed"}`}
          disabled={animal.isFed}
          onClick={feedAnimal}
        >
          Mata {animal.name}!
        </button>
      </div>
    </>
  );
};
