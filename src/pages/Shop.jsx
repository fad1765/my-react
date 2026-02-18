import { useParams } from "react-router-dom";

export default function Shop() {
  const { category } = useParams();
  return <h1>Shop: {category}</h1>;
}
