import nodemailer from "nodemailer";

const sendEmailUtils = async (
  userEmail,
  slotDate,
  slotTime,
  doctorName,
  id
) => {
  // Split the slotDate (formatted as day_month_year)
  const [day, month, year] = slotDate.split("_");
  const formattedDate = slotDate.split("_").join("/");

  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=Appointment+with+Dr.+${doctorName}`;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shreyasraut9373@gmail.com",
      pass: "kbkv pgti uoya tvfo", // Replace with your correct email password
    },
  });

  let mailOptions = {
    from: "shreyasraut9373@gmail.com", // Sender address
    to: userEmail, // Receiver's email
    subject: "Appointment Confirmation",
    text: `Your appointment with Dr. ${doctorName} is confirmed for ${formattedDate} at ${slotTime}.
    Please use the following link to add it to your Google Calendar: ${googleCalendarLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.log("Error sending email:", error);
  }
};
export default sendEmailUtils;
