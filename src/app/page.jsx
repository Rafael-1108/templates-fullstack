import Card from "@/components/Card";
import { examples } from "@/data/crud";
import styles from "./page.module.css";

export default function Page() {
  //await new Promisse((resolve) => setTimeout(resolve, 2000))

  return (
    <>
      <main className={styles.main}>
        {examples.map(
          ({ id, method, route, verb, description, color, Icon }) => (
            <Card
              key={id}
              id={id}
              verb={verb}
              method={method}
              route={route}
              description={description}
              color={color}
              Icon={Icon}
            />
          ),
        )}
      </main>
      <footer className={styles.footer}>
        <p>Codeverse &copy; {new Date().getFullYear()}</p>
        <p>Next.js - Axios - Ant Design - Lucide</p>
      </footer>
    </>
  );
}
