import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";


// export const sendMessage = async (req, res, next) => {
//   const { firstName, lastName, email, phone, message } = req.body;
//   if (!firstName || !lastName || !email || !phone || !message) {
//   return res.status(400) .json({
//   success: false,
//   message: "Please Fill Full Form",})
//   }
  
//   await Message.create({ firstName, lastName, email, phone, message });
//   res.status(200).json({
//   success: true,
//   message: "Message Send Successfully!",})
// }

export const sendMessage = catchAsyncError (async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please Fill Full Form!",400))
  }
  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message Send Successfully!",
  });
});
export const getAllMessages = catchAsyncError(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});