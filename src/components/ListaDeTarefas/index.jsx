import styles from "./styles.module.css";
import moreImg from "/src/assets/imgs/more.svg";
import checkImg from "/src/assets/imgs/check.svg";
import trashImg from "/src/assets/imgs/trash.svg";
import deleteImg from "/src/assets/imgs/delete.png";
import closeImg from "/src/assets/imgs/close.png";
import saveImg from "/src/assets/imgs/save.png";
import add_circleImg from "/src/assets/imgs/add_circle.png";

export default function ListaDeTarefas() {
  return (
    <section className={styles["tasks"]}>
      <div className={styles["tasks__task-content"]}>
        <section className={styles["tasks__active-task"]}>
          <p className={styles["tasks__active-task-label"]}>#Em andamento:</p>
          <p className={styles["tasks__active-task-description"]}></p>
        </section>

        <section className={styles["task-header"]}>
          <h2 className={styles["task-header__heading"]}>Lista de tarefas:</h2>

          <div className={styles["dropdown"]}>
            <button className={styles["dropdown__button-more"]}>
              <img src={moreImg} alt="Opções da lista de tarefas" />
            </button>

            <ul className={styles["dropdown__ul"]}>
              <li className={styles["dropdown__li"]}>
                <button className={styles["dropdown__button"]} id="btn-remover-concluidas">
                  <img src={checkImg} alt="" />
                  Limpar tarefas concluídas
                </button>
              </li>

              <li className={styles["dropdown__li"]}>
                <button className={styles["dropdown__button"]} id="btn-remover-todas">
                  <img src={trashImg} alt="" />
                  Limpar todas as tarefas
                </button>
              </li>
            </ul>
          </div>
        </section>

        <ul className={styles["tasks__task-list"]}></ul>

        <form
          className={`
            ${styles["form-add-task"]}
            ${styles["form-add-task--hidden"]}
          `}
          aria-hidden="true"
        >
          <div className={styles["form-add-task__field"]}>
            <label className={styles["form-add-task__label"]}>Adicionando tarefa</label>
            <textarea
              required
              rows="4"
              className={styles["form-add-task__textarea"]}
              placeholder="No que você está trabalhando?"
            ></textarea>
          </div>

          <footer className={styles["form-add-task__footer"]}>
            <button
              type="button"
              className={`
                ${styles["form-add-task__footer-button"]}
                ${styles["form-add-task__footer-button--delete"]}
              `}
            >
              <img src={deleteImg} alt="" /> Deletar
            </button>

            <div className={styles["splitter"]}></div>

            <button
              type="button"
              className={`
                ${styles["form-add-task__footer-button"]}
                ${styles["form-add-task__footer-button--cancel"]}
              `}
            >
              <img src={closeImg} alt="" /> Cancelar
            </button>
            <button
              className={`
                ${styles["form-add-task__footer-button"]}
                ${styles["form-add-task__footer-button--confirm"]}
              `}
            >
              <img src={saveImg} alt="" /> Salvar
            </button>
          </footer>
        </form>

        <button className={styles["tasks__button--add-task"]}>
          <img src={add_circleImg} alt="" /> Adicionar nova tarefa
        </button>
      </div>
    </section>
  );
}
