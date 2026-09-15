import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");

    return response.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const { name, email, message, website } = request.body ?? {};

    // HONEYPOT
    if (website) {
      return response.status(200).json({
        success: true,
        message: "Message sent successfully.",
      });
    }

    const cleanName = String(name ?? "").trim();
    const cleanEmail = String(email ?? "")
      .trim()
      .toLowerCase();
    const cleanMessage = String(message ?? "").trim();

    // VALIDATION
    if (!cleanName) {
      return response.status(422).json({
        success: false,
        message: "Please enter your name.",
      });
    }

    if (cleanName.length < 2) {
      return response.status(422).json({
        success: false,
        message: "Please enter a valid name.",
      });
    }

    if (cleanName.length > 100) {
      return response.status(422).json({
        success: false,
        message: "Name cannot exceed 100 characters.",
      });
    }

    if (!cleanEmail) {
      return response.status(422).json({
        success: false,
        message: "Please enter your email address.",
      });
    }

    if (cleanEmail.length > 200 || !emailPattern.test(cleanEmail)) {
      return response.status(422).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!cleanMessage) {
      return response.status(422).json({
        success: false,
        message: "Please enter your message.",
      });
    }

    if (cleanMessage.length < 10) {
      return response.status(422).json({
        success: false,
        message: "Please provide a little more detail.",
      });
    }

    if (cleanMessage.length > 5000) {
      return response.status(422).json({
        success: false,
        message: "Message cannot exceed 5000 characters.",
      });
    }

    // ENVIRONMENT CHECK

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Contact form environment variables are missing.");
      return response.status(500).json({
        success: false,
        message: "Contact service is temporarily unavailable.",
      });
    }

    const resend = new Resend(apiKey);

    // SAFE VALUES
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMessage = escapeHtml(cleanMessage).replaceAll("\n", "<br />");

    // SEND EMAIL

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: cleanEmail,
      subject: `Portfolio enquiry from ${cleanName}`,
      text: [
        "New portfolio enquiry",
        "",
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),

      html: `
        <!doctype html>

        <html>
          <body
            style="
              margin:0;
              padding:0;
              background:#f4f4f5;
              font-family:Arial,Helvetica,sans-serif;
              color:#18181b;
            "
          >
            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                width:100%;
                background:#f4f4f5;
              "
            >
              <tr>
                <td
                  align="center"
                  style="
                    padding:40px 16px;
                  "
                >
                  <table
                    width="600"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                      width:100%;
                      max-width:600px;
                      background:#ffffff;
                      border-radius:16px;
                      overflow:hidden;
                      border:1px solid #e4e4e7;
                    "
                  >
                    <tr>
                      <td
                        style="
                          background:#09090b;
                          padding:28px 32px;
                        "
                      >
                        <div
                          style="
                            font-size:11px;
                            letter-spacing:2px;
                            text-transform:uppercase;
                            color:#ef4444;
                            margin-bottom:10px;
                          "
                        >
                          Portfolio Contact
                        </div>

                        <div
                          style="
                            font-size:25px;
                            font-weight:700;
                            color:#ffffff;
                          "
                        >
                          New enquiry received
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:32px;
                        "
                      >
                        <div
                          style="
                            margin-bottom:24px;
                          "
                        >
                          <div
                            style="
                              font-size:11px;
                              color:#71717a;
                              text-transform:uppercase;
                              letter-spacing:1px;
                              margin-bottom:6px;
                            "
                          >
                            Name
                          </div>

                          <div
                            style="
                              font-size:16px;
                              font-weight:600;
                            "
                          >
                            ${safeName}
                          </div>
                        </div>

                        <div
                          style="
                            margin-bottom:24px;
                          "
                        >
                          <div
                            style="
                              font-size:11px;
                              color:#71717a;
                              text-transform:uppercase;
                              letter-spacing:1px;
                              margin-bottom:6px;
                            "
                          >
                            Email
                          </div>

                          <div
                            style="
                              font-size:16px;
                            "
                          >
                            ${safeEmail}
                          </div>
                        </div>

                        <div>
                          <div
                            style="
                              font-size:11px;
                              color:#71717a;
                              text-transform:uppercase;
                              letter-spacing:1px;
                              margin-bottom:10px;
                            "
                          >
                            Message
                          </div>

                          <div
                            style="
                              font-size:15px;
                              line-height:1.7;
                              padding:18px;
                              background:#fafafa;
                              border:1px solid #eeeeee;
                              border-radius:12px;
                            "
                          >
                            ${safeMessage}
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:
                            0 32px 30px;
                        "
                      >
                        <div
                          style="
                            border-top:
                              1px solid #eeeeee;
                            padding-top:20px;
                            color:#71717a;
                            font-size:12px;
                            line-height:1.6;
                          "
                        >
                          Reply directly to this email and
                          your response will be addressed to
                          ${safeEmail}.
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend contact error:", error);

      return response.status(500).json({
        success: false,
        message: "Unable to send your message right now.",
      });
    }

    return response.status(200).json({
      success: true,
      message: "Message sent successfully. I'll get back to you soon.",
      id: data?.id ?? null,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return response.status(500).json({
      success: false,
      message: "Unable to send your message right now.",
    });
  }
}
