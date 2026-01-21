import { useState, useEffect } from 'react';
import thaiNumbersPhonetic from '../Scripts/thaiNumbersPhonetic';
import thaiHoursPhonetic from '../Scripts/thaiHoursPhonetic';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const h = thaiHoursPhonetic(time.getHours());
    const m = thaiNumbersPhonetic(time.getMinutes());
    const s = thaiNumbersPhonetic(time.getSeconds());

    return (
        <h1>{h} {m} naa-tii {s}</h1>
    )
}