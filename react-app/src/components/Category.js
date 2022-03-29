import React, { useEffect, useState } from "react";
import CardImage from "./CardImage";

const Category = ({ categoryData }) => {
  const [categoryImages, setCategoryImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategoryImage = () => {
    setCategoryImages(
      categoryData.attributes.category_images.data.map(
        (image) => image.attributes.url
      )
    );
    console.log(categoryImages);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchCategoryImage();
  }, [categoryData]);

  return (
    <div className="category">
      <div className="category-container">
        <div className="category_title">
          <h1>{categoryData.attributes.category_name}</h1>{" "}
        </div>
        <div className="category_image">
          {categoryImages.map((categoryImage) => (
            <CardImage categoryImage={categoryImage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
