import style from "@/styles/navbar.module.css";

export default function Header() {
  return (
    <nav className={style.navContainer}>
      <div className={style.navbarContent}>
        <div className={style.logoContainer}>Logo</div>
        <div className={style.menuConatiner}>test</div>
      </div>
    </nav>
  );
}
