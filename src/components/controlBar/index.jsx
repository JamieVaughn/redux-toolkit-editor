import { useState} from 'react'
import { useDispatch } from 'react-redux'
import { 
  bold, 
  italics,
  underline,
  fontFamily,
  incrementSize,
  decrementSize,
  fetchText,
} from '../editor/editorSlice'

export const ControlBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(1)

  return (
    <div className="controls">
      <button onClick={() => dispatch(incrementSize())}>Size+</button>
      <button onClick={() => dispatch(decrementSize())}>Size-</button>
      <button onClick={() => dispatch(bold())}>B</button>
      <button onClick={() => dispatch(italics())}>I</button>
      <button onClick={() => dispatch(underline())}>U</button>
      <select onChange={(e) => dispatch(fontFamily(e.target.value))}>
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <br />
      <button onClick={() => dispatch(fetchText(input))}>Auto Post</button>
      <input
       type="number" 
       onChange={e => setInput(e.target.value)} 
       value={input}/>
    </div>
  )
}