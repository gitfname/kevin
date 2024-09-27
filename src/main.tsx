import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import './index.css'
import { MantineProvider, type MantineColorsTuple, createTheme, DirectionProvider } from "@mantine/core"
import { BrowserRouter } from "react-router-dom"

const primaryColor: MantineColorsTuple = [
  "#e5f5ff",
  "#d1e6ff",
  "#a4cbf7",
  "#73adf1",
  "#4a95ec",
  "#3085e9",
  "#207de9",
  "#0f6bcf",
  "#005fbb",
  "#0052a6"
]

const theme = createTheme({
  colors: {
    primaryColor
  }
})

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <DirectionProvider initialDirection='rtl'>
        <App />
      </DirectionProvider>
    </MantineProvider>
  </BrowserRouter>
)
