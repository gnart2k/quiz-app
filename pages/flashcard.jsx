import { useState } from "react";
import Header from "../components/Header";
import ResultBox from "../components/ResultBox";

export default function Flashcard() {
  const [flip, setFlip] = useState(false);
  return (
    <>
      <Header />
      <div className="w-full flex-col h-screen flex items-center justify-center">
        <div className={styles.card}>
          <ResultBox result="key" />
        </div>
        <div className="hidden">
          <ResultBox result="value" />
        </div>

        <div className="flex ">
          <div className={styles.icon_box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>

          <div className={styles.icon_box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  card: "w-9/12",
  icon_box: "m-2 p-2 bg-[rgba(255,255,255,0.5)] rounded-xl",
};
