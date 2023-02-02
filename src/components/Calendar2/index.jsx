import React, { useState } from "react"
import { monthNames } from "./consts";

import { Header, PickerWrapper, Body, SevenColGrid } from "./styled"
import { getNumberOfDaysInMonth, getSortedDays, range } from "./utilis";

function DatePiker() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth((prev) => prev + 1)
        } else {
            setCurrentMonth(0)
            setCurrentYear((prev) => prev + 1)
        }
    }

    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth((prev) => prev - 1)
        } else {
            setCurrentMonth(11)
            setCurrentYear((prev) => prev - 1)
        }
    }

    return (
        <PickerWrapper>
            <Header>
                <ion-icon
                    onClick={prevMonth}
                    name="arrow-back-outline"></ion-icon>
                <p>
                    {monthNames[currentMonth]}
                    {currentYear}
                </p>
                <ion-icon
                    onClick={nextMonth}
                    name="arrow-forward-outline"></ion-icon>
            </Header>
            <Body>
                <SevenColGrid heading>
                    {getSortedDays().map((day) =>
                        <p>{day}</p>
                    )}

                </SevenColGrid>
                <SevenColGrid>
                    {range(
                        1,
                        getNumberOfDaysInMonth(currentYear, currentMonth)
                        + 1
                    ).map((day) => (
                        <p>{day}</p>
                    ))}
                </SevenColGrid>
            </Body>


        </PickerWrapper>
    )
};
export default DatePiker