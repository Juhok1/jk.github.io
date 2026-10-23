
import { useState } from 'react'
import heroImg from './työhakemuskuva.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">Juho</a>

        <nav>
          <a href="#about">Minusta</a>
          <a href="#projects">Projektit</a>
          <a href="#contact">Yhteystiedot</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-text">
            <p className="eyebrow">OHJELMISTOKEHITTÄJÄ</p>
            <h1>Moi, mun nimi on Juho.</h1>
            <p>
              Opiskelen ohjelmistokehitystä ja rakennan
              projekteja oppiakseni uutta.
            </p>
            <a className="button" href="#projects">
              Tutustu projekteihin
            </a>
          </div>

          <img
            src={heroImg}
            className="profile-image"
            alt="Juhon esittelykuva"
          />
        </section>

        <section id="about" className="content-section">
          <h2>Minusta</h2>
          <p>
            Opiskelen tietotekniikkaa Turun yliopistossa neljättä vuotta. Valmistuin hetki sitten tekniikan kandidaatiksi ja jatkan opintojani maisterivaiheessa pääaineenani ohjelmistokehitys ja sivuaineena kyberturvallisuus.
          </p>
        </section>

        <section id="projects" className="content-section">
          <h2>Projektit</h2>
          <p>Projektini esitellään täällä myöhemmin. Voit kuitenkin tutustua niihin jo etukäteen <a href = "https://github.com/" arget="_blank" rel="noreferrer"> täällä</a></p>
        </section>

        <section id="contact" className="content-section">
          <h2>Yhteystiedot</h2>
          <a href = "www.linkedin.com/in/juho-kauti-8ab88b246" target="_blank" rel="noreferrer">
            LinkedIn
            </a>
          <p>
          </p>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Juho
      </footer>
    </>
  )
}

export default App
