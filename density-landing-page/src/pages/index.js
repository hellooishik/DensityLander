import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import Header from '../components/header'; // Import your header component

const HomePage = () => {
  return (
    <div>
      <Header /> {/* Use the Header component */}
      <main>
        {/* Other content */}
      </main>
      {/* Footer and other components */}
    </div>
  );
};



export default HomePage
