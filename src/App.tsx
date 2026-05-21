import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";
import type { PostType } from "./types";

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
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/zcyc.png",
      name: "Zé Cícero",
      role: "Full-Stack nodejs",
    },
    content: `Olá Rede!

    Gostaria de compartilhar com vocês um novo projeto que venho desenvolvendo.

    O projeto simula uma barbearia com todas as funcionalidades sugeridas por vocês no meu post anterior, agradeço todos vocês por essa ajuda!

    👉 - zécicero.dev/cicerobarb

    #novoprojeto #front-end #full-stack`,
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
                key={post.id}
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
