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
                            <li className=""><img src="/img/icons/monitor.gif" width="16%" alt="" /></li>
                            <li className="price">$10,000</li>
                            <li className='d-flex justify-content-center'>
                                <div className="text-start">
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Hosting 1 año</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Dominio 1 año</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 1 correo empresarial</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Página web informativa</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 3 cambios al año</p>
                                </div>
                           
                            </li>
                            <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20paquete%20Basic." target="_blank"><button>Contrata Basic</button></a></li>
                        </ul>
                    </div>
                    <div className="promo second">
                        <h4 className="title-paquetes">Plus</h4>
                        <ul className="features">
                            <li className="brief">Plus membership</li>
                            <li className=""><img src="/img/icons/cohete.gif" width="16%" alt="" /></li>
                            <li className="price">$15,000</li>
                            <li className='ps-5 d-flex justify-content-center'>
                                <div className="text-start">
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Hosting 1 año</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Dominio 1 año</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 5 correo empresarial</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Página web - pasarela de pagos</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Pasarela de pagos</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 3 cambios al año</p>
                            </div>
                            </li>
                            <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20paquete%20Plus." target="_blank"><button>Contrata Plus</button></a></li>
                        </ul>
                    </div>
                    <div className="promo third scale">
                        <h4 className="title-paquetes">Premium</h4>
                        <ul className="features">
                            <li className="brief">This is really a good deal!</li>
                            <li className=""><img src="/img/icons/grafico-de-barras.gif" width="16%" alt="" /></li>
                            <li className="price">$20,000</li>
                            <li className='d-flex justify-content-center'>
                                <div className="text-start">
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Hosting 1 año</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Dominio 1 año</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 10 correo empresarial</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Página web informativa</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Pasarela de pagos</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> Chat</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 3 cambios al año</p>
                            </div>
                            </li>
                            <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20paquete%20Premium." target="_blank"><button>Contrata Premium</button></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
