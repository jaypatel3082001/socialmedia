import React from 'react'
// import {Person} from "@material-ui/icons"
import  Topbar  from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import Footer from '../../components/footer/Footer';

function Home() {
  return( <>
  <Topbar />
  <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar />
  </div>
  <Footer />
</>
  );
}

export default Home;