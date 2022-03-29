import React, { useState } from "react";
import Category from "./Category";

const Form = ({ categoriesData }) => {
  const [number, setNumber] = useState(0);

  const categoryFinder = () => {
    var e = document.getElementById("categoryform");

    switch (e.value) {
      case "Mariage":
        setNumber(0);
        break;
      case "Grossesse":
        setNumber(1);
        break;
      case "Bébé":
        setNumber(2);
        break;
      case "Famille":
        setNumber(3);
        break;
      case "Baptême":
        setNumber(4);
        break;
      case "Couple":
        setNumber(5);
        break;
      case "Portrait":
        setNumber(6);
        break;

      default:
        break;
    }
    console.log(number);
    return number;
  };

  console.log(number);

  const categoryData = categoriesData[number];

  return (
    <div>
      <div className="form">
        <form>
          <label>Choisissez une catégorie de photos : </label>

          <select
            name="categoryform"
            id="categoryform"
            onClick={() => categoryFinder()}
          >
            <option value="">--Choisissez une catégorie--</option>
            <option value="Mariage">Mariage</option>
            <option value="Grossesse">Grossesse</option>
            <option value="Bébé">Bébé</option>
            <option value="Famille">Famille</option>
            <option value="Baptême">Baptême</option>
            <option value="Couple">Couple</option>
            <option value="Portrait">Portrait</option>
          </select>
        </form>
        <Category categoryData={categoryData} />
      </div>
    </div>
  );
};

export default Form;
