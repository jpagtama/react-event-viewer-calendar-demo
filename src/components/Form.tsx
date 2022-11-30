import React, { useState } from 'react'
import styles from '../styles/Form.module.css'

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

interface Props {
    stylesHandler: (StylesObj: CalendarStyleObject, scroll?: boolean) => void
}

const Demo = (props: Props) => {

    const [border, setBorder] = useState('true')
    const [calendarBorderColor, setCalendarBorderColor] = useState('')
    const [headerColor, setHeaderColor] = useState('')
    const [headerFontColor, setHeaderFontColor] = useState('')
    const [headerFontFamily, setHeaderFontFamiy] = useState('')
    const [dateBorder, setDateBorder] = useState('true')
    const [dateBackgroundColor, setDateBackgroundColor] = useState('')
    const [dateBorderColor, setDateBorderColor] = useState('')
    const [dayNumberColor, setDayNumberColor] = useState('')
    const [currentDayBadgeColor, setCurrentDayBadgeColor] = useState('')
    const [currentDayNumberColor, setCurrentDayNumberColor] = useState('')
    const [outsideMonthBackground, setOutsideMonthBackground] = useState('')
    const [outsideMonthFontColor, setOutsideMonthFontColor] = useState('')
    const [eventsBackground, setEventsBackground] = useState('')
    const [eventsFontColor, setEventsFontColor] = useState('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        switch (e.target.id) {
            case 'calendarBorder':
                setBorder(e.target.value)
                break
            case 'calendarBorderColor':
                setCalendarBorderColor(e.target.value)
                break
            case 'headerColor':
                setHeaderColor(e.target.value)
                break
            case 'headerFontColor':
                setHeaderFontColor(e.target.value)
                break
            case 'headerFontFamily':
                setHeaderFontFamiy(e.target.value)
                break
            case 'dateBorder':
                setDateBorder(e.target.value)
                break
            case 'dateBorderColor':
                setDateBorderColor(e.target.value)
                break
            case 'dateBackgroundColor':
                setDateBackgroundColor(e.target.value)
                break
            case 'dayNumberColor':
                setDayNumberColor(e.target.value)
                break
            case 'currentDayBadgeColor':
                setCurrentDayBadgeColor(e.target.value)
                break
            case 'currentDayNumberColor':
                setCurrentDayNumberColor(e.target.value)
                break
            case 'outsideMonthBackground':
                setOutsideMonthBackground(e.target.value)
                break
            case 'outsideMonthFontColor':
                setOutsideMonthFontColor(e.target.value)
                break
            case 'eventsBackground':
                setEventsBackground(e.target.value)
                break
            case 'eventsFontColor':
                setEventsFontColor(e.target.value)
                break
            default:
                break
        }
    }

    const createStylesObj = () => {
        return {
            calendar: {
                border: border === 'false' ? false : true,
                borderColor: calendarBorderColor,
            },
            header: {
                background: headerColor,
                fontColor: headerFontColor,
                fontFamily: headerFontFamily,
            },
            dates: {
                border: dateBorder === 'false' ? false : true,
                background: dateBackgroundColor,
                borderColor: dateBorderColor,
                numberColor: dayNumberColor,
                todayBadgeColor: currentDayBadgeColor,
                todayNumberColor: currentDayNumberColor,
                outsideMonth: {
                    background: outsideMonthBackground,
                    fontColor: outsideMonthFontColor
                }
            },
            events: {
                background: eventsBackground,
                fontColor: eventsFontColor
            }
        }
    }

    const resetStylesHandler = () => {

        setBorder('true')
        setCalendarBorderColor('')
        setHeaderColor('')
        setHeaderFontColor('')
        setHeaderFontFamiy('')
        setDateBorder('true')
        setDateBackgroundColor('')
        setDateBorderColor('')
        setDayNumberColor('')
        setCurrentDayBadgeColor('')
        setCurrentDayNumberColor('')
        setOutsideMonthBackground('')
        setOutsideMonthFontColor('')
        setEventsBackground('')
        setEventsFontColor('')

        const styles = {
            calendar: {
                border: true,
                borderColor: '',
            },
            header: {
                background: '',
                fontColor: '',
                fontFamily: '',
            },
            dates: {
                border: true,
                background: '',
                borderColor: '',
                numberColor: '',
                todayBadgeColor: '',
                todayNumberColor: '',
                outsideMonth: {
                    background: '',
                    fontColor: ''
                }
            },
            events: {
                background: '',
                fontColor: ''
            }
        }

        props.stylesHandler(styles, false)
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const styles = createStylesObj()

        props.stylesHandler(styles)
    }
    return (
        <form className={styles.container} onSubmit={submitHandler}>
            <div className={`${styles.calendarSection} ${styles.calendarSection}`} >
                <span className={styles.formSectionTitle}>Calendar</span>
                <label htmlFor="calendarBorder">Border:</label>
                <select id="calendarBorder" onChange={changeHandler} value={border}>
                    <option value="true" >true</option>
                    <option value="false">false</option>
                </select>
                <label htmlFor="calendarBorderColor">Border Color:</label>
                <input id="calendarBorderColor" type="text" value={calendarBorderColor} onChange={changeHandler} placeholder="header font color" />
            </div>
            <div className={`${styles.calendarSection} ${styles.headerSection}`} >
                <span className={styles.formSectionTitle}>Header</span>
                <label htmlFor="headerColor">Background:</label>
                <input id="headerColor" type="text" value={headerColor} onChange={changeHandler} placeholder="header background color" />
                <label htmlFor="headerFontColor">Font Color:</label>
                <input id="headerFontColor" type="text" value={headerFontColor} onChange={changeHandler} placeholder="header font color" />
                <label htmlFor="headerFontFamily">Font Family:</label>
                <input id="headerFontFamily" type="text" value={headerFontFamily} onChange={changeHandler} placeholder="month title font family" />
            </div>
            <div className={`${styles.calendarSection} ${styles.datesSection}`} >
                <span className={styles.formSectionTitle}>Dates</span>
                <div className={styles.datesFormContent}>
                    <div className={styles.formPart}>
                        <label htmlFor="dateBorder">Border:</label>
                        <select id="dateBorder" onChange={changeHandler} value={dateBorder}>
                            <option value="true" >true</option>
                            <option value="false">false</option>
                        </select>
                        <label htmlFor="dateBackgroundColor">Background:</label>
                        <input id="dateBackgroundColor" type="text" value={dateBackgroundColor} onChange={changeHandler} placeholder="day tiles background color" />
                        <label htmlFor="dateBorderColor">Border Color:</label>
                        <input id="dateBorderColor" type="text" value={dateBorderColor} onChange={changeHandler} placeholder="day tiles border color" />
                        <label htmlFor="outsideMonthBackground">Outside Month Background:</label>
                        <input id="outsideMonthBackground" type="text" value={outsideMonthBackground} onChange={changeHandler} placeholder="outer-month background color" />
                    </div>
                    <div className={styles.formPart}>
                        <label htmlFor="dayNumberColor">Number Color:</label>
                        <input id="dayNumberColor" type="text" value={dayNumberColor} onChange={changeHandler} placeholder="day tiles number color" />
                        <label htmlFor="currentDayBadgeColor">Today Badge Color:</label>
                        <input id="currentDayBadgeColor" type="text" value={currentDayBadgeColor} onChange={changeHandler} placeholder="current day badge color" />
                        <label htmlFor="currentDayNumberColor">Today Number Color:</label>
                        <input id="currentDayNumberColor" type="text" value={currentDayNumberColor} onChange={changeHandler} placeholder="current day number color" />
                        <label htmlFor="outsideMonthFontColor">Outside Month Font Color:</label>
                        <input id="outsideMonthFontColor" type="text" value={outsideMonthFontColor} onChange={changeHandler} placeholder="outer-month font color" />
                    </div>
                </div>
            </div>
            <div className={`${styles.calendarSection}`} >
                <span className={styles.formSectionTitle}>Events</span>
                <label htmlFor="eventsBackground">Background:</label>
                <input id="eventsBackground" type="text" value={eventsBackground} onChange={changeHandler} placeholder="events background color" />
                <label htmlFor="eventsFontColor">Font Color:</label>
                <input id="eventsFontColor" type="text" value={eventsFontColor} onChange={changeHandler} placeholder="events font color" />
            </div>
            <div className={styles.buttonsArea}>
                <button type="button" onClick={resetStylesHandler} className={styles.submitButton} >Reset Styles</button>
                <button type="submit" className={styles.submitButton} >Update</button>
            </div>
        </form>
    )
}

export default Demo