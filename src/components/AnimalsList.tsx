import { Link, useLoaderData } from "react-router-dom";
import { IAnimalsResponse } from "../models/IAnimalsResponse";

const AnimalsList = () => {
  const data = useLoaderData() as IAnimalsResponse;
  return (
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
            <div className="animals-description">
              <h2>{animal.name}</h2>
              <p>{animal.shortDescription}</p>
            </div>
            {!animal.isFed && (
              <div className="animals-hungry-container">
                <Link to={`animal/${animal.id}`}>
                  <h4 className="animals-hungry-text">
                    {animal.name} är hungrig!
                  </h4>
                </Link>
                <span className="animals-hungry-icon">
                  <i className="fa-regular fa-bell fa-lg fa-shake"></i>
                </span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default AnimalsList;
