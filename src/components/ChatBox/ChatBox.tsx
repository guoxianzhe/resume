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

export interface ChatboxProps extends React.ComponentProps<any> {
  className: string;

  itm: { showAnimation: boolean; text: string; chatBoxLottieHideDelay: number };
  onClick?: () => unknown | void;
}
function ChatBox({ className, itm, onClick }: ChatboxProps) {
  const [isShowLottie, setIsShowLottie] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [textList, setTextList] = useState<{ text: string; width: any }[]>([]);
  useEffect(() => {
    // const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
    // };

    // window.addEventListener("resize", handleWindowResize);

    // return () => {
    //   window.removeEventListener("resize", handleWindowResize);
    // };
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
    if (itm.showAnimation && textWidthByCanvas + 80 > windowWidth) {
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
    setTimeout(() => {
      setIsShowLottie(false);
    }, itm.chatBoxLottieHideDelay);
  }, [getTextWidthByCanvas, itm, windowWidth]);
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
          {textList.map((item, index) => (
            <span
              key={item.text}
              className={itm.showAnimation ? "showAnimation" : ""}
              style={{
                animationDelay: `${index * 1.5}s`,
                maxWidth: item.width,
              }}
            >
              {item.text}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
ChatBox.defaultProps = {
  onClick: null,
};

export default memo(ChatBox);
