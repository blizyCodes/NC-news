import { useState } from "react";

export const CollapseWrapper = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible((currentVisibility) => {
      return !currentVisibility;
    });
  };
  return (
      <>
     {isVisible && children}
    <button className="articleCard__button" onClick={handleClick}>
      {isVisible ? "...Show Less" : "...details"}
    </button>
    </>
  );
};
