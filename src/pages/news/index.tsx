import * as React from "react";
import { newsItems } from "../../data/news-data";
import Layout from "@lekoarts/gatsby-theme-emma/src/components/layout";

const NewsPage = () => (
  <Layout>
    <main style={{ padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>📰 Lab News</h1>
        <ul>
          {newsItems.map((item, index) => (
            <li key={index}>
              <strong>{item.date}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </main>
  </Layout>
);

export default NewsPage;
