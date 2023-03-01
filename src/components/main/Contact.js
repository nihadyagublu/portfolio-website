import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../main/ModalComp/Modal";

function Contact() {
  let modalData = "";

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
    setError(false);
    setSuccess(null);
  };

  const open = () => {
    setModalOpen(true);
  };

  const sendEnteredData = async (enteredData) => {
    try {
      const response = await fetch(
        `https://portfolio-database-8397c-default-rtdb.europe-west1.firebasedatabase.app/formMessage.json`,
        {
          method: "POST",
          body: JSON.stringify(enteredData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error occurred");
      }
      const data = await response.json();
      console.log(data);
      setError(false);
    } catch (error) {
      console.error("Error sending data:", error);
      setError(true);
      // Handle the error, show a message to the user, or perform some other action
    }
  };

  useEffect(() => {
    console.log(error);
  }, [sendEnteredData, setError, error]);

  if (error) {
    modalData = {
      className: "error",
      modalTitle: "Error happened!",
      modalMessage:
        "There was some error. Please check if you have filled in all the blanks.",
    };
  }

  if (success) {
    modalData = {
      className: "success",
      modalTitle: "Success!",
      modalMessage: "Your message has been sent successfully!",
    };
  }

  return (
    <div className="contactMeSection" id="contact">
      <header className="contactMeHeader">
        <h1 style={{ color: "white" }}>CONTACT</h1>
        <h1
          style={{
            color: "var(--theme-second-color)",
          }}
        >
          ME
        </h1>
      </header>

      <div className="contactMain">
        <div className="leftSideContactMain">
          <section className="contactInfo">
            <p align="justify">
              You can contact me here via using this form or by directly
              emailing me at :{" "}
              <b style={{ backgroundColor: "var(--theme-second-color)" }}>
                nihad.yagublu@gmail.com.
              </b>
            </p>
            {/* <p align="justify" style={{ marginTop: "2rem" }}>
              Still no response ? (which would be almost impossible, but in life
              still anything may happen) just email me in my second account at:
              <b style={{ backgroundColor: "var(--theme-second-color)" }}>
                nihad.yagublu@outlook.com{" "}
              </b>
            </p> */}
            <section className="contactIcons">
              <a href="https://github.com/nihadyagublu/" target="_blank">
                <GitHubIcon className="githubIcon" />
              </a>
              <a
                href="https://www.linkedin.com/in/nihad-yagublu-409a61231/"
                target="_blank"
              >
                <LinkedInIcon className="linkedInIcon" />
              </a>
            </section>
          </section>
        </div>
        <ContactForm
          sendEnteredData={sendEnteredData}
          setError={setError}
          setSuccess={setSuccess}
        />
      </div>
      <AnimatePresence>
        {error && (
          <Modal
            handleClose={close}
            modalOpen={modalOpen}
            modalData={modalData}
          />
        )}
        {success && (
          <Modal
            handleClose={close}
            modalOpen={modalOpen}
            modalData={modalData}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;
