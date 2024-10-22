import styles from "./styles.module.css";

export default function Rodape() {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer__text"]}>
        Projeto fictício e sem fins comerciais. Imagens geradas por IA no Adobe Firefly.
        Desenvolvido por Alura.
      </p>
    </footer>
  );
}
