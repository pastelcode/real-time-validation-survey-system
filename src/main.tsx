import '@fontsource-variable/manrope/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider defaultTheme="light">
      <App />
    </Provider>
  </StrictMode>
)
