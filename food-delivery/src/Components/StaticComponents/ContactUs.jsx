import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../Tools/Text";
import { Button, input, Textarea } from "@mui/joy";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FkkzIfOn3moLa6OINsOnT25%2FResume-(Community)%3Ftype%3Ddesign%26node-id%3D412%253A109%26mode%3Ddesign%26t%3DDM4xqCJ1hJh73y1y-1"
        allowFullScreen
        alt=""
      />
    </div>
  );
}

export default ContactUs;
