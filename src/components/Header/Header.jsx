import styles from "./Header.module.css";
import Tab from "./Tab/Tab";
import Weather from "./Weather/Weather";

export default function Header({ setToggle, toggle, setMainText, mainText }) {
  return (
    <>
      <div className={styles.title}>
        <h1>velog</h1>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "돌아가기 " : "새 글 작성"}
        </button>
      </div>
      <div className={styles.title2}>
        {toggle ? undefined : (
          <Tab setMainText={setMainText} mainText={mainText} />
        )}
        {toggle ? undefined : <Weather />}
      </div>
    </>
  );
}
