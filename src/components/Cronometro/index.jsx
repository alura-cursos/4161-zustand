import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";

export default function Cronometro() {
  return (
    <div className={styles["cronometer"]}>
      <BotoesModos />

      <Timer />

      <SwitchMusica />

      <BotaoCronometro />
    </div>
  );
}
