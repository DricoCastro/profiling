import ProfilingTest from "@data/dataHome";
import styles from './Index.module.css'


const itemsProfilingTest = ProfilingTest.questions.map((questions) =>
    <div className={styles.holderQuestions}>
        <div className={styles.holderNumberAndAsk}>
            <h3 className={styles.number}>{questions.number}.</h3>
            <h3 className={styles.ask}>{questions.ask}</h3>
        </div>
        <div className={styles.holderOptions}>
            <div className={styles.holderOptionA}>
                <button className={styles.buttonOption} />
                <h4 className={styles.optionA}>{questions.optionA}
                </h4>
            </div>
            <div className={styles.holderOptionB}>
                <button className={styles.buttonOption} />
                <h4 className={styles.optionB}>{questions.optionB}</h4>
            </div>
        </div>
    </div>
)

export default function QuestionsTest() {
    return (
        <div className={styles.body}>
            {itemsProfilingTest}
        </div>
    )
}