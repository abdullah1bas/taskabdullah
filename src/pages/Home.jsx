import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../context/DataProvider";
import Banner from "../components/Banner";

function Home() {
  const [name, setName] = useState("");
  const { setData } = useContext(dataContext);

  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[\u0621-\u064A\u0660-\u0669A-Za-z\s]+$/gi.test(name)) {
      setData((prev) => ({ ...prev, name }));
      navigation("/page2");
    }
  };
  return (
    <Banner
      enter={"Name"}
      type={"text"}
      placeHold={"User Name"}
      setChange={setName}
      {...{ handleSubmit}}
    />
  );
}

export default Home;
