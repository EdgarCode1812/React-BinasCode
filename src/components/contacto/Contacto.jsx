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



                            <form action="https://formsubmit.co/binascode@gmail.com" method="POST">
                                <input type="text" name="name" placeholder="Tú Nombre" />
                                <input type="text" name="phone" placeholder="Número telefónico" />
                                <input type="email" name="email" placeholder="Dirección de correo" />
                                <textarea id="" cols="30" rows="6" name="mensage" placeholder="Mensaje"></textarea>
                                <button type="submit">
                                    Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                                    <span className="overlay"></span>
                                </button>
                                <input type="hidden" name="_next" value="https://react-binas-code.vercel.app/" />
                                <input type="hidden" name="_captcha" value="false" />

                            </form>

                        </div>
                        <div className="col">
                            <img src="/img/ubicacion.png" alt="" />
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
