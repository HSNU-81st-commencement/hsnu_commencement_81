window.onload = render_history()

function render_history() {
    $.getJSON("../data.json", function(json) {
        var data = json[document.title];
        var art_class = document.createElement("h1");
        art_class.innerText = document.title;
        art_class.id = "art_class"
        document.body.appendChild(art_class);
        for (i=0;i<data.length;i++){
            var day = document.createElement("div");
            day.classList.add("day");
            var date = document.createElement("div");
            date.classList.add("date");
            date.innerText = data[i]["date"];
            day.appendChild(date)

            var section = document.createElement("div");
            section.classList.add("section");
            var h = document.createElement("h3");
            h.innerText = "進度";
            section.appendChild(h);
            var des = document.createElement("div");
            des.innerText = data[i]["進度"];
            section.appendChild(des);
            day.appendChild(section)

            var section = document.createElement("div");
            section.classList.add("section");
            var h = document.createElement("h3");
            h.innerText = "問題";
            section.appendChild(h);
            var des = document.createElement("div");
            des.innerText = data[i]["問題"];
            section.appendChild(des);
            day.appendChild(section);

            var section = document.createElement("div");
            section.classList.add("section");
            var h = document.createElement("h3");
            h.innerText = "雜記";
            section.appendChild(h);
            var des = document.createElement("div");
            des.innerText = data[i]["雜記"];
            section.appendChild(des);
            day.appendChild(section);

            document.body.appendChild(day)
        }
    })
}