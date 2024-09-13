import styles from "./Form.module.css";
import { useRef } from "react";

export default function From({ setData }) {
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const content = contentRef.current.value;
    const category = categoryRef.current.value;
    const image = imageRef.current.value;

    setData((prev) => {
      const newData = {
        id: Date.now(),
        title: title,
        content: content,
        author: author,
        createAt: Date.now(),
        image: image,
        userImage: "https://randomuser.me/api/portraits/men/61.jpg",
        likes: 0,
        comments: 0,
      };
      // 기존데이터에서 선택한 카테고리에 맞는 배열값 가져오기
      const prevArray = prev[category];
      // 배열에 새로운 데이터 넣기
      const newArray = [...prevArray, newData];
      // 객체반환
      return {
        // 기존객체의 값 넣기
        ...prev,
        // 선택된 카테고리의 값을 newData 넣어주기
        [category]: [...newArray],
      };
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.form}>
        <div className={styles["title-form"]}>
          <input
            type="text"
            id={styles["title"]}
            placeholder="제목을 입력하세요"
            ref={titleRef}
          />
          <div className={styles.info}>
            <div className={styles.name}>
              <input type="text" placeholder="이름" ref={authorRef} />
            </div>
            <div className={styles.category}>
              <select name="category" ref={categoryRef}>
                <option>카테고리</option>
                <option value="trending">트렌딩</option>
                <option value="latest">최신</option>
                <option value="feed">피드</option>
              </select>
            </div>
            <div className={styles.img}>
              <input type="text" placeholder="사진" ref={imageRef} />
            </div>
          </div>
        </div>
        <div className={styles["detail-form"]}>
          <textarea
            placeholder="당신의 이야기를 적어보세요..."
            ref={contentRef}
          ></textarea>
        </div>
        <button type="submit">제출</button>
      </div>
    </form>
  );
}
