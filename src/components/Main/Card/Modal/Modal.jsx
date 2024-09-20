import styles from "./Modal.module.css";

export default function Modal({ modalRef, closeModal, data }) {
  return (
    <>
      <dialog ref={modalRef} className={styles.dialog}>
        <button onClick={closeModal}>⨯</button>
        <div className={styles.conteiner}>
          <div className={styles.main_img}>
            <img src={data.image} alt="" />
          </div>

          <div className={styles.content_conteiner}>
            <div className={styles.content_header}>
              <h2>{data.title}</h2>
              <div className={styles.userInfor}>
                <span>
                  <img src={data.userImage} alt="" />
                </span>
                <span>by {data.id}</span>
              </div>
            </div>
            <div className={styles.main_footer}>
              <div className={styles.content_main}>
                <p>{data.content}</p>
              </div>
              <div className={styles.content_footer}>
                <span>{data.comments} comments</span>
                <span>{data.likes} likes</span>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
