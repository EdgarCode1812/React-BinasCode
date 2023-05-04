import React from 'react'
import "./Paquetes.css"

export default function Paquetes() {
  return (
    <div>
            <section id="paquetes" className="paquetes">
        <div className="pb-3">
            <h2 className="">Nuestros <span className="paquetes-text">paquetes</span> a la medida</h2>
        </div>

        <div className="promos pt-3">
            <div className="promo first">
                <h4 className="title-paquetes">Basic</h4>
                <ul className="features">
                    <li className="brief">Basic membership</li>
                    <li className=""><img src="src/assets/img/icons/monitor.gif" width="16%" alt=""/></li>
                    <li className="price">$69</li>
                    <li>Some great feature</li>
                    <li>Another super feature</li>
                    <li>And more...</li>
                    <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711184201&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank"><button>Contrata Basic</button></a></li>
                </ul>
            </div>
            <div className="promo second">
                <h4 className="title-paquetes">Plus</h4>
                <ul className="features">
                    <li className="brief">Plus membership</li>
                    <li className=""><img src="src/assets//img/icons/cohete.gif" width="16%" alt=""/></li>
                    <li className="price">$79</li>
                    <li>Some great feature</li>
                    <li>Another super feature</li>
                    <li>And more...</li>
                    <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711184201&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank"><button>Contrata Plus</button></a></li>
                </ul>
            </div>
            <div className="promo third scale">
                <h4 className="title-paquetes">Premium</h4>
                <ul className="features">
                    <li className="brief">This is really a good deal!</li>
                    <li className=""><img src="src/assets//img/icons/grafico-de-barras.gif" width="16%" alt=""/></li>
                    <li className="price">$89</li>
                    <li>Some great feature</li>
                    <li>Another super feature</li>
                    <li>And more...</li>
                    <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711184201&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank"><button>Contrata Premium</button></a></li>
                </ul>
            </div>
        </div>
    </section>
    </div>
  )
}
