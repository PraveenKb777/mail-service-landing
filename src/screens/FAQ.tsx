import { FC } from "preact/compat";
import { useState } from "preact/hooks";
import HeadingTypo from "../components/headingTypo/headingTypo";

const FAQItem: FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
    >
      <button
        onClick={toggleAccordion}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "10px",
          background: "var(--primary)",
          color: "#fff",
          border: "none",
          borderRadius: "5px 5px 0 0",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {question}
      </button>
      {isOpen && (
        <div style={{ padding: "10px", backgroundColor: "#f9f9f9" }}>
          <p style={{ margin: 0 }}>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const faqItems = [
    {
      question: "1. What is the `/send-email` route used for?",
      answer:
        'The `/send-email` route is used for sending emails through the API. It accepts form data with required fields like "to", "subject", "text", and optional fields like "cc", "bcc".',
    },
    {
      question:
        "2. How do I send multiple emails using the `/send-email` route?",
      answer:
        "You can use `Promise.all` to send multiple emails simultaneously by looping over an array of email data and making multiple POST requests to the `/send-email` endpoint.",
    },
    {
      question: "3. What are the required fields for sending an email?",
      answer:
        'The required fields for sending an email are "to", "from","subject"',
    },
    {
      question: "4. Can I send attachments via the `/send-email` route?",
      answer:
        "Yes, attachments can be sent by appending them to the form data as file inputs. Make sure your API accepts file attachments correctly.",
    },
    {
      question: "5. How do I handle CC and BCC fields?",
      answer:
        "You can add CC and BCC fields in the form data as arrays or comma-separated strings. These fields are optional.",
    },
    {
      question: "6. What is the maximum email size that can be sent?",
      answer: "The maximum email size is limited to 30MB at this point",
    },
    {
      question: "7. How do I authenticate my requests to the API?",
      answer:
        "You can authenticate your requests by including an API key in the Authorization header when making requests to the `/send-email` route.",
    },
    {
      question: "8. What response can I expect after sending an email?",
      answer:
        'Upon successful sending, the API will respond with a status message, such as "Email sent successfully". In case of an error, it will provide details of the failure.',
    },
    {
      question: "9. Can I schedule emails to be sent at a later time?",
      answer:
        "Currently, the API does not natively support scheduling emails. You can implement this feature on your client-side by handling the scheduling logic and triggering the API at the desired time.",
    },
    {
      question: "10. How do I handle errors when sending an email?",
      answer:
        "Handle errors by using a try/catch block in your code and reviewing the error response from the API. Common errors include missing required fields or invalid email addresses.",
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <HeadingTypo label="FAQ - Send Email Route" />
      <div style={{ margin: 30 }} />
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQPage;
