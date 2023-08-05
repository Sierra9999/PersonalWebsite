import Circles from '@/components/Circles';
import styles from './page.module.css';
import ProjectShowcase from '@/components/ProjectShowcase';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.introduction}>
        <h1 className={styles.name}>Mateo</h1>
        <p>
          I&apos;m a front-end software developer with a passion for digital
          illustration and blogging. I create user-friendly websites and bring
          ideas to life through captivating visuals. Welcome to my portfolio
          where I combine code, art, and storytelling. Let&apos;s embark on this
          creative journey together!
        </p>
        <section className={styles["icon-section"]}>
          <Circles/>
        </section>
        <h1>Sierra</h1>
      </section>
      <ProjectShowcase />
    </main>
  );
}
