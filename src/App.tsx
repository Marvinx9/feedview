import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

type AuthorData = {
  avatarUrl: string;
  name: string;
  role: string;
};

type PostType = {
  id: number;
  author: AuthorData;
  content: string;
  publishedAt: Date;
};

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/angelicaweiler.png",
      name: "Angélica Weiler",
      role: "Backend Java",
    },
    content: `Fala galeraa 👋

    Acabei de subir mais um projeto no meu portfólio.
    É um projeto que fiz no com React, muito legal. O nome do projeto é
    MarvinCare.

    👉 - jane.design/doctorcare

    #novoprojeto #front-end #react`,
    publishedAt: new Date("2025-08-01 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
