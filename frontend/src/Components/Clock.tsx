import { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const checkTime = (i: number): string => {
        return i < 10 ? "0" + i : i.toString();
    };

    const h = time.getHours();
    const m = checkTime(time.getMinutes());
    const s = checkTime(time.getSeconds());

    return (
        <div>{h}:{m}:{s}</div>
    )
}