import React from 'react'
import "./Nosotros.css"

export default function Nosotros() {
  return (
    <div>
        <section id='sobremi' className='sobremi'>
            <div className="contenido-seccion">
            <h2 className='animated animatedFadeInUp fadeInUp'>Sobre nosotros...</h2>
            <p className='text'>
                En <span>Binas Code</span>, creemos que cada negocio, organización y marca tiene su propia personalidad
                y necesita una presencia en línea única que la represente. Es por eso que nuestro equipo de expertos en
                desarrollo web se enfoca en brindar soluciones personalizadas a cada uno de nuestros clientes.

                Nuestro enfoque es simple: combinamos la creatividad, la innovación y la excelencia técnica para diseñar
                y crear sitios web y aplicaciones que reflejen la identidad de nuestros clientes y los ayuden a alcanzar
                sus objetivos en línea. Con una amplia gama de habilidades, desde el diseño gráfico hasta la
                programación avanzada, nuestro equipo está equipado para manejar cualquier proyecto, grande o pequeño.
                <br/><br/>

                En <span>Binas Code</span>, nos enorgullecemos de ser un socio confiable y a largo plazo para nuestros
                clientes. Nos comprometemos a trabajar de cerca con ellos para entender sus necesidades y objetivos en
                línea y brindar soluciones personalizadas y de alta calidad que los ayuden a lograr el éxito en línea.

                Si estás buscando una empresa de desarrollo web que se preocupe por tu éxito en línea tanto como tú, no
                dudes en contactarnos. Estamos ansiosos por trabajar contigo.

            </p>

            <button>
                Contactanos
                <span className="overlay"></span>
            </button>
            </div>
        </section>

        <div id="miDiv" className='div'>
        </div>
    </div>
  )
}
