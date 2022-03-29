import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import imagesAPI from "../services/imagesAPI";
import { API_URL } from "../config";

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjwagjl");
  const [isLoadingLogo, setIsLoadingLogo] = useState(false);
  const [isLoadingPhotographer, setIsLoadingPhotographer] = useState(false);
  const [logo, setLogo] = useState(null);
  const [photographer, setPhotographer] = useState(null);

  useEffect(() => {
    fetchLogo();
    fetchPhotographer();
  }, [isLoadingLogo, isLoadingPhotographer]);

  const fetchLogo = async () => {
    const res = await imagesAPI.findLogo();
    setLogo(res);
    console.log(logo);
    setIsLoadingLogo(true);
  };

  const fetchPhotographer = async () => {
    const res = await imagesAPI.findPhotographer();
    setPhotographer(res);
    console.log(photographer);
    setIsLoadingPhotographer(true);
  };

  if (state.succeeded) {
    return <p>Merci pour votre message !</p>;
  }
  return (
    <div className="contact">
      <div className="title_contact">
        <h1>CONTACT</h1>
      </div>
      <div className="hrmove"></div>
      <div className="subtitle-contact">
        <h2>Une question, une demande de devis?</h2>
        <h4>N'hésitez pas à m'envoyer un message !</h4>
      </div>
      <div className="form_contact">
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="email">Adresse Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Votre adresse ici"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message ici"
              required
              maxLength="300"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="button-form">
            <button type="submit" disabled={state.submitting}>
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <div className="identity">
        <div className="logo">
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
        <div className="photographer">
          {isLoadingPhotographer ? (
            <img
              src={
                API_URL +
                photographer.data[0].attributes.photographer.data.attributes.url
              }
              height="200px"
              width="200px"
              alt="logo"
            />
          ) : (
            "..."
          )}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return <ContactForm />;
}
export default Contact;
