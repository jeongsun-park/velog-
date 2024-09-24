import styles from "./Weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function Delete() {
  return (
    <>
      <button>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </>
  );
}
