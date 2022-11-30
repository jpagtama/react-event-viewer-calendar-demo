import React from 'react'

interface CSSModuleProps {
    classes: {
        [key: string]: string
    }
}

const Header = (props: CSSModuleProps) => {
    const styles = props.classes
    return (
        <div className={styles.header} >
            <h1>react-event-viewer-calendar</h1>
            <div className={styles.subHeader}>
                <span className={styles.subHeader1}>light-weight &bull;</span>
                <span className={styles.subHeader2}>responsive &bull;</span>
                <span className={styles.subHeader3}>customizable</span>
            </div>
        </div>
    )
}

export default Header