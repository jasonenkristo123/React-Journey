import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelloWorld from './HelloWorld.jsx'
import Container from './Container.jsx'
import TodoUi from './TodoLogic/TodoUi.jsx'


createRoot(document.getElementById('akar')).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoUi />
    </Container>
  </StrictMode>
)
