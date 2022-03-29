import React, { useEffect, useState } from "react";
import imagesAPI from "../services/imagesAPI";
import { Skeleton } from "@mui/material";
import Form from "../components/Form";

const Galery = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategoryImage = async () => {
    const res = await imagesAPI.findCategoryImage();
    setCategoriesData(res.data);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchCategoryImage();
  }, []);

  return (
    <div className="galery">
      <div className="title_galery">
        <h1>GALERIE</h1>
        <div className="hrmove"></div>
      </div>
      {isLoading ? (
        <Form categoriesData={categoriesData} />
      ) : (
        <Skeleton variant="text" width={200} height={133} />
      )}
    </div>
  );
};
export default Galery;
