const styles = {
  container:
    "items-center h-screen bg-gradient-to-r from-[#ff6e7f] to-[#bfe9ff]",
};
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
}
