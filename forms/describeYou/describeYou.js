





rdoPersonality.onchange=function(){
  lblPersonality.textContent = `I would agree tht you are a '${$("input[name=rdoPersonality]:checked").prop("value")}' person too!`
}



btnFavExercises.onclick=function(){
  ChangeForm(favExercises)
}
