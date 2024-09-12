import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export default function Header({ setMainText, mainText }) {
  const trending = "trending";
  const latest = "latest";
  const feed = "feed";
  return (
    <>
      <h1>velog</h1>
      <ul>
        <li
          className={mainText === trending ? "textLi active" : "textLi"}
          onClick={() => {
            setMainText(trending);
          }}
        >
          <FontAwesomeIcon icon={faArrowTrendUp} className="icon" />
          트렌딩
        </li>
        <li
          className={mainText === latest ? "textLi active" : "textLi"}
          onClick={() => {
            setMainText(latest);
          }}
        >
          <FontAwesomeIcon icon={faClock} className="icon" />
          최신
        </li>
        <li
          className={mainText === feed ? "textLi active" : "textLi"}
          onClick={() => {
            setMainText(feed);
          }}
        >
          <FontAwesomeIcon icon={faRss} className="icon" />
          피드
        </li>
      </ul>
    </>
  );
}
