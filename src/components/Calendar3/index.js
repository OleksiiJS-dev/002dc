import React, { useState } from "react"
import { DAYS, MONTHS } from "./consts"
import { CalenderBody, CalenderHead, HeadDay, SevenColGrid, StyledDay, Wrapper } from "./styled"
import { getDaysInMonth, range } from "./utilis"

export const Calender3 = ({ startingDate }) => {
    const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth())
    const [currentYear, setCurrentYear] = useState(startingDate.getFullYear())
    return (
        <Wrapper>

            <CalenderHead>
                <ion-icon name="arrow-back-outline"></ion-icon>
                <p>{MONTHS[currentMonth]} {currentYear}</p>
                <ion-icon name="caret-forward-outline"></ion-icon>

            </CalenderHead>

            <SevenColGrid>
                {DAYS.map((day) => (
                    <HeadDay>{day}</HeadDay>
                ))}
            </SevenColGrid>
            <CalenderBody>
                {range(getDaysInMonth(currentMonth,currentYear)).map((day) => (
                    <StyledDay>{day}</StyledDay>

                ))}
            </CalenderBody>
        </Wrapper>
    )
}