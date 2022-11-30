import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styles from './styles/Calendar.module.css';

const App = () => {

  return (
    <div className={styles.container} >
      <Header classes={styles} />
      <Main classes={styles} />
      <Footer classes={styles} />
    </div>
  )
}

export default App
