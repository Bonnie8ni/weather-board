import React, { useState, useEffect, useCallback } from 'react';
import { switchWeatherIcon } from './AppConst';
import styles from './App.module.scss';

function App() {
    const [weatherList, setWeatherList] = useState([]);
    const getWeatherList = useCallback(() => {
        fetch(`http://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-07A53DAA-8E33-446E-88A4-477E71EFFD15`)
            .then((res) => res.json().then(json => (
                setWeatherList(json.records.location.map((location) => {
                    const data = location.weatherElement.map(el => ({
                        elementName: el.elementName,
                        startTime: el.time[0].startTime,
                        parameter: el.time[0].parameter,
                    }))

                    return {
                        name: location.locationName,
                        wiId: data[0].parameter.parameterValue,
                        wx: data[0].parameter.parameterName,
                        minT: `${data[2].parameter.parameterName}°${data[2].parameter.parameterUnit}`,
                        maxT: `${data[4].parameter.parameterName}°${data[4].parameter.parameterUnit}`,
                        ci: data[3].parameter.parameterName,
                        pop: `${data[1].parameter.parameterName}%`,
                    }
                }))
            )))
    }, [])

    useEffect(() => {
        getWeatherList()
    }, [getWeatherList])

    return (
        <div className={styles.app}>
            <div className={styles.title}>Weather</div>
            <div className={styles.content}>
                {
                    weatherList.map((weather, idx) => (
                        <div key={`card-${idx + 1}`} className={styles.box}>
                            <div className={styles.icon}>
                                {switchWeatherIcon(weather.wiId)}
                            </div>
                            <div className={styles.location}>{weather.name}</div>
                            <div>{weather.wx}</div>
                            <div className={styles.temperature}>{weather.minT}-{weather.maxT}</div>
                            <div>舒適度：{weather.ci}</div>
                            <div>降雨機率：{weather.pop}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
