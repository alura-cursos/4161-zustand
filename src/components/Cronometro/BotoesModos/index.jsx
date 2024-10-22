import styles from "./styles.module.css";

import BotaoModo from "./BotaoModo";

export default function BotoesModos() {
  const modo = {
    id: "foco",
    nome: "Foco",
    frase: ["Otimize sua produtividade,", "mergulhe no que importa."],
    tempoInicialEmSegundos: 30,
  };

  return (
    <ul className={styles["cronometer-modes"]}>
      <li key={modo.id}>
        <BotaoModo modoBotao={modo}>{modo.nome}</BotaoModo>
      </li>
    </ul>
  );
}
