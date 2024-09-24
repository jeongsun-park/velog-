import Card from "./Card/Card";
import Form from "./Form/Form";
import { postData } from "../../DUMMY_DATA";
import styles from "./Main.module.css";
import { useState, useEffect, useRef } from "react";

export default function Main({ mainText, toggle, setToggle }) {
  const [data, setData] = useState(postData);
  const dataRef = useRef();

  //
  // useEffect(() => {
  //   const data = localStorage.getItem("postData"); // 게시글 데이터 가져오기
  //   // 스토리지가 존재한다면
  //   if (data) {
  //     const posts = JSON.parse(data); // JSON -> object 변환
  //     setData(posts); //setData 함수를 실행하여 컴포넌트 재실행
  //     //스토리지가 존재하지않는다면
  //     //
  //   } else {
  //     localStorage.setItem("postData", postData);
  //     setData(postData);
  //   }
  // }, []);

  // function getPostData() {
  //   const data = localStorage.getItem("postData");
  //   if (data) {
  //     return JSON.parse(data);
  //   } else {
  //     return {};
  //   }
  // }
  // // getPostData()
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
