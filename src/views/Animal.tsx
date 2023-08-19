import { useLoaderData } from "react-router-dom";
import IAnimal from "../models/IAnimal";
import "../App.css";

export const Animal = () => {
  const data = useLoaderData() as IAnimal;

  return (
    <>
      <img src={data.imageUrl} alt="" />
      <h3>{data.name}</h3>
      <p>{data.longDescription}</p>
      <p>Senast matad: </p>
      <button className="danger-button">Mata {data.name}!</button>
    </>
  );
};
