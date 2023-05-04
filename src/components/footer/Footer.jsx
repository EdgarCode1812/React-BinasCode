import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <div>

            <footer>
            <a href="#inicio" className="arriba">
                        <i className="fa-solid fa-angles-up"></i>
                    </a>
                <div className="row wh">
                  
                    <div className="col-lg-4">
                        <div className="con-img pb-3">
                            <img className='footerImg' src="/img/logoBinas.jpg" alt="" />
                        </div>

                        <p>Somos una empresa mexicana de desarrollo web. Enfocada en crear proyectos a tu medida.</p>

                    </div>

                    <div className="col-lg-4">

                        <h4>Quick Links</h4>

                        <ul>

                            <li><a href="#paquetes"><i className="fa fa-angle-right"></i> Paquetes</a></li>

                            <li><a href="#contacto"><i className="fa fa-angle-right"></i> Contáctanos</a></li>

                            <li><a href="#portfolio"><i className="fa fa-angle-right"></i> Desarrollo</a></li>

                        </ul>

                    </div>

                    <div className="col-lg-4">

                        <h4>Connect with Us</h4>

                        <div className="redes">
                        <a href="https://www.facebook.com/profile.php?id=100092163859160" target="_blank"> <i
                                    className="fa-brands fa-square-facebook redes cursor"></i></a>
                            <a href="https://instagram.com/binascode?igshid=YmMyMTA2M2Y=" target="_blank"> <i
                                    className="fa-brands fa-square-instagram redes cursor"></i></a>
                            <a href="https://www.tiktok.com/@binascode?fbclid=IwAR0Xlxvp_I5Dyzg5Jwo52MOD20On5llop9ZHz-rsarmrL7CMzedJVbR3WOQ" target="_blank"> <i
                                    className="fa-brands fa-tiktok redes cursor"></i></a>
                        </div>

                    </div>

                </div>

                <p className="copyright">© 2023 All Rights Reserved</p>

            </footer>

        </div>
    )
}
