import React from "react";
import Linkify from "linkify-react";

interface LinkifyTextProps {
  text: string;
}

const LinkifyText: React.FC<LinkifyTextProps> = ({ text }) => {
  const options = {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-[var(--neon-blue)] hover:text-[var(--neon-purple)] underline underline-offset-2 break-words",
    attributes: {
      tabIndex: 0,
    },
  };
  return <Linkify options={options}>{text}</Linkify>;
};

export default LinkifyText;
