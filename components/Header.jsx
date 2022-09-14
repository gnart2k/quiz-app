const styles = {
  header:
    "h-16 flex justify-between bg-gradient-to-r from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.2)] shadow-xl items-center",
  input:
    "w-[280px] h-[30px] rounded-xl flex justify-center items-center bg-gradient-to-r from [rgba(255,255,255,0.5)] to [rgba(255,255,255,0.2)]",
  img: "h-[50px] m-[10px] object-cover rounded-[50%]",
};

export default function Header() {
  return (
    <div className={styles.header}>
      <div class="p-2">
        <img
          className="h-[40px] rounded-[50%]"
          src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
        />
      </div>
      {/* search */}
      <div class={styles.input}>
        <input
          type="text"
          className="ml-2 bg-transparent focus:outline-0 h-full w-full"
          placeholder="search"
        />
      </div>
      <div class="flex h-full align-center items-center">
        <img
          className={styles.img}
          src="https://cdn.iconfinder.com/data/family/previews/preview/pop.png?indexed=1657179418"
        />
        <div className="m-2">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
