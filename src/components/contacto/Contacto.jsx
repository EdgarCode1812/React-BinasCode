import React from 'react'
import './Contacto.css'

export default function Contacto() {
  return (
    <div>
           <section id="contacto" className="contacto">
        <div className="contenido-seccion">
            <h2>CONTACTO</h2>
            <div className="fila">

                <div className="col">
                    <input type="text" placeholder="Tú Nombre"/>
                    <input type="text" placeholder="Número telefónico"/>
                    <input type="text" placeholder="Dirección de correo"/>
                    <input type="text" placeholder="Tema"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button>
                        Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                        <span className="overlay"></span>
                    </button>
                </div>
     
                <div className="col">
                    <img src="src/assets/img/ubicacion.png" alt=""/>
                    <div className="info">
                        <ul>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                Córdoba, Veracruz
                            </li>
                            <li>
                                <i className="fa-solid fa-mobile-screen"></i>
                                Llamame: +52 271 124 5170
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                Email: binascode@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
