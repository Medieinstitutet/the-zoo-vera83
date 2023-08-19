import { Link, useLoaderData } from "react-router-dom";
import { IAnimalsResponse } from "../models/IAnimalsResponse";
import "../App.css";
import { Header } from "../components/Header";

// Defaults to the Classic family, Solid style

export const Animals = () => {
  const data = useLoaderData() as IAnimalsResponse;

  return (
    <>
      <Header />
      <ul className="animals-list">
        {data.map((animal) => {
          return (
            <li key={animal.id}>
              <Link to={`animal/${animal.id}`}>
                <img
                  className="image"
                  src={animal.imageUrl}
                  alt={animal.latinName}
                />
              </Link>
              <div className="animals-text">
                <h2>{animal.name}</h2>
                <p>{animal.shortDescription}</p>
                <Link to={`animal/${animal.id}`}>
                  <h3 className="animals-hungry">{animal.name} är hungrig!!</h3>
                </Link>
                <span></span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
