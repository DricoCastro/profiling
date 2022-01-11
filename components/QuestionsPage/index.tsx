import ProfilingTest from "@data/dataHome";
import styles from './Index.module.css'

const itemsProfilingTest = ProfilingTest.questions.map((questions) =>
    <div className={styles.cardQuestions}>
        <div className={styles.holderNumberAndAsk} key={questions.key}>
            <h4 className={styles.number}>{questions.number}.</h4>
            <h4 className={styles.ask}>{questions.ask}</h4>
        </div>
        <div className={styles.holderOptions}>
            <div className={styles.holderOptionA}>
                <input type={'checkbox'} className={styles.buttonOption} />
                <h4 className={styles.optionA}>{questions.optionA}
                </h4>
            </div>
            <div className={styles.holderOptionB}>
                <input type={'checkbox'} className={styles.buttonOption} />
                <h4 className={styles.optionB}>{questions.optionB}</h4>
            </div>
        </div>
    </div>
)

export default function QuestionsTest() {
    return (
        <div className={styles.body}>
            <div className={styles.holderTitle}>
                <h1>Mapeamento de Perfil</h1>
            </div>
            {itemsProfilingTest}
        </div>
    )
}