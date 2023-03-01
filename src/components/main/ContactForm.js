import { useRef } from "react";

export default function ContactForm({ setSuccess, sendEnteredData, setError }) {
  const nameAndSurnameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const addedInput = {
      userNameAndSurname: nameAndSurnameRef.current.value,
      userEmail: emailRef.current.value,
      emailSubject: subjectRef.current.value,
      userMessage: messageRef.current.value,
    };

    // console.log(addedInput);

    if (
      addedInput.userNameAndSurname.trim().length === 0 ||
      addedInput.userEmail.trim().length === 0 ||
      addedInput.emailSubject.trim().length === 0 ||
      addedInput.userMessage.trim().length === 0
    ) {
      setError(true);
    } else if (
      addedInput.userNameAndSurname.trim().length >= 2 &&
      addedInput.userEmail.trim().length >= 2 &&
      addedInput.emailSubject.trim().length >= 2 &&
      addedInput.userMessage.trim().length >= 2
    ) {
      sendEnteredData(addedInput);
      setSuccess(true);
    }

    nameAndSurnameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <div className="rightSideContactMain">
      <form onSubmit={submitHandler}>
        <div className="formNameAndEmail">
          <input placeholder="YOUR NAME AND SURNAME" ref={nameAndSurnameRef} />
          <input placeholder="YOUR EMAIL" ref={emailRef} />
        </div>
        <div className="formSubjectAndMessage">
          <input placeholder="ENTER SUBJECT" ref={subjectRef} />
          <textarea placeholder="MESSAGE HERE" ref={messageRef} />
        </div>
        <div className="formActions">
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
