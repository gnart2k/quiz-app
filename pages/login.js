const styles = {
  container:
    "flex items-center  h-8/12 justify-center h-screen bg-gradient-to-r from-[#ff6e7f] to-[#bfe9ff] text-gray-600",
  login_box:
    "shadow-xl bg-gradient-to-r from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.2)] p-[50px] rounded-xl flex flex-col w-[400px] h-6/12 justify-around items-center",
  login_title: "text-[37px] text-center font-bold",
  login_input: "rounded-xl p-[10px] m-[10px] w-8/12 shadow-sm focus:outline-0",
  submit_btn: "shadow-xl bg-gray-200 rounded-xl w-6/12 h-[40px] mt-[20px]",
};

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h1 className={styles.login_title}>Login</h1>
        <input
          type="text"
          className={styles.login_input}
          placeholder="User name"
        />
        <input
          type="text"
          className={styles.login_input}
          placeholder="Password"
        />
        <div className="flex justify-between w-9/12">
          <div>
            <input type="checkbox" className="mr-[5px]" />
            <a>Remember me ?</a>
          </div>

          <a>register</a>
        </div>
        <button class={styles.submit_btn}>Login</button>
      </div>
    </div>
  );
}
