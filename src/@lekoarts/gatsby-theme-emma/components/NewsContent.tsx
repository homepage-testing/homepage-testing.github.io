import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXContent } from "@mdx-js/react"

import { useEffect, useState } from "react"

const NewsContent = () => {


  const [isMobile, setIsMobile] = useState(false);
  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // mobile breakpoint
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // This will NOT render MDX directly, but at least avoids crashes
  /************** Please add news here **************/
  return (
    <>
      <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "40px",
          maxWidth: "95%",
          margin: "3rem auto",
          alignItems: "flex-start", // Align top of columns
      }}
      >
        <h1 style={{
          fontFamily: "Montserrat",
          width: isMobile ? "100%" : "25%",
        }}
        >
        Hi👋 Welcome to Yonsei University DIAG <span style={{fontSize: "0.6em"}}>[dī-ˈa-g]</span> Lab
        </h1>
        {/* Left Column: English */}
        <div style={{ width: isMobile ? "100%" : "35%" }}>
          <p>
            At our lab, we design and study human-AI interaction grounded in human-centered design principles and HCI methodologies. We focus on developing intelligence augmentation systems that address complex social and cognitive challenges. By combining human reasoning with machine computation, we create new forms of collaboration, learning, and decision-making support.
          </p>
        </div>
        {/* Right Column: Korean */}
        <div style={{ width: isMobile ? "100%" : "35%" }}>
          <p>
            안녕하세요, 우리 연구실에서는 인간과 AI의 상호작용을 통해 복잡한 사회적·인지적 문제를 해결하는 인공지능 기반의 시스템들을 연구합니다.
          </p>
          <p>
            사람 중심의 디자인 철학과 HCI 방법론을 바탕으로, 인간과 AI가 협력하여 복잡한 정보처리 및 사회적 문제를 해결할 수 있는 혁신적 상호작용을 설계 및 제안합니다.
          </p>
        </div>
      </div>

      <section
        style={{
          maxWidth: "700px",
          margin: "4rem auto",
          padding: "0 1rem",
          fontSize: "1.2rem",
          lineHeight: "1.6",
          textAlign: "left",
        }}
      >

      {/* Recruiting */}
      <h4 style={{fontFamily: "Montserrat" }}><span style={{backgroundColor: "#FA9CBE"}}>We are seeking highly motivated individuals to join our team.</span></h4>
      <p style={{fontSize: "0.8em", marginTop: "-15px"}}>We welcome curious and motivated students to join our lab as research interns or full time researchers. If you are intrested in joining, please send your CV to jeansong at yonsei dot ac dot kr.</p>
      <br/><br/>

      {/* News */}
        <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1.5rem" }}>📰 Lab News</h2>
        <ul style={{ paddingLeft: "1.2rem", listStyleType: "disc" }}>
          <li><strong>May 2025:</strong> 🎉 We launched our new homepage!</li>
          <li><strong>July 2021:</strong> 🎉 We launched our lab DIAG in DGIST, Daegu, South Korea.</li>
        </ul>
      </section>
    </>
  );
};

export default NewsContent;
