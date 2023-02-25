import customStyle from '../styles/AnimateLetters.module.scss'
import { clsx } from 'clsx';

const AnimatedLetters = ({strArray, idx, type}) => {
  return (
    <span>
      {strArray.map((char, i) => (
        // <span key={char + i} className='inline-block opacity-0 animate__animated animate__bounce'>
        <span key={char + i} className={`_${i + idx}`}>
            <span className={clsx({
              [customStyle.textAnimate]: type === 'textAnimate',
              [customStyle.textAnimateHover]: type === 'textAnimateHover',
            })}>
              {char}
            </span>
        </span>
      ))}
    </span>
  )
}
export default AnimatedLetters
