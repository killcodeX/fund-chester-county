import style from "@/styles/hero.module.css";

export default function Hero() {
  return (
    <section className={style.heroSection}>
      <div className={style.heroBgWrap}>
          <div className={style.heroContent}>
            <h1 className={style.heroHeading}>Find Your Perfect Home Today</h1>
            <div className={style.heroDescription}>
              We provide tailored real estate solutions, guiding you through
              every step with personalized experiences that meet your unique
              needs and aspirations.
            </div>
          </div>
        </div>
    </section>
  );
}
