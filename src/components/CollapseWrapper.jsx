import { useState } from "react";

export const CollapseWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible((currentVisibility) => {
      return !currentVisibility;
    });
  };
  return (
    <div className="articleCard--button--showMore">
      {isVisible && children}
      <button onClick={handleClick}>
        {isVisible ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};
