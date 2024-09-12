import Card from "./Card";
import { postData } from "../DUMMY_DATA";

export default function Main({ mainText }) {
  return (
    <div className="main">
      {postData[mainText].map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
}
