"use client"
import React, { useState } from 'react';


const Counter = () => {
    const [state,setState] = useState(0)

    return (
        <div>

            <h3> Default value: {state} </h3>
            <button  onClick={()=> setState(state +1)} className='btn mx-4 px-3 py-2 bg-slate-600 '>Increase</button>
            <button onClick={() => setState(state - 1)} className='btn px-3 py-2 bg-slate-600'>Decrease</button>
            
        </div>
    );
};

export default Counter;