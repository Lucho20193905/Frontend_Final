/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { } from "react-router-dom";
import React from "react";
import Layout from "../../Components/Layout";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const RankTest = () => {
  return <Layout
    makeHeader={() => <Header titulo="Top 5 productos mas vendidos" />}
    makeBody={
      () => <div>

      </div>
    }

    makeFooter={()=> <Footer />}
  />
}

export default RankTest;