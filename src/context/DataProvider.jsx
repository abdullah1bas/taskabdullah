import { createContext, useState } from "react";

export const dataContext = createContext();

// eslint-disable-next-line react/prop-types
function DataProvider({ children }) {
  const [data, setData] = useState({ name: "" , number: ""});
  return <dataContext.Provider value={{data, setData}}>{children}</dataContext.Provider>;
}

export default DataProvider;
