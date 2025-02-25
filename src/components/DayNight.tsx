import { useState } from "react";

function DayNight() {
    const [isDay, setIsDay] = useState(true)

    return(
        <div className={`${!isDay && "night"} daynight`}>
            <h1>{isDay ? "Day" : "Night"}</h1>
            <button onClick={() => setIsDay(!isDay)}>Change to {isDay ? "Night" : "Day"}</button>
        </div>
    )
}

export default DayNight;