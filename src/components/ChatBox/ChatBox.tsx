import "./index.scss";
import React, {
  memo,
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { LottieElement } from "../LottieElement";
import chatBoxJson from "../../assets/json/chatbox.json";
import selfAvatar from "../../assets/img/self.jpeg";
import { timerInstace } from "../../constants/constants";
import { useInterval } from "../../utils/interval";

export interface ChatboxProps extends React.ComponentProps<any> {
  className: string;

  itm: {
    showAnimationWithCss: boolean;
    text: string;
    chatBoxLottieHideDelay: number;
  };
  onClick?: () => unknown | void;
}
function ChatBox({ className, itm, onClick }: ChatboxProps) {
  const [isShowLottie, setIsShowLottie] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [textList, setTextList] = useState<{ text: string; width: any }[]>([]);
  const [typingText, setTypingText] = useState<string>("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const intervalDelay = () => {
    if (isFirstLoad) {
      return timerInstace.typingSpeed + itm.chatBoxLottieHideDelay;
    }
    if (typingText.length === itm.text.length) {
      return null;
    }
    return timerInstace.typingSpeed;
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const getTextWidthByCanvas: any = useCallback((txt: string) => {
    const canvas =
      getTextWidthByCanvas.canvas ||
      (getTextWidthByCanvas.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = "20px arial";
    const metrics = context.measureText(txt);
    return metrics.width;
  }, []);
  useEffect(() => {
    const maxTextLength = (windowWidth - 80) / 20;
    const list = [];
    const textWidthByCanvas = getTextWidthByCanvas(itm.text);
    if (itm.showAnimationWithCss) {
      if (textWidthByCanvas + 80 > windowWidth) {
        for (
          let i = 0;
          i < Math.ceil((textWidthByCanvas + 80) / windowWidth);
          i += 1
        ) {
          const txt = itm.text.substring(
            i * maxTextLength,
            (i + 1) * maxTextLength
          );
          list.push({
            text: txt,
            width: getTextWidthByCanvas(txt),
          });
        }
      } else {
        list.push({
          text: itm.text,
          width: "100%",
        });
      }
      setTextList(list);
    }
    setTimeout(() => {
      setIsShowLottie(false);
      setIsFirstLoad(false);
    }, itm.chatBoxLottieHideDelay);
  }, [getTextWidthByCanvas, itm, windowWidth]);
  useInterval(() => {
    if (!itm.showAnimationWithCss) {
      setTypingText(itm.text.substring(0, typingText.length + 1));
    }
  }, intervalDelay());
  return (
    <div className={`Chat-box ${className}`}>
      <img className="avatar" src={selfAvatar} alt="郭贤哲" />
      {isShowLottie ? (
        <LottieElement
          animationData={chatBoxJson}
          className="chat-box-lottie"
        />
      ) : (
        <div className="text-container">
          {itm.showAnimationWithCss &&
            textList.map((item, index) => (
              <span
                key={item.text}
                className="showAnimationWithCss"
                style={{
                  animationDelay: `${index * 1.5}s`,
                  maxWidth: item.width,
                }}
              >
                {item.text}
              </span>
            ))}
          {!itm.showAnimationWithCss && <span>{typingText}</span>}
        </div>
      )}
    </div>
  );
}
ChatBox.defaultProps = {
  onClick: null,
};

export default memo(ChatBox);
