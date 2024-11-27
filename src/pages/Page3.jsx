import { useContext, useState } from "react";
import { dataContext } from "../context/DataProvider";
import { useNavigate } from "react-router";
import Banner from "../components/Banner";

function Page3() {
  const [number, setNumber] = useState(0);
  const { setData } = useContext(dataContext);

  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^(\+?\d{1,4}[\s-]?)?(\d{10}|\d{7,15})$/.test(number)) {
      setData((prev) => ({ ...prev, number }));
      navigation("/page4");
    }
  };
  return (
    <Banner
      enter={"Number"}
      type={"number"}
      placeHold={"User Number"}
      setChange={setNumber}
      {...{ handleSubmit }}
    />
  );
}

export default Page3;
