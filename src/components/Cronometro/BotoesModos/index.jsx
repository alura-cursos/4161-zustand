import styles from "./styles.module.css";

import BotaoModo from "./BotaoModo";
import { MODO_CRONOMETRO } from "../../../store";

export default function BotoesModos() {
  const modos = [
    MODO_CRONOMETRO.FOCO,
    MODO_CRONOMETRO.DESCANSO_CURTO,
    MODO_CRONOMETRO.DESCANSO_LONGO,
  ];

  return (
    <ul className={styles["cronometer-modes"]}>
      {modos.map((modo) => (
        <li key={modo.id}>
          <BotaoModo modoBotao={modo}>{modo.nome}</BotaoModo>
        </li>
      ))}
    </ul>
  );
}
