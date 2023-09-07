import React from "react";

//Types Import
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          category: "ss",
        },
      }, // See the "paths" section below
    ],
    fallback: false, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};

const CategoryProducts = () => {
  return <div>aass</div>;
};

export default CategoryProducts;
