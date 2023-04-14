let panels = document.querySelectorAll(".tabs .tabs-content")

function showTabs(index){
    panels.forEach((function(node){
        node.style.display = "none"
    }))
    panels[index].style.display = "block"
}
showTabs(0)
