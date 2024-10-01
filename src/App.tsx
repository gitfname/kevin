
import { Routes, Route } from "react-router-dom"
import { ArticleDetail, Articles, ContactUs, Home, MyProjects } from "./pages"

function App() {
  return (
    <Routes>

      <Route index element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ArticleDetail />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/contact-us" element={<ContactUs />} />

    </Routes>
  )
}

export default App