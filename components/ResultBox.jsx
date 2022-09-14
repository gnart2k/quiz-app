import style from "../styles/Scrollbar.module.css";
import ScrollArea from "react-scrollbar/dist/no-css";

export default function ResultBox({ result }) {
  return <div className={styles.box}>{result}</div>;
}

const styles = {
  box: "scrollbar-hide result_box h-16 flex justify-center items-center w-full rounded-[20px] h-[100px] overflow-auto rounded-[10px] bg-gradient-to-r from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.2)] shadow-xl items-center p-6 rounded-sm",
};
