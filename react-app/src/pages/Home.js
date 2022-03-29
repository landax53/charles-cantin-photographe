import React, { useEffect, useState } from "react";
import imagesAPI from "../services/imagesAPI";
import { API_URL } from "../config";

const Home = () => {
  const [homeImage, setHomeImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLogo, setIsLoadingLogo] = useState(false);
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    fetchLogo();
    fetchHomeImage();
  }, [isLoading, isLoadingLogo]);

  const fetchHomeImage = async () => {
    const res = await imagesAPI.findHomeImage();
    setHomeImage(res);
    setIsLoading(true);
    console.log(res.data[0].attributes.image_accueil.data.attributes.url);
  };

  const fetchLogo = async () => {
    const res = await imagesAPI.findLogo();
    setLogo(res);
    console.log(logo);
    setIsLoadingLogo(true);
  };

  return (
    <div className="home">
      {isLoading ? (
        <img
          src={
            API_URL +
            homeImage.data[0].attributes.image_accueil.data.attributes.url
          }
          alt="image_accueil"
        />
      ) : (
        "..."
      )}
      <div className="content-home">
        <div className="logo_home">
          {isLoadingLogo ? (
            <img
              src={API_URL + logo.data[0].attributes.logo.data.attributes.url}
              width="200px"
              alt="logo"
            />
          ) : (
            "..."
          )}
        </div>
        <div className="title_home">
          <h1>Charles Cantin - Photographe</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
