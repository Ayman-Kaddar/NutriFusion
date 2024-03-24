"use client";
import CheckBoxForm from "../../elements/checkBoxForm/checkBoxForm";
import InputForm from "../../elements/inputForm/inputForm";
import SubmittedToast from "../../elements/submittedToast/submittedToast";
import TextAreaInput from "../../elements/textAreaInput/textAreaInput";
import React, { useState, useEffect, useRef } from "react";
import {
  validateField,
  validateEmail,
  validateCheck,
} from "@/utils/validateForm";
import Loading from "@/components/elements/loading/loading";

const ContactForm = ({ openModalContactForm, setOpenModalContactForm }) => {
  const ref = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [checkPrivacy, setCheckPrivacy] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        openModalContactForm &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setOpenModalContactForm(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openModalContactForm, setOpenModalContactForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setLoading(true);
      const dataToSend = {
        Nombre: name,
        Email: email,
        Detalle: messageText,
      };
      await sendMailAdmin(dataToSend);
    }
  };

  const validateForm = () => {
    if (!validateField(name)) {
      setErrorText(`El campo Nombre es requerido.`);
      return false;
    }

    if (!validateField(email)) {
      setErrorText(`El campo Email es requerido.`);
      return false;
    } else {
      if (!validateEmail(email)) {
        setErrorText(`El campo Email no es válido.`);
        return false;
      }
    }
    if (!validateCheck(checkPrivacy)) {
      setErrorText(`Debes aceptar la política de privacidad.`);
      return false;
    }
    return true;
  };

  const sendMailAdmin = async (formData) => {
    const subject = "Nuevo mensaje desde el formulario de contacto";
    //message is only used for mailFlag = 2
    const message = `Hola ${formData.name}, nuevo mensaje de test`;
    const email = "info@queverencatalunya.es";
    const mailFlag = "1";
    try {
      const response = await fetch("/api/sendEmail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          message,
          email,
          mailFlag,
          formData,
        }),
      });
      if (response?.ok) {
        resetForm();
        setLoading(false);
        setSubmitted(true);
        setSubmittedMessage("success");
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setLoading(false);
        setSubmitted(true);
        setSubmittedMessage("error");
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending mail:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessageText("");
    setErrorText("");
    setCheckPrivacy(false);
  };

  const handleCloseModal = () => {
    setOpenModalContactForm(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-60 z-50">
      {loading && <Loading />}
      {submitted && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <SubmittedToast type={submittedMessage} />
          </div>
        </div>
      )}

      <div
        className="flex flex-col w-full max-w-[450px] bg-black text-white p-4 rounded-lg z-30"
        ref={ref}
      >
        <div className="flex justify-end pr-4">
          <button onClick={handleCloseModal} className="text-white">
            X
          </button>
        </div>
        <div className="text-4xl font-bold text-center mt-8 mb-6">
          Cuéntanos
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="flex flex-col w-auto h-auto text-lg uppercase font-semibold">
              Nombre
            </label>
            <InputForm
              id={"Name"}
              name={"Name"}
              type={"text"}
              inputValue={name}
              setInputValue={setName}
              required={true}
            />
          </div>
          <div>
            <label className="flex flex-col w-auto h-auto text-lg uppercase font-semibold">
              Email
            </label>
            <InputForm
              id={"Email"}
              name={"Email"}
              type={"text"}
              inputValue={email}
              setInputValue={setEmail}
              required={true}
            />
          </div>
          <div>
            <label className="flex flex-col w-auto h-auto text-lg uppercase font-semibold">
              Mensaje
            </label>
            <TextAreaInput
              id={"message"}
              name={"message"}
              type={"textarea"}
              placeholder={"Escribe tu mensaje..."}
              inputValue={messageText}
              setInputValue={setMessageText}
              required={true}
            />
          </div>
          <div className="flex flex-row w-auto h-auto justify-center items-center font-semibold underline">
            <CheckBoxForm
              id={"privacy_policy"}
              name={"privacy_policy"}
              labelText={{
                text: "Acepto la",
                link: "política de privacidad",
              }}
              inputValue={checkPrivacy}
              setInputValue={setCheckPrivacy}
              required={true}
            />
          </div>
          <div className="text-red-500 text-lg font-semibold text-center">
            {errorText}
          </div>
          <div className="flex w-auto h-auto justify-center md:mt-5 md:pb-10">
            <button type="submit" className={`flex w-auto h-auto py-3`}>
              <span className="font-horizon uppercase underline font-semibold text-xl">
                Enviar
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
