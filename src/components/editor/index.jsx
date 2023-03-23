import './editor.css'
import { useSelector, useDispatch } from 'react-redux'
import { 
  typeIn, 
  selectText, 
  selectBold,
  selectFontSize, 
  selectItalics,
  selectUnderline,
  selectFontFamily,
} from './editorSlice'
import { ControlBar } from '../controlBar'

function Editor () {
  const dispatch = useDispatch()
  const text = useSelector(selectText)
  const isBold = useSelector(selectBold)
  const fontSize = useSelector(selectFontSize)
  const isItalics = useSelector(selectItalics)
  const isUnderline = useSelector(selectUnderline)
  const fontFamilyType = useSelector(selectFontFamily)

  const style = {
    fontWeight: isBold ? '700' : '400',
    fontSize: fontSize + 'rem',
    fontFamily: fontFamilyType,
    fontStyle: isItalics ? 'italic' : false,
    textDecoration: isUnderline ? 'underline' : 'none'
  }

  return (
    <>
      <ControlBar />
      <textarea
      style={style}
      className='editor' 
      value={text}
      onChange={e => dispatch(typeIn(e.target.value))}
        />
    </>
  )
}

export default Editor