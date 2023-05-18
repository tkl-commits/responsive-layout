import Head from "next/head";
import React, { useState, useEffect } from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import MainLayout from "../../components/MainLayOut/MainLayout";
import RightSideBar from "../../components/RightSideBar/RightSiderBar";
import TopBar from "../../components/TopBar/TopBar";
import Section from "../../components/Section/Section";
import { AppProvider } from "../../components/Context/AppContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>Responsive-Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppProvider>
        <MainLayout>
          <TopBar />
          <LeftSideBar />
          <Section />
          <RightSideBar />
        </MainLayout>
      </AppProvider>
    </>
  );
}
