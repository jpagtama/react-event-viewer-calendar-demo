import React from 'react'

interface CSSModuleProps {
    classes: {
        [key: string]: string
    }
}

const Header = (props: CSSModuleProps) => {
    const styles = props.classes
    return (
        <div className={styles.header} ><h1>react-event-viewer-calendar</h1></div>
    )
}

export default Header