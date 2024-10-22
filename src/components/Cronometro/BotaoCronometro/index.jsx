import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";
import audioPlaySom from "/src/assets/sons/play.wav";
import audioPauseSom from "/src/assets/sons/pause.mp3";


export default function BotaoCronometro() {
  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button className={styles["cronometer__primary-button"]}>
        <img className={styles["cronometer__primary-button-icon"]} src={play_arrowImg} alt="" />
        <span>Começar</span>
      </button>
    </div>
  );
}
