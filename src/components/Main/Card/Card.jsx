import styles from "./Card.module.css";
import Modal from "./Modal/Modal";

import { useRef, useState } from "react";

export default function Card({
  id,
  title,
  content,
  image,
  likes,
  userImage,
  comments,
  createdAt,
}) {
  const postData = new Date(createdAt);
  const curDate = Date.now();
  const diffDate = curDate - postData;
  const day = Math.floor(diffDate / 1000 / 60 / 60 / 24);

  //모달
  const modalRef = useRef();
  const [modalData, setModalData] = useState({});

  function openModal() {
    modalRef.current.showModal();
    setModalData({ id, title, content, image, likes, userImage, comments });
  }
  function closeModal() {
    modalRef.current.close();
  }

  return (
    <>
      <Modal modalRef={modalRef} closeModal={closeModal} data={modalData} />
      <div className={styles.card} onClick={openModal}>
        <div className={styles["card-top"]}>
          <img src={image} alt="" id={styles["card-main-img"]} />
          <div className={styles["card-text"]}>
            <h4>{title}</h4>
            <p>{content}</p>
            {day === 0 ? <span>오늘</span> : <span>{day}일전</span>}
            <span>·</span>
            <span>{`${comments}개의 댓글`}</span>
          </div>
        </div>
        <div className={styles["card-footer"]}>
          <span>
            <img src={userImage} alt="" id={styles["card-user-img"]} />
            by <strong> {id}</strong>
          </span>
          <span>{likes}</span>
        </div>
      </div>
    </>
  );
}
