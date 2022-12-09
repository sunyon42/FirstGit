var panelQuestion = document.querySelectorAll('.panel_question');


console.log (panelQuestion);

for( var i = 0; i < panelquestion.length; i++){
    panelQuestio[i].addEventListener('click', function(){
    
        for(var x = 0; x < panelquestion.length; x++){
            panelQuestion[x].classList.remove('active');
        }
        this.classList.add('active');
    });
}