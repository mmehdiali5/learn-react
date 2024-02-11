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
import Holder from "./components/square";
//import PackingList from "./components/props_item";
import PackingList from "./qcomps/props_item";
import List from "./qcomps/list_keys_id";
import RecipeList from "./qcomps/recipes";

export default function Home() {
    return (
        <div className={styles.main}>
            {/*<Profile/>*/}
            {/*<Profile/>*/}
            {/*<MyComp/>*/}
            {/*<Bio/>*/}
            {/*<TodoList/>*/}
            {/*<Profile/>*/}
            {/*<Gallery/>*/}
            {/*<Holder/>*/}
            {/*<PackingList/>*/}
            {/*<List/>*/}
            <RecipeList/>
        </div>
    )
}
