import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss';
import Header from '../components/Header'
import { AiOutlineMail,
  AiOutlineInstagram,
  AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <>
    <Head>
      <title>Dev Content Blog</title>
    </Head>

    <Header/>

    <main className={styles.container}>
      <div>
        <section className={styles.content}>
          <span>👏  Olá, seja bem-vindo!</span>
          <h1>Um blog sobre novas <span>tecnologias</span> e programação.</h1>

          <div className={styles.socialIcons}>
            <AiFillGithub  size={20} />
            <AiOutlineInstagram  size={20} />
            <AiOutlineMail size={20} />
          </div>

          <div className={styles.buttonContainer}>

          <button>Acessar os conteúdos</button>
          </div>
        
        </section>
      </div>

      <div className={styles.homeBg}>&nbsp;</div>
    </main>

    <div>teste teste</div>
    </>
  )
}
