import Link from "next/link";
import style from "@/styles/navbar.module.css";
import { GoArrowUpRight } from "react-icons/go";

export default function Header() {
  return (
    <div className={style.navContainer} aria-label="banner">
      <div className={style.navbarContent}>
        <div className={style.logoContainer} aria-label="home">
          Logo
        </div>
        <nav role="navigation" className={style.navbar}>
          <Link className={style.navItem} href="#">
            Home
          </Link>
          <Link className={style.navItem} href="#">
            Services
          </Link>
          <Link className={style.navItem} href="#">
            About
          </Link>
          <Link className={style.navItem} href="#">
            FAQ
          </Link>
        </nav>
        <div className={style.navCTAButton}>
          <Link href="#" className={style.ctaLink}>
            <div className={style.ctaText}>Contact Us Now</div>
            <div className={style.ctaAnimation}>
              <div className={style.ctaArrow1}>
                <GoArrowUpRight />
              </div>
              <div className={style.ctaArrow2}>
                <GoArrowUpRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
