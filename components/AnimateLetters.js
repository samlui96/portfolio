import customStyle from "../styles/AnimateLetters.module.scss";
import { clsx } from "clsx";

const AnimatedLetters = ({ scroll, strArray, idx, type }) => {
  return (
    <div>
      {scroll ? (
        <div className="overflow-hidden w-full grid grid-cols-1 h-5">
          {strArray.split("/").map((char, i) => (
            <span key={char + i} className={`_${i}`}>
              <span
                className={clsx({
                  [customStyle.text]: true,
                  [customStyle.textAnimate]: true,
                })}
              >
                {char}
              </span>
            </span>
          ))}
        </div>
      ) : (
        <div>
          {strArray.split(" ").map((char, i) => (
            <span key={char + i} className={`_${i}`}>
              <span
                className={clsx({
                  [customStyle.text]: true,
                })}
              >
                {char}
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
export default AnimatedLetters;
