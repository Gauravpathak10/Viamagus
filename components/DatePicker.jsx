import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerr = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <h2>DatePicker</h2>
            <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </>

    )
}

export default DatePickerr