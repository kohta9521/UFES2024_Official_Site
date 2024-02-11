"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/page.module.scss";

// components import
import Loading from "../components/templates/Loading";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Footer from "@/components/organisms/Footer";
import GreetSection from "@/components/organisms/GreetSection";
import About from "@/components/organisms/About";
import AutoSlideImage from "@/components/organisms/AutoSlideImage";
import News from "@/components/organisms/News";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ローディングが完了したらisLoadingをfalseに設定
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1秒後にローディングを非表示にする

    return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリア
  }, []);

  // ローディング中はLoadingコンポーネントを表示
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <AutoSlideImage />
      <News />
      <GreetSection />
      <About />
      <Footer />
    </div>
  );
}
