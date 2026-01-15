import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelloWorld from './HelloWorld.jsx'
import Container from './Container.jsx'
import TodoUi from './TodoLogic/TodoUi.jsx'
import Button from './Button.jsx'
import NamaWelek from './NamaWelek.jsx'
import FormHandle from './Form.jsx'

createRoot(document.getElementById('akar')).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoUi />
    </Container>

      <Button />
        <NamaWelek />
          <FormHandle />
          <NoteApp />
  </StrictMode>
)
