import React from 'react'
import "./Inicio.css"

export default function Inicio() {

    // Animación del texto

var animationDelay = 2500;
 
animateHeadline($('.cd-headline'));

function animateHeadline($headlines) {
   $headlines.each(function(){
      var headline = $(this);
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
      //other checks here ...
   });
}

function hideWord($word) {
    var nextWord = takeNext($word);
    switchWord($word, nextWord);
    setTimeout(function(){ hideWord(nextWord) }, animationDelay);
 }
 
 function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
 }
 
 function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
 }

 singleLetters($('.cd-headline.letters').find('b'));

function singleLetters($words) {
   $words.each(function(){
      var word = $(this),
          letters = word.text().split(''),
          selected = word.hasClass('is-visible');
      for (i in letters) {
         letters[i] = (selected) ? '<i className="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
      }
      var newLetters = letters.join('');
      word.html(newLetters);
   });
}

  return (
    <div>
    <section id="inicio" className="d-flex inicio">

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5">
                    <div className="contenido-banner">
                        <div className="contenedor-img">
                            <img src="src/assets/img/logoBinas.jpg" alt=""/>
                        </div>
                        <h1>BINAS CODE</h1><br/>
                        <h2>Si lo puedes imaginar, lo podemos programar...</h2>
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
