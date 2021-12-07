import {
    WiDaySunny, WiCloudy, WiDayCloudy, WiRainMix, WiStormShowers,
    WiShowers, WiSnowflakeCold, WiDayFog
} from "react-icons/wi";

export const switchWeatherIcon = (key) => {
    switch (key) {
        // 晴天
        case '1':
            return <WiDaySunny />;
        // 晴時多雲、陰天
        case '2':
        case '3':
            return <WiDayCloudy />;
        case '4':
        case '5':
        case '6':
        case '7':
            return <WiCloudy />;
        // 多雲陣雨、雨天
        case '8':
        case '9':
        case '10':
        case '11':
        case '12':
        case '13':
        case '14':
            return <WiRainMix />;
        // 雷雨
        case '15':
        case '16':
        case '17':
        case '18':
        case '19':
        case '21':
        case '22':
        case '33':
        case '34':
        case '35':
        case '36':
            return <WiStormShowers />;
        // 雨
        case '20':
            return <WiShowers />;
        // 雪
        case '23':
        case '37':
        case '38':
            return <wiSnowWind />;
        // 霧
        case '25':
        case '26':
        case '27':
        case '28':
        case '29':
        case '30':
        case '31':
        case '32':
        case '39':
        case '41':
            return <WiDayFog />;
        // 雪
        case '42':
            return <WiSnowflakeCold />;
        default:
            break;
    }
}