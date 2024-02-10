// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from "./components/profile";
import MyComp from "./qcomps/firstcomp";
import Bio from "./qcomps/bios";
import TodoList from "./qcomps/todos";
//import Profile from './qcomps/profile_mistake.js'
import Profile from './components/profile_props.js'
import Gallery from "./qcomps/gallery_props";

export default function Home() {
    return (
        <div className={styles.main}>
            {/*<Profile/>*/}
            {/*<Profile/>*/}
            {/*<MyComp/>*/}
            {/*<Bio/>*/}
            {/*<TodoList/>*/}
            {/*<Profile/>*/}
            <Gallery/>
        </div>
    )
}
