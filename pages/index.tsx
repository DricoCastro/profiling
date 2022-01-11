import styles from '../styles/Home.module.css';
import Header from '@components/Head/head';
import QuestionsTest from '@components/QuestionsPage';


export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <QuestionsTest />
    </div>
  )
}
