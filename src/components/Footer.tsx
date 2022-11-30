import React from 'react'
import { IconContext } from 'react-icons/lib';
import { FaGithub, FaNpm, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

interface CSSModuleProps {
    classes: {
        [key: string]: string
    }
}

const Footer = (props: CSSModuleProps) => {
    const styles = props.classes
    return (
        <div className={styles.footer}>
            <IconContext.Provider value={{ color: "#121212", size: "2rem" }}>
                <div style={{ "display": "flex", "gap": "1rem" }}>
                    <FaGithub />
                    <FaReact />
                    <SiTypescript />
                    <FaNpm />
                </div>
            </IconContext.Provider>

            <a className={styles.link} href="https://github.com/jpagtama/react-event-viewer-calendar" target="_blank" rel="noopener noreferrer" >View the code on GitHub</a>

            <span className={styles.crDetails}><a className={styles.link} href="https://julianpagtama.com" target="_blank" rel="noopener noreferrer" >Julian Pagtama</a> &copy; {new Date().getFullYear()}</span>
        </div>
    )
}

export default Footer