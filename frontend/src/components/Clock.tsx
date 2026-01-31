import { useState, useEffect } from 'react';
import thaiNumbersPhonetic from '../Scripts/thaiNumbersPhonetic';
import thaiHoursPhonetic from '../Scripts/thaiHoursPhonetic';
import thaiHours from '../Scripts/thaiHours';
import thaiNumbers from '../Scripts/thaiNumbers';

interface ClockProps {
    script: string;
    timezone: string;
}

export default function Clock({ script, timezone}: ClockProps) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function getTime() {
        let hours, minutes, seconds;

        if (timezone === 'local') {
            hours = time.getHours();
            minutes = time.getMinutes();
            seconds = time.getSeconds();
        } else {
            const bangkokTimeString = time.toLocaleString('en-US', { 
                timeZone: 'Asia/Bangkok',
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            const [h, m, s] = bangkokTimeString.split(':').map(Number);
            hours = h;
            minutes = m;
            seconds = s;
        }

        if (script === 'phonetic') {
            return {
                hours: thaiHoursPhonetic(hours),
                minutes: thaiNumbersPhonetic(minutes),
                seconds: thaiNumbersPhonetic(seconds)
            };
        } else {
            return {
                hours: thaiHours(hours),
                minutes: thaiNumbers(minutes),
                seconds: thaiNumbers(seconds)
            };
        }

    }

    const timeObj = getTime();

    return (
       <section className="text-center text-4xl sm:text-4xl md:text-5xl leading-tight whites-space-nowrap">
        { script === "phonetic" ? <h1 className='font-inter font-medium'>{timeObj.hours}<br />{timeObj.minutes} naa-tii<br />{timeObj.seconds}</h1> : null }
        { script === "thai" ? <h1 className='font-sarabun font-medium'>{timeObj.hours}<br />{timeObj.minutes} นาที<br />{timeObj.seconds}</h1> : null }
        </section>
    )
}