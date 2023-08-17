import { useLoaderData } from "react-router-dom";
import { IAnimalsResponse } from "../models/IAnimalsResponse";

export const Animals = () => {
  const data = useLoaderData() as IAnimalsResponse;

  return (
    <ul>
      {data.map((animal) => {
        return (
          <>
            <img src={animal.imageUrl} alt={animal.latinName} />
            <li key={animal.id}>{animal.name}</li>
            <p>{animal.shortDescription}</p>
          </>
        );
      })}
    </ul>
  );
};
