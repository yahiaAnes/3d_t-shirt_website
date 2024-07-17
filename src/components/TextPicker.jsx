import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const TextPicker = () => {
  const snap = useSnapshot(state);
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
    state.text = e.target.value;
  }

  return (
    <div className="filepicker-container">
      <input 
        type="text" 
        value={text} 
        onChange={handleTextChange} 
        placeholder="Enter text" 
        className="text-input mx-10"
      />
    </div>
  )
}

export default TextPicker;
