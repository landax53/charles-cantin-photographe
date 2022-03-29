import React from "react";

const PricesPresta = () => {
  return (
    <div className="pricespresta">
      <div className="title-pricespresta">
        <h1>TARIFS & PRESTATIONS</h1>
      </div>
      <div className="hrmove"></div>
      <div className="content_presta">
        <div className="prestabox">
          <div>
            <h3>"Juste moi" 130 euros</h3>
            <p>Séance pour une personne, en extérieur ou en studio</p>
          </div>
        </div>
        <div className="prestabox">
          <div>
            <h3>"Pour deux" 130 euros</h3>
            <p>Pour deux personnes, en extérieur ou en studio</p>
          </div>
        </div>
        <div className="prestabox">
          <div>
            <h3>"Famille" 130 euros</h3>
            <p>
              Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou
              en studio <br /> 30 euros en supplément par personne au-delà de 4
              (hormis enfant jusqu’à 2 ans)
            </p>
          </div>
        </div>
        <div className="prestabox">
          <div>
            <h3>"Il était une fois" 130 euros</h3>
            <p>
              Photo de grossesse (À votre domicile, en extérieur ou en studio)
            </p>
          </div>
        </div>
        <div className="prestabox">
          <div>
            <h3>"Mon bébé" 130 euros</h3>
            <p>Photo d’enfant jusqu’à 3 ans (photo à domicile)</p>
          </div>
        </div>
        <div className="prestabox">
          <div>
            <h3>"J'immortalise l'évènement" sur mesure</h3>
            <p>Prestation de mariage ou baptême sur devis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesPresta;
