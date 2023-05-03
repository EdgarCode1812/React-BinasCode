import React from 'react'
import "./LineaWeb.css"

export default function LineaWeb() {
  return (
    <div>
             <section id="curriculum" className="curriculum">
        <div className="contenido-seccion">
            <h2 className="">Así llegamos a tu sitio web <span className="paquetes-text">perfecto</span></h2>
            <div className="fila">
                <div className="col izquierda">
                    <div className="item izq">
                        <h3>Investigación de mercado</h3>
                        <span className="casa">ONBOARDING</span>
                        <p>Bienvenido a tu nuevo equipo creativo. Nuestro primer paso es sumergirnos en el estado actual de tu marca e identificar toda oportunidad que exista en tu industria y sector.</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>

                    <div className="item izq">
                        <h3>Experiencia de usuario</h3>
                        <span className="casa">NAVEGACIÓN</span>
                        <p>Diseñamos el orden lógico de los elementos como menús, imágenes, videos y textos para crear una experiencia agradable a nuestro usuario, donde pueda navegar por el sitio de forma fácil y sencilla.</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                </div>
                

                <div className="col derecha">
                    
                    <div className="item der">
                        <h3>Arquitectura del sitio</h3>
                        <span className="casa">ESTRUCTURA</span>
                        <p>Con base a nuestra investigación e identificación de oportunidades, desarrollamos la arquitectura y la organización de la información para crear un sitio comprensible y simplificado.</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h3>Diseño de la Interfaz</h3>
                        <span className="casa">USER EXPERIENCE</span>
                        <p>Desarrollamos la interfaz que el usuario disfrutará, creando el ciclo de navegación objetivo (lo que queremos que realice el usuario en nuestro sitio), ya sea botones de contacto o formularios, convirtiendo el sitio en un medio de contacto rápido y eficaz.</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h3>Performance y entrega</h3>
                        <span className="casa">RESULTADO</span>
                        <p>Corremos pruebas de performance y rapidez, para entregarte un sitio web rápido, innovador y listo para comenzar a recibir clientes.</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                        <div className="text-center pt-5">
                             <a className="btn btn-5"  href="#paquetes" title="borde resplandor">Contrata ahora</a>
                        </div>
                       
                    </div>
                    

                </div>
            </div>
        </div>
    </section> 
    </div>
  )
}
