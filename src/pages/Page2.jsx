import { useContext } from "react"
import { dataContext } from "../context/DataProvider"

function Page2() {
  const {data} = useContext(dataContext);
  return (
    <div>Name: {data.name}</div>
  )
}

export default Page2