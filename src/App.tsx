import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Afrânio"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dignissimos 
            necessitatibus quis cumque quia quae nobis eaque tempora reprehenderit incidunt porro 
            eius recusandae pariatur, et possimus quidem repudiandae? Asperiores, obcaecati?"
          />
          <Post author="Gaby" content="outro post hehe!" />
        </main>
      </div>
    </>
  );
}
