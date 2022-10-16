import './app.css'
import "markdown-it-latex/dist/index.css"
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
