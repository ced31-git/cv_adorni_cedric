import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-darkblue flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/6986f9c9-7a9d-4a21-ac35-0b5d73534b7b"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-vertfluo text-slate-100">
            Contact
          </p>
          <p className="text-slate-100 py-4">
            Pour me contacter, valider le formulaire ou bien envoyer un email à{" "}
            <span className="font-bold font-italic underline decoration-vertfluo underline-offset-2">
              adorni.cedric@gmail.com
            </span>
            {" ."}
          </p>
        </div>
        <input
          className="bg-input p-2"
          type="text"
          placeholder="Votre Nom"
          name="name"
        />
        <input
          className="my-4 p-2 bg-input"
          type="email"
          placeholder="Votre Email"
          name="email"
        />
        <textarea
          className="bg-input p-2"
          name="message"
          rows="10"
          placeholder="Votre Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-vertfluo hover:border-vertfluo hover:text-darkblue hover:font-bold px-4 py-3 my-8 mx-auto flex items-center">
          Envoyer votre message
        </button>
      </form>
    </div>
  );
};

export default Contact;
