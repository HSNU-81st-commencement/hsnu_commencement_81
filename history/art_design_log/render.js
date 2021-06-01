function render_history(THIS, art = null, embed = false) {
    if (embed && document.body.clientWidth > 800) {
        this.event.preventDefault();
        var box = document.getElementById("box_left");
        for (i = 0; i < box.children.length; i++) {
            box.children[i].children[0].style.color = "white";
        }
        THIS.style.color = "#EED07C";
    }
    $.getJSON("/history/art_design_log/data.json", function (json) {
        var data = json[art ? art : document.title];
        if (!embed) {
            var art_class = document.createElement("h1");
            art_class.innerText = art ? art : document.title;
            art_class.id = "art_class"
            document.body.appendChild(art_class);
        }
        else {
            document.getElementById("history_content").innerHTML = "";
        }
        for (i = 0; i < data.length; i++) {
            var day = document.createElement("div");
            day.classList.add("day");
            var date = document.createElement("div");
            date.classList.add("date");
            date.innerText = data[i]["date"];
            day.appendChild(date);

            var section = document.createElement("div");
            section.classList.add("section");
            var h = document.createElement("h3");
            h.innerText = "進度";
            section.appendChild(h);
            var des = document.createElement("div");
            des.innerHTML = "<ol>";
            for (j = 0; j < data[i]["進度"].length; j++) {
                des.innerHTML += "<li>" + data[i]["進度"][j] + "</li>"
            }
            des.innerHTML += "</ol>";
            section.appendChild(des);
            day.appendChild(section);

            var section = document.createElement("div");
            section.classList.add("section");
            var h = document.createElement("h3");
            h.innerText = "問題";
            section.appendChild(h);
            var des = document.createElement("div");
            des.innerHTML = "<ol>";
            for (j = 0; j < data[i]["問題"].length; j++) {
                des.innerHTML += "<li>" + data[i]["問題"][j] + "</li>"
            }
            des.innerHTML += "</ol>";
            section.appendChild(des);
            day.appendChild(section);

            var section = document.createElement("div");
            section.classList.add("section");
            var h = document.createElement("h3");
            h.innerText = "雜記";
            var des = document.createElement("div");
            section.appendChild(h);
            des.innerHTML = "<ol>";
            for (j = 0; j < data[i]["雜記"].length; j++) {
                des.innerHTML += "<li>" + data[i]["雜記"][j] + "</li>"
            }
            des.innerHTML += "</ol>";
            section.appendChild(des);
            day.appendChild(section);

            if (embed) {
                document.getElementById("history_content").appendChild(day);
            }
            else {
                document.body.appendChild(day);
            }
        }
    })
}