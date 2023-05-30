import './style.css'
import typescriptLogo from './typescript.svg'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank" class="title">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      <h1>Type Script</h1>
    </a>
    <h2>Hello TypeScript</h2>
    
  </div>
`


