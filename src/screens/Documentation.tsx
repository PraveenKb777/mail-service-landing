import { useState } from "preact/hooks";
import CodeSnippet from "../components/codeSnippet/CodeSnippet";
import Button from "../components/button/button";

const SendEmailDocumentation = () => {
  // State for Base URL
  const [baseUrl] = useState("https://baseUrl.com");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Mailer API Documentation</h1>
      <h2>/send-email Route</h2>
      <p
        style={{
          margin: 20,
          border: "1px solid var(--primary)",
          padding: 20,
          borderRadius: 5,
          marginLeft: 0,
        }}
      >
        Although it was primarily created and tailored to work Edge services
        like Cloudflare workers, it may be used with any language. that is able
        to post a request.
      </p>
      {/* Base URL Section */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="base-url" style={{ fontWeight: "bold" }}>
          Base URL:{" "}
        </label>
        <input
          type="text"
          id="base-url"
          disabled
          placeholder="Enter the base URL"
          value={baseUrl}
          style={{ padding: "5px", width: "300px" }}
        />
      </div>

      <h3>Create an API key from dashboard</h3>

      <h3>POST Request</h3>
      <p>
        <strong>URL: </strong> {baseUrl}/send-email
      </p>

      <h4>Required Headers</h4>
      <pre>
        {JSON.stringify(
          {
            Authorization: "Bearer {api_key}",
            "Content-Type": "multipart/form-data",
          },
          null,
          2
        )}
      </pre>

      <h4>Request Body Structure (SendEmailBody)</h4>
      <p>The request body must follow the structure described below:</p>

      <pre>
        {`interface SendEmailBody {
  from: string | Address ; // Required: Sender's email address
  to: string | Address | Array<string | Address> ; // Required: Recipients
  sender?: string | Address | undefined; // Optional: Sender field
  cc?: string | Address | Array<string | Address> | undefined; // Optional: CC recipients
  bcc?: string | Address | Array<string | Address> | undefined; // Optional: BCC recipients
  replyTo?: string | Address | Array<string | Address> | undefined; // Optional: Reply-to address
  inReplyTo?: string | Address | undefined; // Optional: The message-id this message is replying to
  references?: string | string[] | undefined; // Optional: Message-id list
  subject: string ; // Required: Subject of the email
  text?: string | Buffer | Readable | AttachmentLike | undefined; // Optional: Plain text content
  html?: string | Buffer | Readable | AttachmentLike | undefined; // Optional: HTML content
  attachments?: File[] | File | undefined;
  alternatives?: Attachment[] | undefined; // Optional: Alternative text contents
  envelope?: Envelope | MimeNode.Envelope | undefined; // Optional: SMTP envelope
  messageId?: string | undefined; // Optional: Message ID
  date?: Date | string | undefined; // Optional: Date
  encoding?: string | undefined; // Optional: Transfer encoding
  raw?: string | Buffer | Readable | AttachmentLike | undefined; // Optional: Raw message content
  textEncoding?: TextEncoding | undefined; // Optional: Text part encoding
  disableUrlAccess?: boolean | undefined; // Optional: Disable URL access
  disableFileAccess?: boolean | undefined; // Optional: Disable file access
  dkim?: DKIM.Options | undefined; // Optional: DKIM options
  priority?: "high" | "normal" | "low" | undefined; // Optional: Priority of the email
  attachDataUrls?: boolean | undefined; // Optional: Convert data: URLs to attachments
}`}
      </pre>

      <h4>Response</h4>
      <pre>
        {JSON.stringify(
          {
            status: "success",
            message: "Email sent successfully",
          },
          null,
          2
        )}
      </pre>

      <h2>Note : </h2>

      <p>
        It is recommended to send multiple emails with <code>Promise.all</code>
        {"   "} or similar method for multiple emails.
      </p>
      <CodeSnippet />
      <h4>Error Codes</h4>
      <ul>
        <li>
          <strong>400</strong> - Missing fields or invalid input
        </li>
        <li>
          <strong>403</strong> - Invalid API key
        </li>
        <li>
          <strong>500</strong> - Internal server error
        </li>
      </ul>
      <div style={{ margin: 30 }}></div>
      <Button
        label="Request for the Service"
        onClick={() =>
          window.open(
            "https://mail-request-worker.praveen-cendrol.workers.dev/"
          )
        }
      />
    </div>
  );
};

export default SendEmailDocumentation;
