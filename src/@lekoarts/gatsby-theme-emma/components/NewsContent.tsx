import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXContent } from "@mdx-js/react"

const NewsContent = () => {


  // This will NOT render MDX directly, but at least avoids crashes
  /************** Please add news here **************/
  return (

  <h1 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1.5rem" }}>Designing Intelligence Augmentation Group (DIAG)</h1><br/>
  <h1 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1.5rem" }}>복잡한 정보처리·사회적 문제를 해결하는 혁신적 인간-AI 상호작용의 디자인</h1>

  <div>
  <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1.5rem" }}>우리 연구실 에서는 인간과 AI의 상호작용을 통해 복잡한 사회적·인지적 문제를 해결하는 지능 증강 시스템들을 연구합니다. 인간의 사고와 기계의 연산 능력을 결합하여, 새로운 형태의 협업과 학습, 의사결정 지원 방식을 설계합니다.</h2>

  We are currently recruiting!
  How to get in touch for internship or graduate positions.
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
    <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1.5rem" }}>📰 Lab News</h2>
    <ul style={{ paddingLeft: "1.2rem", listStyleType: "disc" }}>
      <li><strong>May 2025:</strong> 🎉 We launched our new homepage!</li>
      <li><strong>April 2025:</strong> ✅ Paper accepted to CHI 2026.</li>
      <li><strong>March 2025:</strong> 🤝 Started new collaboration on a UX project.</li>
    </ul>
  </section>
)

}

export default NewsContent
