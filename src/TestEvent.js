import React from "react";

function TestEvent() {
    const hdlClick = (msg) => {
        alert(msg);
    }

    return (
        <div className="test-event">
            <button onClick={()=>hdlClick('Good Afternoon')}>Click me</button>
            <hr />
            <button onClick={()=>{alert(999)}}>Click me</button>
        </div>
    )
}

export default TestEvent