import { useEffect, useRef, useState } from "react";

const TextArea = () => {

  const textAreaRef = useRef(null);
  const [letterValue, setLetterValue] = useState("");

  const handleChange = (e) => {
    setLetterValue(e.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [letterValue]);
  
  return (

      <form>
        <div className="relative flex w-full flex-grow flex-col overflow-hidden rounded-md">
          <textarea
            className="m-0 max-h-[150px] h-[52px] w-full resize-none border-0 py-[10px] pl-3 pr-[50px] placeholder-white/50 bg-slate-700 text-white"
            rows="1"
            tabIndex="0"
            placeholder="mdfka..."
            value={letterValue}
            onChange={handleChange}
            ref={textAreaRef}
          ></textarea>
          <button className="absolute bottom-1.5 right-2 rounded-md bg-violet-500/80 hover:bg-violet-500 p-1 px-2 text-violet-200 hover:text-violet-100 transition-colors font-bold">
            SE
          </button>
        </div>
      </form>
  
  )
}

export default TextArea