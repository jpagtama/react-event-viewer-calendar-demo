import React from 'react'
import styles from '../styles/Alert.module.css'

interface Props {
    toggleAlert: () => void,
    events: string[],
    date: string
}

const Alert = ({ toggleAlert, events, date }: Props) => {
    return (
        <div className={styles.alertContainer} onClick={toggleAlert} >
            <div className={styles.alertBox}>
                <div className={styles.alertHeader}>
                    <span className={styles.closeX}>x</span>
                    <p>Custom clickHandler prop allows developers to customize the experience even further</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentRow}>
                        <p className={styles.contentTitle} >Date: </p>
                        <p>{date}</p>
                    </div>
                    <div className={styles.contentRow}>
                        <p className={styles.contentTitle}>Events: </p>
                        <p>{events.length === 0 ? 'No events' : events.map((i, idx) => <span key={idx}>{i}{idx < events.length - 1 && ','} </span>)}</p>
                    </div>
                </div>
                <div className={styles.footer}>
                    <p style={{ fontWeight: 'bold' }}>Simply pass in your custom clickHandler function as so:</p>
                    <p>const yourClickHandler = (events: string[], date: string) =&gt; &#123; console.log(events, date) &#125;</p>
                    <p>&lt;Calendar clickHandler=&#123; yourClickHandler &#125; &#47;&gt;</p>
                </div>
            </div>
        </div>
    )
}

export default Alert