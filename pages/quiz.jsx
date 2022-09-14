import Header from "../components/Header";
import QuizBox from "../components/QuizBox";
import ResultBox from "../components/ResultBox";

export default function Quiz() {
  return (
    <>
      <div className="mb-[100px]">
        <Header />
      </div>
      <QuizBox />;
    </>
  );
}
