import React from 'react'
import "./BinasNavbar.css"

export default function BinasNavbar() {
  return (
    <div>
            <div className="contenedor-header">
        <header>
            <div className="logo">
                <a href="#"><img src="src/assets/img/nombreBinas.jpg" alt="" /></a>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#inicio" >INICIO</a></li>
                    <li><a href="#sobremi" >NOSOTROS</a></li>
                    <li><a href="#skills" >SKILLS</a></li>
                    <li><a href="#curriculum" >CURRICULUM</a></li>
                    <li><a href="#portfolio" >PORTFOLIO</a></li>
                    <li><a href="#contacto" >CONTACTO</a></li>
                </ul>
            </nav>
            <div className="nav-responsive">
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>

    </div>
  )
}
