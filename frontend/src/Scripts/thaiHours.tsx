export default function thaiHours(hour: number) {
    switch (hour) {
        case 1: return 'ตีหนึ่ง';
        case 2: return 'ตีสอง';
        case 3: return 'ตีสาม';
        case 4: return 'ตีสี่';
        case 5: return 'ตีห้า';
        case 6: return 'หกโมงเช้า';
        case 7: return 'เจ็ดโมงเช้า';
        case 8: return 'แปดโมงเช้า';
        case 9: return 'เก้าโมงเช้า';
        case 10: return 'สิบโมงเช้า';
        case 11: return 'สิบเอ็ดโมงเช้า';
        case 12: return 'เที่ยง';
        case 13: return 'บ่ายโมง';
        case 14: return 'บ่ายสองโมง';
        case 15: return 'บ่ายสามโมง';
        case 16: return 'สี่โมงเย็น';
        case 17: return 'ห้าโมงเย็น';
        case 18: return 'หกโมงเย็น';
        case 19: return 'หนึ่งทุ่ม';
        case 20: return 'สองทุ่ม';
        case 21: return 'สามทุ่ม';
        case 22: return 'สี่ทุ่ม';
        case 23: return 'ห้าทุ่ม';
        case 0: return 'เที่ยงคืน';
        default: return '';
    }
}