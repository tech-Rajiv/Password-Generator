import { useState, useCallback, useEffect,useRef} from 'react';
function App() {
  const [length, setLength] = useState(5);
  const [numerAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numerAllowed) str += '1234567890';
    if (charAllowed) str += '@$%&*!';
    for (let i = 0; i <= length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setpassword(pass);
  }, [length, numerAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length,charAllowed,numerAllowed]);

  const handleLength = (e) => {
    setLength(e.target.value);
  };
  const handleChange = (e) => {
    setpassword(e.target.value);
  };

 const newRef = useRef(null)
 const handelCopy = () =>{
   newRef.current?.select()
   window.navigator.clipboard.writeText(password)
 }

  return (
    <>
      <section className="h-screen w-full px-5 py-5 text-center text-white m-auto bg-gray-900">
        <h1>password genrator</h1>
        <div className=" text-black my-2 flex justify-center">
          <input
            className="px-3"
            type="text"
            ref = {newRef}
            onChange={handleChange}
            value={password}
          />
          <button className="px-3 py-1 border text-white"
          onClick={handelCopy}
          >copy</button>
        </div>
        <div className="my-2 flex justify-center">
          <input
            className="w-[80px]"
            type="range"
            min="6" max="20"
            value={length}
            onChange={handleLength}
          />
          length : {length}
        </div>
        <div className="numberallow">
          <input type="checkbox" 
         //value={numerAllowed}
          onChange = {()=>setNumberAllowed((prev)=>!prev)}
          /><label> Numbers</label>
        </div>
        <div className="char">
        <input type="checkbox" 
        onChange={()=>setCharAllowed((prev)=>!prev)}
        /><label>  Characters</label>
        </div>
      </section>
    </>
  );
}

export default App;
