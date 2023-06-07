import React, { useState, useEffect } from 'react';

function MultiChoices({ title, list, className, setValue }) {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    if (list != null) {
      const map = new Map(list.map(value => [value, false]));
      setElements(map);
    }
  }, [list]);

  console.log(elements);

  return (
    <div
      className={`grid gap-3 justify-evenly items-center relative px-3 py-4 border border-opacity-25 border-[#404040] rounded-[10px] ${className}`}
    >
      <span className='absolute bg-white px-1 left-0 top-0 transform -translate-y-1/2 mx-3 font-medium text-[14px]'>
        {title}
      </span>

      {Array.from(elements).map(([key, value]) => (
        <div
          className={`hover:bg-[#dfdddd] rounded-md select-none cursor-pointer text-center text-[12px] ${
            value ? 'border-2 border-zinc-600 shadow-md p-2' : 'p-[10px]'
          }`}
          onClick={() => {
            setValue(key);
            setElements(prevElements => {
              const newElements = new Map(prevElements);
              newElements.set(key, !value);
              return newElements;
            });
          }}
          key={key}
        >
          <p>{key}</p>
        </div>
      ))}
    </div>
  );
}

export default MultiChoices;
