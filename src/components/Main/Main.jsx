import Card from "./Card/Card";
import Form from "./Form/Form";
import { postData } from "../../DUMMY_DATA";
import styles from "./Main.module.css";
import { useState, useEffect, useRef } from "react";

export default function Main({ mainText, toggle, setToggle }) {
  const [data, setData] = useState(postData);
  // const dataRef = useRef();

  // //
  // function getPostData() {
  //   const data = localStorage.getItem("postData");
  //   if (data) {
  //     return JSON.parse(data);
  //   } else {
  //     return [];
  //   }
  // }
  // //
  // function setPostData(postData) {
  //   localStorage.setItem("postData", JSON.stringify(postData));
  // }

  // //
  // useEffect(() => {
  //   function getPost() {
  //     const list = getPostData();
  //     setData(list);
  //   }
  //   getPost();
  // }, []);

  // //

  // function addPostData() {
  //   const data = dataRef.current.value;
  //   const newPostData = [...postData, data];

  //   setPostData(newPostData);
  //   setData(newPostData);
  // }

  return (
    <>
      {toggle ? (
        <Form setData={setData} setToggle={setToggle} />
      ) : (
        <div className={styles.main}>
          {}
          {data[mainText].map((item) => (
            <Card {...item} key={item.id} setToggle={setToggle} />
          ))}
        </div>
      )}
    </>
  );
}
