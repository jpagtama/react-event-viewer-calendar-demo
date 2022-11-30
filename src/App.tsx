import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Alert from './components/Alert'
import styles from './styles/Calendar.module.css'

const App = () => {
  const [alert, setAlert] = useState(false)
  const [events, setEvents] = useState<string[]>([])
  const [date, setDate] = useState('')

  const toggleAlert = (events?: string[], date?: string) => {
    setAlert(!alert)
    if (events && date) {
      setEvents(events)
      setDate(date)
    }
  }

  return (
    <>
      {alert && <Alert toggleAlert={toggleAlert} events={events} date={date} />}
      <div className={styles.container} >
        <Header classes={styles} />
        <Main classes={styles} clickHandler={toggleAlert} />
        <Footer classes={styles} />
      </div>
    </>
  )
}

export default App
