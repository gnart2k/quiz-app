import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

const styles = {
  container:
    "items-center h-screen bg-gradient-to-r from-[#ff6e7f] to-[#bfe9ff]",
};
