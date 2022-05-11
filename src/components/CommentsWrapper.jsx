import { useState } from "react";

export const CommentsWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible((currentVisibility) => {
      return !currentVisibility;
    });
  };
  return (
    <>
      {isVisible && children}
      <button className="commentCard--button--showMore" onClick={handleClick}>
        {isVisible ? "Hide Comments" : "Show Comments"}
      </button>
    </>
  );
};
