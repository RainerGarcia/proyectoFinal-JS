const cancion = document.getElementById("letra");
idioma = document.getElementById("idioma");
nota = document.getElementById("nota");
mode = document.getElementById("mode-dark");
//***************contenido******************
let letra_coreano = `
[Verse 1].
         $--------$C.
It's the same day.
Ireoke neoreul.
           $Am.
Dasi bulleoboneun.
  $F$---------$Fm.
Itgo itdeon maeumdeulgwa.
$C.
Ijeya naemineun.
$Am.
Naui miryeonhan jinsimdeul.
   $F$---------$Fm.
Neujeoseo mianhae.
$-.
[Pre-Chorus].
$--$F$--------------------------$G.
I wish I could have told you that.
I was born to love you.
$C$-----------------------$Am.
To love you with all my heart.
$F$----------------------$Fm.
Neol hyanghan simjangi meomchwojijiga ana.
$-.
[Chorus].
 $C$----------------------$G.
Still want you all the time.
 $Am$-------------$F.
Ajik nae maeumsok hankyeonui bange.
$C$-----------$G$------$Am.
Geuriumeuro gadeuk chaewo.
        $C$-------$F.
Neoreul gidaryeo.
 $C$----------------$G.
Need you all the time.
 $Am$-------------$F.
Amu maldo jeonhaji mothae.
$C$--------$G$--------$Am.
Sigansogeul hemeineun.
   $F$------$C$--$Em$--$F$--$C$--$G$--$F.
Nareul miwohae.
$-. 
[Verse 2].
         $C.
It's the same night.
             $--------------------$Am.
Heurithan eoneu bam angae soge neoreul.
    $F$-----------$Fm.
Bulleobogon hae nan tto.
$C.
Sigan jeopyeone binnadeon.
                  $Am.
Gieogeul tteoollyeo.
    $F$-------$Fm.
Du son kkok jabatdeon.
$-.
[Pre-Chorus].
$--$F$--------------------------$G.
I wish I could have told you that.
I was born to love you.
$C$-----------------------$Am.
To love you with all my heart.
$F$----------------------$Fm.
Mangseorida honja samkyeotdeon mal saranghae.
 $-.
[Chorus].
 $C                     $G.
 $C$----------------------$G.
Still want you all the time.
 $Am$-------------$F.
Ajik nae maeumsok hankyeonui bange.
$C$-----------$G$------$Am.
Geuriumeuro gadeuk chaewo.
        $C$-------$F.
Neoreul gidaryeo.
 $C$----------------$G.
Need you all the time.
 $Am$-------------$F.
Michin deusi nege dallyeoga.
$G$-------$Am$----$F.
Du pal gadeuk neoreul pumgo.
 $-.
[Outro].
           $C$------$G.
And I want you to know.
       $Am$-----$F$------$C.
You're the only reason.
              $G$-------$Am$-------------$F.
That I still breathe that I still live.
            $C.
And to tell you.
  $G$------ $Am$----$F$----$C.
Saranghaetdeon naui jinsimi.
          $G$--------------$Am.
Sarangbatdeon modeun gieogi.
$F$------$C$-----$Am.
Nae modeun iyu.
 $F$----$C$-------$Am.
Yuilhan iyu.
$F$-$C.
ooh.
`

let letra_español = `
[Estrofa 1].
$---$C.
Amanece, un nuevo dia.
 $---$Am.
y decido.
  $------------$G.
llamarte de nuevo.
$F$---------------$Fm.
hablando con la verdad.
$--$C$----------------$Am.
Ahora, finalmente, expongo.
$----------------$G.
Mi tonta sinceridad.
$-------$F$--------------$Fm.
que no hice los dias atras.

$-.
[Pre-Coro].
$----$F$-------------$G.
Queria hacertelo saber.
      $.
Que decidi amar.
$C$-------------------$Am.
amarte con todo mi corazón.
$--------$F$----------------$Fm.
 que no deja de latir, no deja de latir por ti.

$-.
[Coro].
$C$-----------------$G.
eres una parte de mi.
$Am$-------------$F.
en una parte de mi corazón.
$C.
te extraño.
$G$------------$Am.
y Espero por ti.
$-------$F.
yo te quiero es a ti.
$C$---------------$G.
No pude hacer nada.
$----$Am$-------------$F.
Me odio, por no luchar por nuestro amor.
$C$----------$G$----------$Am$---------$F$-----------$C.
Por todo este tiempo perder, sin dar todo de mi.
$G$---$F$----$Fm.

$-.
[Estrofa 2].
$--$C.
Y hoy.
$--------------$Am$-----------------------$G.
lleno de mis errores, Te llamo una vez mas.
$----$F$------------$Fm.
por una oportunidad.
$----$C$--------------------$Am.
Recuerdo aquellos dias bonitos.
$--------------$G.
Tus ojos brillaban.
$----$F$------$Fm.
Al verme cantar.
$-.
[Pre-Coro].
$----$F$-------------$G.
Queria hacertelo saber.
      $.
Que decidi amar.
$C$-------------------$Am.
amarte con todo mi corazón.
$------$F$------------------$Fm.
intente olvidarte pero, solo brillastes en mi ser.
$-.
[Coro].
$C$-----------------$G.
eres una parte de mi.
$Am$-------------$F.
en una parte de mi corazón.
$C.
Te extraño.
$G$------------$Am.
y Espero por ti.
$-------$F.
yo te quiero es a ti.
$C$---------$G$------$Am$---------$F.
Quisiera Correr, hacia donde tu estas.
$C$-----------$G$------------------$F.
Abrazarte y decirte te amo.
$-.
[Final].
  $F$----------------$C.
quiero hacerte saber.
$G$--------------$Am.
que eres la razón.
$F$------------$C$-----------$G$-----------$Am.
Por la cual aún, no me doy por vencido.
  $F$----------$C.
Y para decirte.
$G$-----------$Am.
Mi sincero amor.
$F$------------$C$--------$G$------------$F.
Toda nuestra historia, aun vive en mi.
$G$-----------------$C.
Esta es mi decisión.
$G$--------------$Am$----$F.
eres mi decisión.
$C$-$G$-$F.
ooh.
`;

//****************array de acordes*****************
chords = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

//**************funciones********************
letra_nueva = () =>{
    cancion.innerHTML ="";
    lyrics = lyrics_original.split(".");

    for (let i = 0; i < lyrics.length; i++) {
        const verso = document.createElement("p");
        verso.classList.add("verso");
        let acordes;
        if(lyrics[i].includes("$")){
          const cleanedString = lyrics[i].replace(/\s+/g, '').trim();
          lyrics[i] = cleanedString;
          acordes = lyrics[i].split("$").filter(item => item !== '');
          for (let j = 0; j < acordes.length; j++) {
            if(acordes[j].includes("-")){
                const acorde = document.createElement("span");
                acorde.id = "espacio";
                acorde.classList.add("espacio");
                acorde.textContent = acordes[j];
                verso.appendChild(acorde);
            }else{
                const acorde = document.createElement("span");
                acorde.id = "acorde";
                acorde.classList.add("acorde");
                acorde.textContent = acordes[j];
                verso.appendChild(acorde);
            }
          }

        }else{
          verso.textContent = lyrics[i];
        }

        cancion.appendChild(verso);
    }
}


//***************ejecucion********************
let lyrics_original = letra_coreano;

letra_nueva();

idioma.addEventListener("change", () => {
    const tonoActual = parseInt(nota.value);
    const isDarkMode = document.body.classList.contains("dark");
    lyrics_original = idioma.value == "coreano" ? letra_coreano : letra_español;
    letra_nueva();
    if (tonoActual !== 0) {
        const lista_acordes = document.querySelectorAll("#acorde");
        for (let i = 0; i < lista_acordes.length; i++) {
            const acorde = lista_acordes[i];
            const match = acorde.textContent.match(/^[A-G#]+/);
            if (match) {
                const base = match[0];
                const resto = acorde.textContent.slice(base.length);
                let posicion = chords.indexOf(base);
                if (posicion !== -1) {
                    let nuevo_acorde = chords[(posicion + tonoActual + 12) % 12];
                    lista_acordes[i].textContent = nuevo_acorde + resto;
                }
            }
        }
    }
    if (isDarkMode) {
        const versos = document.querySelectorAll(".verso");
        versos.forEach(verso => {
            verso.classList.add("dark");
        });

        const acordes = document.querySelectorAll(".acorde");
        acordes.forEach(acorde => {
            acorde.classList.add("dark");
        });

        const espacios = document.querySelectorAll(".espacio");
        espacios.forEach(espacio => {
            espacio.classList.add("dark");
        });
    }
});

nota.addEventListener("change", () => {
    const isDarkMode = document.body.classList.contains("dark");
    if(nota.value == 0){
        letra_nueva();
    }else{
        letra_nueva();
        const lista_acordes = document.querySelectorAll("#acorde");
        let tono = parseInt(nota.value);
        for (let i = 0; i < lista_acordes.length; i++) {
            const acorde = lista_acordes[i];
            const match = acorde.textContent.match(/^[A-G#]+/);
            if (match) {
                const base = match[0]; 
                const resto = acorde.textContent.slice(base.length); 
                let posicion = chords.indexOf(base);
                if (posicion === -1) {
                    console.warn(`Acorde no encontrado: ${acorde}`);
                    lista_acordes[i].textContent = acorde;
                } else {
                    let nuevo_acorde = chords[(posicion + tono + 12) % 12];
                    lista_acordes[i].textContent = nuevo_acorde + resto;
                }
            } else {
                console.warn(`Formato de acorde no válido: ${acorde}`);
                lista_acordes[i].textContent = acorde;
            }
        }
    }
    if (isDarkMode) {
        const versos = document.querySelectorAll(".verso");
        versos.forEach(verso => {
            verso.classList.add("dark");
        });

        const acordes = document.querySelectorAll(".acorde");
        acordes.forEach(acorde => {
            acorde.classList.add("dark");
        });

        const espacios = document.querySelectorAll(".espacio");
        espacios.forEach(espacio => {
            espacio.classList.add("dark");
        });
    }
    
    
});

mode.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.getElementById("mode-dark").classList.toggle("dark");
    document.getElementById("titulo").classList.toggle("dark");
    document.getElementById("encabezado").classList.toggle("dark");
    document.getElementById("pie").classList.toggle("dark");
    document.querySelector(".corchea-1").classList.toggle("dark");
    document.querySelector(".corchea-2").classList.toggle("dark");
    document.querySelector(".guitar-1").classList.toggle("dark");
    document.querySelector(".guitar-2").classList.toggle("dark");
    const versos = document.querySelectorAll(".verso");
    versos.forEach(verso => {
        verso.classList.toggle("dark");
    });
    const acordes = document.querySelectorAll(".acorde");
    acordes.forEach(acorde => {
        acorde.classList.toggle("dark");
    });
    const espacios = document.querySelectorAll(".espacio");
    espacios.forEach(espacio => {
        espacio.classList.toggle("dark");
    });
    seleccion = document.querySelectorAll("select");
    seleccion.forEach(select => {
        select.classList.toggle("dark");
    });
    cabecera = document.querySelectorAll(".cabecera");
    cabecera.forEach(cabeza => {
        cabeza.classList.toggle("dark");
    });
});
