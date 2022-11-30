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
                    <p>Sending in a custom clickHandler prop, allows developers to customize the experience even further</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentRow}>
                        <p className={styles.contentTitle} >Date: </p>
                        <p>{date}</p>
                    </div>
                    <div className={styles.contentRow}>
                        <p className={styles.contentTitle}>Events: </p>
                        <p>{events.length === 0 ? 'No events' : events.map((i, idx) => <span key={idx}>{i} </span>)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert