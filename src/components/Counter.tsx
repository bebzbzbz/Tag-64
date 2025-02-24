import { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);

    return(
        <div className="counter">
            <div>
                <button onClick={() => setValue(prev => prev + 1)}>+</button>
                <p>{value}</p>
                <button onClick={() => setValue(prev => prev - 1)}>-</button>
            </div>
            <button onClick={() => setValue(0)}>Reset</button>
        </div>
    )
}

export default Counter;