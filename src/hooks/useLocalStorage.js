// import {useEffect, useState} from 'react'

// const PREFIX = 'codepen-clone-'

// export default function useLocalStorage(key, initialValue) {
//     const prefixedKey = PREFIX + key

//     const [value, setValue] = useState(()=>{
//         const jsonValue = localStorage.getItem(prefixedKey)
//         if(jsonValue != null) return JSON.parse(jsonValue)
        
//         if (typeof initialValue === 'function')
//             {
//                 return initialValue()
//             }    
//         else 
//             {
//                 return initialValue
//             }    
//     })

//     useEffect(()=>{
//         localStorage.setItem(prefixedKey, JSON.stringify(value))
//     }, [prefixedKey, value])

//   return [value, setValue]
// }




import { useEffect, useState } from 'react';

const PREFIX = 'codepen-clone-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  useEffect(() => {
    console.log(`Updating localStorage: ${prefixedKey} =`, value); // Debugging log
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
