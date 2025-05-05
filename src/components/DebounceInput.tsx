import { useState, useEffect, FC } from 'react';
import useDebounce from '../hooks/useDebounce';

const DebounceInput :FC= ()=> {
  const [input, setInput] = useState<string>('');
  const [immediateResult, setImmediateResult] = useState<string>('');
  const debouncedResult = useDebounce(input, 500);

  useEffect(() => {
    setImmediateResult(input);
  }, [input]);

  return (
    <div>
      <h2>Debounce Example</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="output" id="immediate-result">Immediate: {immediateResult}</div>
      <div className="output" id="debounced-result">Debounced: {debouncedResult}</div>
    </div>
  );
};

export default DebounceInput;