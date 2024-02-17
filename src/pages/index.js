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
//import Gallery from "./qcomps/gallery_props";
import Holder from "./components/square";
//import PackingList from "./components/props_item";
import PackingList from "./qcomps/props_item";
import List from "./qcomps/list_keys_id";
import RecipeList from "./qcomps/recipes";
import Gallery from "./qcomps/state";
import PersonData from "./components/stateObj";
//import Form from "./qcomps/stuckForm";
import FeedbackForm from "./qcomps/thankYouCrash";
//import Counter from "./components/snapshot";
import Form from "./components/snapshot2";
import Counter from "./components/queueUpdates";
import RequestTracker from "./qcomps/shoppingCart";
import Scoreboard from "./qcomps/updObjectsForm";
//import Gallery from "./components/state";
//import Gallery from "./components/whyState";

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
            {/*<RecipeList/>*/}
            {/*<Gallery/>*/}
            {/*<Gallery/>*/}
            {/*<PersonData/>*/}
            {/*<Form/>*/}
            {/*<FeedbackForm/>*/}
            {/*<Counter/>*/}
            {/*<Form/>*/}
            {/*<Counter/>*/}
            {/*<RequestTracker/>*/}
            <Scoreboard/>
        </div>
    )
}
