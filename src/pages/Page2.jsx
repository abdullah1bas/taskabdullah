import { useContext, useState } from "react"
import { dataContext } from "../context/DataProvider"
import Banner from "../components/Banner";
import { useNavigate } from "react-router";

function Page2() {
  const [email, setEmail] = useState("");
  const { setData } = useContext(dataContext);

  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email)) {
      setData((prev) => ({ ...prev, email }));
      navigation("/page3");
    }
  };
  return (
    <Banner 
      enter={"Email"}
      type={"email"}
      placeHold={"User Email"}
      setChange={setEmail}
      {...{ handleSubmit}}
    />
  )
}

export default Page2