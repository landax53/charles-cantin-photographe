import { API_URL } from "../config";

const CardImage = ({ categoryImage }) => {
  return (
    <div className="card">
      <img
        src={categoryImage !== null ? API_URL + categoryImage : "..."}
        alt={categoryImage}
      />
    </div>
  );
};

export default CardImage;
