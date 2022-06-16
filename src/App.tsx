import { Header } from "./components/Header"
import { Post } from "./components/Post"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"


const posts =[
  {
    id:1,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/13395268?v=4",
      name:"Saullo Almeida",
      role:"FullStack Javascript"
    },
    content:[
      {type:'paragraph', content: "Acabei de subir mais um projeto no meu portifolio"},
      {type:'paragraph', content: "É um projeto que fiz no NLW Return, evento da rocketseat, segue o link para acesso:"},
      {type:'link', content:'http://localhost:3000/'}
    ],
    publishedAt: new Date('2022-06-16 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/13395268?v=4",
      name:"Claudia Silva",
      role:"Agronoma"
    },
    content:[
      {type:'paragraph', content: "2 Acabei de subir mais um projeto no meu portifolio"},
      {type:'paragraph', content: "2 É um projeto que fiz no NLW Return, evento da rocketseat, segue o link para acesso:"},
      {type:'link', content:'http://localhost:3000/'}
    ],
    publishedAt: new Date('2022-06-16 08:00:00')
  },
]


function App() {

  return (
<>
<Header />
    <div className={styles.wrapper}>
        <Sidebar />
      <main>
        {posts.map(post =>{
          return(
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
</>
  )
}

export default App
