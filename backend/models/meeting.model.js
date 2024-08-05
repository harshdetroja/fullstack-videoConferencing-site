import { Schema, model } from "mongoose";

const MeetingSchema = new Schema({
  user_id: {
    type: String,
  },
  meetingcode: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Meeting = model("Meeting", MeetingSchema);

export { Meeting };
