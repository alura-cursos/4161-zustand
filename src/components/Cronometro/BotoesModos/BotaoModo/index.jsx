import { useCronometroStore } from "../../../../store";
import styles from "./styles.module.css";
export default function BotaoModo({ children, modoBotao }) {
  const modoCronometro = useCronometroStore((estado) => estado.modoCronometro);
  const setModoCronometro = useCronometroStore((estado) => estado.setModoCronometro);

  const ativo = modoBotao.id === modoCronometro.id;

  function aoClicar() {
    setModoCronometro(modoBotao);
  }

  return (
    <button
      className={`
        ${styles["cronometer-modes__button"]}
        ${ativo ? styles["cronometer-modes__button--active"] : ""}
      `}
      onClick={aoClicar}
    >
      {children}
    </button>
  );
}
