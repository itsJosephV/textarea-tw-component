import { useEffect, useRef, useState } from "react";
import { SendIcon } from "../SendIcon";

const TextArea = () => {
  const textAreaRef = useRef(null);
  const [letterValue, setLetterValue] = useState("");

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [letterValue]);

  return (
    <form>
      <div className="relative flex w-full overflow-hidden rounded-md">
        <textarea
          className="max-h-[200px] h-[52px] w-full resize-none py-3.5 pr-12 pl-4 placeholder-white/50 bg-slate-700 text-white"
          rows="1"
          tabIndex="0"
          placeholder="mdfka..."
          value={letterValue}
          onChange={(e) => setLetterValue(e.target.value)}
          ref={textAreaRef}
        ></textarea>
        <button className="absolute bottom-3 right-3 rounded-md bg-violet-500/80 hover:bg-violet-500 p-0.5 text-violet-200 hover:text-violet-100 transition-colors font-bold">
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default TextArea;
