import React, { useEffect } from 'react'
import { $ }  from 'react-jquery-plugin'
import "./Inicio.css"

export default function Inicio() {

    // Animación del texto



useEffect(() => {
    var animationDelay = 2500;

    animateHeadline(document.querySelectorAll('.cd-headline'));
    
    function animateHeadline(headlines) {
       headlines.forEach(function(headline){
          //trigger animation
          setTimeout(function(){ hideWord(headline.querySelector('.is-visible')) }, animationDelay);
          //other checks here ...
       });
    }
    
    function hideWord(word) {
        var nextWord = takeNext(word);
        switchWord(word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, animationDelay);
     }
     
     function takeNext(word) {
        return (!word.isEqualNode(word.parentNode.lastElementChild)) ? word.nextElementSibling : word.parentNode.firstElementChild;
     }
     
     function switchWord(oldWord, newWord) {
        oldWord.classList.remove('is-visible');
        oldWord.classList.add('is-hidden');
        newWord.classList.remove('is-hidden');
        newWord.classList.add('is-visible');
     }
    
     singleLetters(document.querySelectorAll('.cd-headline.letters b'));
    
    function singleLetters(words) {
        
       words.forEach(function(word){
          var letters = word.textContent.split(''),
              selected = word.classList.contains('is-visible');
          for (var i in letters) {
             letters[i] = (selected) ? '<i className="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
          }
          var newLetters = letters.join('');
          word.innerHTML = newLetters;
       });
    }
    
  }, []);
 



  return (
    <div>
    <section id="inicio" className="d-flex inicio">

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5">
                    <div className="contenido-banner">
                        <div className="contenedor-img animated animatedFadeInUp fadeInUp">
                            <img src="assets/img/logoBinas.jpg" alt=""/>
                        </div>
                        <h1 className='animated animatedFadeInUp fadeInUp'>BINAS CODE</h1><br/>
                        <h2 className='animated animatedFadeInUp fadeInUp'>Si lo puedes imaginar, lo podemos programar...</h2>
                        <div className="redes pt-3">
                            <a href="https://www.facebook.com/LordDanielHernandez/" target="_blank"> <i
                                    className="fa-brands fa-square-facebook redes cursor"></i></a>
                            <a href="https://www.instagram.com/daniel.hernandes.1998/" target="_blank"> <i
                                    className="fa-brands fa-square-instagram redes cursor"></i></a>
                            <a href="https://www.linkedin.com/in/danielcode983/" target="_blank"> <i
                                    className="fa-brands fa-linkedin redes cursor"></i></a>
                            <a href="https://github.com/DanielCodexp" target="_blank"> <i
                                    className="fa-brands fa-github redes cursor"></i></a>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-7 outer-container">
                    <section className="cd-intro inner-content">
                        <h1 className="cd-headline rotate-1" id="cd-headline">
                            <span className="title">Sitios web para</span><br/>
                            <span className="subtitle cd-words-wrapper">
                                <b className="is-visible">Empresas</b>
                                <b>Marcas</b>
                                <b>Franquisias</b> 
                                <b>Médicos</b>
                                <b>Hoteles</b>
                                <b>Tí</b>
                            </span>
                        </h1>
                    </section>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}
