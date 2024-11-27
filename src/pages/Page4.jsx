import { useContext, useState } from "react";
import { dataContext } from "../context/DataProvider";
import { useNavigate } from "react-router";
import Banner from "../components/Banner";

function Page4() {
  const [date, setDate] = useState("");
  const { setData } = useContext(dataContext);

  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date)) {
      setData((prev) => ({ ...prev, date }));
      navigation("/page5");
    }
  };
  return (
    <Banner
      enter={"Date"}
      type={"date"}
      setChange={setDate}
      {...{ handleSubmit }}
    />
  );
}

export default Page4