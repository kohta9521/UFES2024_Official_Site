"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/page.module.scss";

// components import
import Loading from "../components/templates/Loading";
import Top from "@/components/organisms/Top";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ローディングが完了したらisLoadingをfalseに設定
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1秒後にローディングを非表示にする

    return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリア
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.main}>
      <Top />
    </div>
  );
}
