
import { Container, Rows } from 'lucide-react'
import React, { useState } from 'react'

export const Login = () => {
let[set ,update]=useState({
uname:'',
pname:'',
sname:''

})
  const handleChange = (e) => {
  let olddata = {...set};
  let input =e.target.name;
  let inpValue =e.target.value;
  olddata[input]=inpValue;
  update(inpValue);

  };

  let sumbit =()=>{
    console.log(set.name)
  }
  return (
    <div className='grid grid-rows-3 gap-6 items-center justify-center mt-4 bg-[#817a7a]'>
      <div>
        <input type='text' onChange={handleChange} value={set.uname} placeholder='userName' name='uname'/>
      </div>
       <div>
        <input type='text' onChange={handleChange} value={set.pname} placeholder='userName' name='pname'/>
      </div>
        <div>
        <input type='text' onChange={handleChange} value={set.sname}  placeholder='userName' name='sname'/>
      </div>
<button onClick={sumbit}>sumit</button>
    </div>
  )
}


// import React, { useState } from 'react'

// export const Login = () => {
//   const [value, setValue] = useState('');

//   function change(e) {
//     setValue(e.target.value);
//     console.log(e.target.value);
//   }

//   return (
//     <div>
//       Login
//       <br />
//       <input
//         type="text"
//         value={value}
//         placeholder="Enter the number"
//         onChange={change}
//       />

//       <div className="w-10 h-10 bg-amber-400 mt-2">
//         {value} 
//       </div>
//       <button></button>
//     </div>
//   )
// }


// import React, { useState } from 'react'

// export const Login = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [displayValue, setDisplayValue] = useState('');

//   function handleChange(e) {
//     setInputValue(e.target.value); 
//   }

//   function handleClick() {
//     setDisplayValue(inputValue); 
//   }

//   return (
//     <div>
//       Login
//       <br />
//       <input
//         type="text"
//         value={inputValue}
//         placeholder="Enter the number"
//         onChange={handleChange}
//       />
//       <button 
//         className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
//         onClick={handleClick}
//       >
//         Show Value
//       </button>

//       <div className="w-40 h-10 bg-amber-400 mt-4 flex items-center justify-center">
//         {displayValue}
//       </div>
//     </div>
//   )
// }



// import React, { useState } from 'react'

// export const Login = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [displayValue, setDisplayValue] = useState('');

//   // Input box change handle karega
//   function handleChange(e) {
//     setInputValue(e.target.value);
//   }

//   // Button click hone par div me show hoga
//   function handleClick() {
//     setDisplayValue(inputValue);
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-bold">Login</h2>
      
//       <input
//         type="text"
//         value={inputValue}
//         placeholder="Enter the number"
//         onChange={handleChange}
//         className="border px-2 py-1 rounded"
//       />

//       <button 
//         className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
//         onClick={handleClick}
//       >
//         Show in Div
//       </button>

//       {/* Real-time value */}
//       <div className="w-40 h-10 bg-green-300 mt-4 flex items-center justify-center">
//         Real-time: {inputValue}
//       </div>

//       {/* Button click ke baad value */}
//       <div className="w-40 h-10 bg-amber-400 mt-2 flex items-center justify-center">
//         On Button Click: {displayValue}
//       </div>
//     </div>
//   )
// }
