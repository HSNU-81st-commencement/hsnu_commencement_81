function show_art_history(element) {
    if (document.body.clientWidth > 800) {
        this.event.preventDefault();

        for (var i = 0; i < element.parentElement.parentElement.children.length; i++) {
            element.parentElement.parentElement.children[i].children[0].style.color = "white";
        }
        element.style.color = '#EED07C';
        var art_class = element.innerText;
        var content = document.createElement("iframe");
        content.src = "/history/art_design_log/" + art_class;
        document.getElementById("history_content").innerHTML = "";
        document.getElementById("history_content").appendChild(content);
    }
}
