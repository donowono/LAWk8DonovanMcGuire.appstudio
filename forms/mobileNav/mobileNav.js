
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
    else {
        switch(s){
        case "Dessert Voting":
            ChangeForm(dessertVoting)
            break
        case "Describe You":
            ChangeForm(describeYou)
        case "Exercise Knowledge":
            ChangeForm(favExercises)
            break
        case "Mobile Nav":
            ChangeForm(mobileNav)
            break
        }
    }
}
