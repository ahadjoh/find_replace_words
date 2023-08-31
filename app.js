function replaceword(){
    const serch = document.getElementById("search").value;
    const replace = document.getElementById("reblace").value;
    let text = document.getElementById("text").value
    
    let newText = text.replace(new RegExp(serch, "gi"),replace)
    // let newText = document.getElementById("text") 
 
  /*   let regex = new RegExp(serch,'gi')
    text = text.replace(regex, replace)
    newText.innerHTML = text*/

    document.getElementById("text").value = newText;
}
