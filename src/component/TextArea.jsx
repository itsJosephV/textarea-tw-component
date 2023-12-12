import { useEffect, useRef, useState } from "react";
import { SendIcon } from "../SendIcon";

const TextArea = () => {
  const textAreaRef = useRef(null);
  const [letterValue, setLetterValue] = useState("");

  useEffect(() => {
    const textArea = textAreaRef.current;
    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
    // textArea.scrollTop = textArea.scrollHeight
  }, [letterValue]);

  return (
    <form className="mb-10">
      <div className="relative flex w-full overflow-hidden rounded-md">
        <textarea
          className="max-h-[200px] h-[52px] w-full resize-none py-3.5 pr-12 pl-4 placeholder-white/50 bg-slate-700 text-white select-text"
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
