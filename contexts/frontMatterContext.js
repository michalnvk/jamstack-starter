import React from "react";

export const FrontMatterContext = React.createContext();

export const useFrontMatter = () => {
  return React.useContext(FrontMatterContext);
};

export default function FrontMatterProvider({ children, frontMatter }) {
  return (
    <>
      <FrontMatterContext.Provider value={frontMatter}>{children}</FrontMatterContext.Provider>
    </>
  );
}
