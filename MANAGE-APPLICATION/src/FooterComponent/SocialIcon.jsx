import React from "react";

const SocialIcon = ({ icon, path }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#ffffff"
      className={`icon icon-tabler ${icon}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d={path} />
    </svg>
  );
};

export default SocialIcon;
