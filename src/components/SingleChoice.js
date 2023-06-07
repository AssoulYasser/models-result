import React, { useState } from 'react'

function SingleChoice({title, list, value, setValue, className, elementContainerClassName}) {

    const [elements, setElements] = useState(list);

    // const [element, setValue] = useState(list[0]);

    return (
        <div className={`grid gap-3 justify-evenly items-center relative
                                        px-3 py-4 border border-opacity-25 border-[#404040] rounded-[10px] ${className}`}>

                                <span className='absolute bg-white px-1 left-0 top-0 transform -translate-y-1/2 mx-3 font-medium text-[14px]'>
                                    {title}
                                </span>

                                {elements.map( (element) => {
                                        return <div className={`flex gap-3 justify-center items-center cursor-pointer `}
                                                    onClick={() => {setValue(element)}}>
                                                    <div className={`h-4 w-4 rounded-full border-[2px] border-zinc-500 flex items-center justify-center
                                                                    ${element === value ? 'border-primary' : '' }
                                                                    ${elementContainerClassName}`}>
                                                        <div className={`h-[8px] w-[8px] rounded-full bg-primary ${element === value  ? 'visible' : 'hidden'}`}/>
                                                    </div>
                                                        
                                                    <p className='text-[12px] select-none'>
                                                        {element}
                                                    </p>
                                                
                                                </div>
                                    })
                                }

        </div>
    )
}

export default SingleChoice
