
import { Routes, Route } from "react-router-dom"
import { ArticleDetail, Articles, Home, MyProjects } from "./pages"

function App() {
  return (
    <Routes>

      <Route index element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ArticleDetail />} />
      <Route path="/projects" element={<MyProjects />} />

    </Routes>
  )
}

export default App