import Card from "./Card/Card";
import Form from "./Form/Form";
import { postData } from "../../DUMMY_DATA";
import styles from "./Main.module.css";
import { useState, useRef } from "react";
import DetailPage from "../DetailPage/DetailPage";

export default function Main({ mainText, toggle }) {
  const [data, setData] = useState(postData);

  return (
    <>
      {toggle ? (
        <Form setData={setData} />
      ) : (
        <div className={styles.main}>
          {}
          {data[mainText].map((item) => (
            <Card {...item} key={item.id} />
          ))}
          <DetailPage />
        </div>
      )}
    </>
  );
}
