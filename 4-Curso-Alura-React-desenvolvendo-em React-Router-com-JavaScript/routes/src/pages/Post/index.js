import React from "react";
import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from "pages/NotFound";
import PadraoPage from "components/PadraoPage";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route
        path='*'
        element={<PadraoPage />}
      >
        <Route
          index
          element={
            <PostModel
              coverPhoto={`/assets/posts/${post.id}/capa.png`}
              title={post.titulo}
            >
              <div className='post-markdown-container'>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
}
