import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Tab.module.css";

export default function Tab({ setMainText, mainText }) {
  const trending = "trending";
  const latest = "latest";
  const feed = "feed";
  return (
    <>
      <ul>
        <li
          className={
            mainText === trending
              ? `${styles["textLi"]} ${styles["active"]}`
              : styles["textLi"]
          }
          onClick={() => {
            setMainText(trending);
          }}
        >
          <FontAwesomeIcon icon={faArrowTrendUp} className={styles.icon} />
          트렌딩
        </li>
        <li
          className={
            mainText === latest
              ? `${styles["textLi"]} ${styles["active"]}`
              : styles["textLi"]
          }
          onClick={() => {
            setMainText(latest);
          }}
        >
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          최신
        </li>
        <li
          className={
            mainText === feed
              ? `${styles["textLi"]} ${styles["active"]}`
              : styles["textLi"]
          }
          onClick={() => {
            setMainText(feed);
          }}
        >
          <FontAwesomeIcon icon={faRss} className={styles.icon} />
          피드
        </li>
      </ul>
    </>
  );
}
