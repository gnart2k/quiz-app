import ResultBox from "./ResultBox";

export default function QuizBox({ questions, options }) {
  return (
    <div>

      <div className="hover:translate-x-[-100vw] ease-out duration-300 h-full flex flex-col items-center align-center">
        <div className={styles.question}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          error repudiandae quis excepturi ratione, aspernatur perferendis
          quidem adipisci natus doloremque quae unde tenetur alias inventore
          modi consequuntur nobis obcaecati tempora?
        </div>
        <div className=" grid grid-cols-2 gap-4 mt-8 scrollbar-hide overflow-auto w-8/12">
          <ResultBox result="fdasfsafsajfhnsa kfhsakfbgasfbs fdafsa fsa fsad fasf asfsa afkbask" />
          <ResultBox result="result" />
          <ResultBox result="result" />
          <ResultBox result="result" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  question:
    "rounded-[30px] flex justify-between bg-gradient-to-r from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.2)] shadow-xl items-center w-8/12 p-6 rounded-sm",
};
