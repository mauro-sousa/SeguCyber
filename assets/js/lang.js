const langBox = document.getElementById("language-box");
        const current = document.querySelector(".current");

        function langSwitch() {
            const language = document.body.className;
            const languages = [
                { name: "EN", icon: "nl-flag.png" },
                { name: "DU", icon: "nl-flag.png" },  
                { name: "NL", icon: "nl-flag.png" }
            ];

            function Language(lang) {
                this.list = document.createElement("div");
                this.list.className = "option";
                this.list.innerHTML = "<span>"+lang.name+"</span><img class='flag' src='"+lang.icon+"' />";
                
                return this.list;
            }

            languages.forEach(function(lang) {
                if (lang.name === language) {
                    current.append(new Language(lang));
                    return;
                }

                const list = document.createElement("li");
                list.append(new Language(lang));
                list.addEventListener("click", setLang.bind(this));

                langBox.append(list);
            });
        }
        langSwitch();

        function setLang(e) {
            document.body.className = e.target.innerText;
            current.innerHTML = "";
            langBox.innerHTML = "";
            langSwitch();
        }