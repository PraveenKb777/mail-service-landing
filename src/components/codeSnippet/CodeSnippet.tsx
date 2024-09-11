import { h } from "preact";
import { useRef } from "preact/hooks";

const CodeSnippet = () => {
  // Reference to the code block element
  const codeRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = () => {
    if (codeRef.current) {
      // Select the text
      const range = document.createRange();
      range.selectNode(codeRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);

      // Copy to clipboard
      try {
        document.execCommand("copy");
        alert("Code copied to clipboard!");
      } catch (err) {
        alert("Failed to copy code.");
      }

      // Clean up
      window.getSelection()?.removeAllRanges();
    }
  };

  return (
    <div>
      <pre
        ref={codeRef}
        style={{
          background: "#f5f5f5",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        <code>
          {`import axios from 'axios';

const baseUrl = 'https://your-api-url.com/api/v1/send-email';

const emailList = [
  {
    to: 'recipient1@example.com',
    subject: 'Subject 1',
    text: 'This is the text content for recipient 1',
    from: 'sender@example.com',
  },
  {
    to: 'recipient2@example.com',
    subject: 'Subject 2',
    text: 'This is the text content for recipient 2',
    from: 'sender@example.com',
  },
  {
    to: 'recipient3@example.com',
    subject: 'Subject 3',
    text: 'This is the text content for recipient 3',
    from: 'sender@example.com',
  },
];

async function sendEmail(emailData) {
  const formData = new FormData();
  formData.append('to', emailData.to);
  formData.append('subject', emailData.subject);
  formData.append('text', emailData.text);
  if (emailData.from) formData.append('from', emailData.from);

  try {
    const response = await axios.post(baseUrl, formData, {
      headers: {
        Authorization: \`Bearer YOUR_API_KEY\`,
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(\`Email sent to \${emailData.to} successfully.\`);
    return response.data;
  } catch (error) {
    console.error(\`Error sending email to \${emailData.to}:\`, error.response?.data || error.message);
    throw error;
  }
}

async function sendMultipleEmails() {
  try {
    const emailPromises = emailList.map((email) => sendEmail(email));
    const results = await Promise.all(emailPromises);
    console.log('All emails sent successfully:', results);
  } catch (error) {
    console.error('Error sending one or more emails:', error);
  }
}

sendMultipleEmails();
`}
        </code>
      </pre>
      <button
        onClick={copyToClipboard}
        style={{
          marginTop: "10px",
          padding: "10px",
          border: "none",
          background: "#007bff",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Copy Code
      </button>
    </div>
  );
};

export default CodeSnippet;
