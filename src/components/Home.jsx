import styles from "./Home.module.css";
function Home() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-black text-slate-50 "
      id="home"
    >
      <div>
        <h1 className={styles.h1}>
          <span className={`${styles.span1} ${styles.span}`}>Acadummies</span>
          <span className={`${styles.span2} ${styles.span}`}>
            Donde Programar
          </span>
          <span className={`${styles.span3} ${styles.span}`}>Es fácil.</span>
        </h1>
        <div className=" w-full flex justify-center">
          <a className={styles.btn} href="#about">
            Ver mas
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
