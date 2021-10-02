function start(){
    const chatBtns = document.querySelector(".im_chat-input--buttons"); 
    const btn = document.createElement("input");
    btn.type = "button";
    btn.value = "gfd";
    chatBtns.appendChild(btn);

    EmReplace();

    document.querySelector(
        '#im_dialogs > div.ui_scroll_overflow > div.ui_scroll_outer > div > div.ui_scroll_content.clear_fix'
    ).addEventListener('click', (event)=>{
        if(event.target.closest("li.nim-dialog").classList.contains("nim-dialog")) EmReplace();
    });
    
    document.querySelector('.im_editable').addEventListener('Enter', (event)=>{
        if(event.key.toLocaleLowerCase() == "enter") EmReplace();
    });
}

function EmReplace(){
    setTimeout(()=>{
        const text = document.querySelectorAll(".im-mess--text");
        for(let phrase of text){
            if(phrase.innerHTML.includes("sm")){
                phrase.innerHTML = '<img src="https://img2.freepng.ru/20180701/wwk/kisspng-computer-icons-symbol-best-practice-5b387e2967a031.5607613815304289694245.jpg" class="emoji_smile_icon_vector"/>';
            }
        }
    }, 0);
}

start();