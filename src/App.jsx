import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Story from './components/Story'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Services />
            <Story />
            <Leadership />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
