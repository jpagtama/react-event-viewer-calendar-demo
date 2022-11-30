import { useState, useRef, useEffect } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import Calendar from 'react-event-viewer-calendar'
import { IconContext } from 'react-icons/lib';
import Form from './Form'

interface CSSModuleProps {
    classes: {
        [key: string]: string
    },
    clickHandler: (events?: string[], date?: string) => void
}

interface CalendarStyleObject {
    calendar: {
        border: boolean,
        borderColor: string | undefined,
    },
    header: {
        background: string | undefined,
        fontColor: string | undefined,
        fontFamily: string | undefined,
    },
    dates: {
        border: boolean,
        background: string | undefined,
        borderColor: string | undefined,
        numberColor: string | undefined,
        todayBadgeColor: string | undefined,
        todayNumberColor: string | undefined,
        outsideMonth: {
            background: string | undefined,
            fontColor: string | undefined
        }
    },
    events: {
        background: string | undefined,
        fontColor: string | undefined
    }
}

const Main = (props: CSSModuleProps) => {
    const styles = props.classes

    const calStyles = {
        calendar: {
            border: true,
            borderColor: undefined,
        },
        header: {
            background: undefined,
            fontColor: undefined,
            fontFamily: undefined,
        },
        dates: {
            border: true,
            background: undefined,
            borderColor: undefined,
            numberColor: undefined,
            todayBadgeColor: undefined,
            todayNumberColor: undefined,
            outsideMonth: {
                background: undefined,
                fontColor: undefined
            }
        },
        events: {
            background: undefined,
            fontColor: undefined
        }
    }

    const [copyToClip, setCopyToClip] = useState(false);
    const [calendarStyles, setCalendarStyles] = useState<CalendarStyleObject>(calStyles)
    const [updateStyles, setUpdateStyles] = useState(false)
    const calendarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (updateStyles) {
            calendarRef.current?.scrollIntoView({ behavior: 'smooth' })
            setUpdateStyles(false)
        }
    }, [updateStyles])

    const today = new Date()
    // const current_day = today.getDate()
    const current_year = today.getFullYear()
    const current_month = today.getMonth() + 1

    const events = [
        { date: new Date(`${current_year}/${current_month}/14`), event: ['Anniversary', 'Haircut appointment'] },
        { date: new Date(`${current_year}/${current_month}/25`), event: ['Bob\'s bday'] },
        { date: new Date(`${current_year}/${current_month}/10`), event: ['Alice\'s graduation', 'Pick up flowers', 'Kayaking day'] },
        { date: new Date(`${current_year}/${current_month}/2`), event: ['Cafe grand opening'] },
        { date: new Date(`${current_year}/${current_month}/27`), event: ['Bob\'s play', 'Family dinner', 'Game Night'] },
    ]

    const calendarStylesHandler = (stylesObj: CalendarStyleObject, scroll?: boolean) => {
        if (scroll === undefined || scroll === true) setUpdateStyles(true)
        setCalendarStyles(stylesObj)
    }

    const clickHandler = (events?: string[], date?: string) => {
        props.clickHandler(events, date)
    }

    const copyToClipEndHandler = () => {
        setCopyToClip(false);
    }

    const copyHandler = () => {
        navigator.clipboard.writeText("npm install react-event-viewer-calendar");
        setCopyToClip(true);
    }

    return (
        <div className={styles.body}>
            <div className={styles.demoContainer}>
                <div ref={calendarRef} className={styles.calendarContainer}>
                    <Calendar clickHandler={clickHandler} events={events} styles={calendarStyles} />
                </div>
                <div className={styles.demoForm} >
                    <p className={styles.formTitle}>Styling Options</p>
                    <div className={`${styles.codeBlock}`} style={{ margin: '0 1em' }}>
                        <p>const styles = &#123;</p>
                        <p>&nbsp; &nbsp; calendar: &#123;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; border: {calendarStyles.calendar.border?.toString() || 'undefined'}</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; borderColor: {calendarStyles.calendar.borderColor || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &#125;,</p>

                        <p>&nbsp; &nbsp; header: &#123;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; background: {calendarStyles.header.background || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; fontColor: {calendarStyles.header.fontColor || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; fontFamily: {calendarStyles.header.fontFamily || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &#125;,</p>

                        <p>&nbsp; &nbsp; dates: &#123;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; border: {calendarStyles.dates.border?.toString() || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; background: {calendarStyles.dates.background || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; borderColor: {calendarStyles.dates.borderColor || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; numberColor: {calendarStyles.dates.numberColor || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; todayBadgeColor: {calendarStyles.dates.todayBadgeColor || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; todayNumberColor: {calendarStyles.dates.todayNumberColor || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; outsideMonth: &#123; </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; background: {calendarStyles.dates.outsideMonth.background || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fontColor: {calendarStyles.dates.outsideMonth.fontColor || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125; </p>
                        <p>&nbsp; &nbsp; &#125;,</p>

                        <p>&nbsp; &nbsp; events: &#123;</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; background: {calendarStyles.events.background || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; fontColor: {calendarStyles.events.fontColor || 'undefined'} </p>
                        <p>&nbsp; &nbsp; &#125;</p>

                        <p>&#125;</p>
                    </div>
                    <Form stylesHandler={calendarStylesHandler} />
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.detailsSection} >
                        <span className={styles.detailsTitle} >About</span>
                        <p className={styles.aboutDesc}>Display your events in this simple, easy-to-use calendar events-viewer for React.</p>
                    </div>

                    <div className={styles.detailsSection} >
                        <span className={styles.detailsTitle} >Install with npm</span>
                        <div className={`${styles.codeBlock} ${styles.npmBlock} ${copyToClip && styles.copyToClip}`} onClick={copyHandler} onAnimationEnd={copyToClipEndHandler}>
                            <p style={{ color: '#39FF14' }} >npm install react-event-viewer-calendar</p>
                            <IconContext.Provider value={{ color: "gainsboro" }}>
                                <FaRegCopy />
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div className={styles.detailsSection} >
                        <span className={styles.detailsTitle} >Usage</span>
                        <div className={`${styles.codeBlock}`} >
                            <p>import Calendar from 'react-event-viewer-calendar'</p>
                            <p>&nbsp;</p>
                            <p style={{ color: "slategray" }}>&#47;&#47; &nbsp;passing in a styles object is optional</p>
                            <p>&lt;Calendar styles=&#123;styles&#125; &#47;&gt; </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main