import React from 'react'
import "./Clientes.css"


export default function Clientes() {
  return (
    <div>
            <section id="portfolio" className="portfolio">
        <div className="contenido-seccion">
            <h2>También desarrollamos</h2>
            <div className="galeria">
                <div className="proyecto">
                    <img src="/img/p1.jpg" alt=""/>
                    <div className="overlay">
                        <h3>Apps</h3>
                        <p>Moviles</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src="/img/p2.jpg" alt=""/>
                    <div className="overlay">
                        <h3>Implementamos sistema de pagos</h3>
                        <p>$$</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src="/img/p3.png" alt=""/>
                    <div className="overlay">
                        <h3>Cambios o compra de Dominio</h3>
                        <p>www.dominio.com</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src="/img/p4.jpg" alt=""/>
                    <div className="overlay">
                        <h3>Diseño Creativo</h3>
                        <p>Fotografía</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src="/img/p5.png" alt=""/>
                    <div className="overlay">
                    <h3>Diseño Responsivo</h3>
                    <p>Movil, tablet, computadora...</p>
                    </div>
                </div>
                <div className="proyecto">
                    <img src="/img/p6.jpeg" alt=""/>
                    <div className="overlay">
                        <h3>Videojuegos</h3>
                        <p>2D</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
