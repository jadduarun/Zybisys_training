import { clearInputfield } from "./clear-input.js"
import { loader } from "./loader.js"

export const displayContent = (inputTextValue) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputTextValue}`;

    loader(true)
    fetch(url).then(response => response.json()).then(response => {
        loader(false)
        console.log(response)
        clearInputfield();
       
        let title = document.getElementById("dic_title")
        let phonetic = document.getElementById("dic_title_phonetic")
        let play = document.getElementById("play")
        let noun = document.getElementById("noun");
        let noun_title = document.getElementById("noun_title")
        let meaning_ul = document.getElementById("meaning_ul")
        let synonyms_value = document.getElementById("synonyms_value")
        let verb = document.getElementById("verb");
        let verb_title = document.getElementById("verb_title")
        let verb_ul = document.getElementById("verb_ul")
        let source = document.getElementById("source")
        let source_url = document.getElementById("source_url")
        let goto_url = document.getElementById("goto_url")
        let img = document.getElementById("play_img")
        img.setAttribute("class", "pause")
        let definition_length = response[0].meanings[0].definitions.length;
        let verb_definition_length = response[0].meanings[1].definitions.length;
        let validAudioUrl = response[0].phonetics.map(phonetic=>phonetic.audio).filter(audio=>audio);

        play.removeEventListener("click",audioPlay)
        meaning_ul.innerText = '';
        for (let i = 0; i < definition_length; i++) {
            let li = document.createElement("li");
            li.setAttribute("id", "meaning_li")
            li.innerText = response[0].meanings[0].definitions[i].definition;
            meaning_ul.appendChild(li);
        }
        play.setAttribute("data-audiourl",validAudioUrl[0]);

        verb_ul.innerText = '';
        for (let i = 0; i < verb_definition_length; i++) {
            let li = document.createElement("li");
            li.setAttribute("id", "verb_meaning_li")
            li.innerText = response[0].meanings[1].definitions[i].definition;
            verb_ul.appendChild(li);
            if (response[0].meanings[1].definitions[i].example) {
                let p = document.createElement("p");
                p.setAttribute("id", "verb_meaning_example")
                p.innerHTML = `<q>${response[0].meanings[1].definitions[i].example}</q>`;
                verb_ul.appendChild(p);
            }
        }
        play.addEventListener("click", audioPlay);
       
        title.innerText = response[0].word
        phonetic.innerText = response[0].phonetics[1]?.text
        play.style.display = "block";
        noun.style.display = "block";
        noun_title.innerText = response[0].meanings[0].partOfSpeech;
        synonyms_value.innerText = response[0].meanings[0].synonyms;
        verb.style.display = "block";
        verb_title.innerText = response[0].meanings[1].partOfSpeech;
        source_url.innerText = response[0].sourceUrls
        let goto = source_url.innerText;
        source_url.href = goto;
        goto_url.href = goto;
        source_url.setAttribute("target", "_blank");
        goto_url.setAttribute("target", "_blank");
        source_url.textContent = `${goto}`;
        source.style.display = "block";

    })
}

function audioPlay(){
    let img = document.getElementById("play_img");
    let play = document.getElementById("play");

    const audioUrl =play.dataset.audiourl
    img.src = "./assets/Pause.png"
        setTimeout(() => {
            img.src = "./assets/Play.png"
        }, 1750);
    let audioSrc = new Audio(audioUrl)
        audioSrc.play()
    
}