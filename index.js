   const display = document.querySelector("#dis");
        const key_opt = document.querySelector("#key_pad_operator");
        const key_nums = document.querySelector("#key_pad_nums");
        const key_eq = document.querySelector("#key_pad_equal");

        let exp = "";

        display.addEventListener("focusout", (e) => {
            exp = display.textContent;
        })

        window.addEventListener("keydown", (e) => {
            let key_name = e.key;

            if (key_name.match(/[0-9]/) || key_name.match(/[+\-*/()]/)) {
                exp += key_name;
            }
            else if (e.key === 'Backspace') {
                exp = exp.slice(0, -1);
            }
            else if (e.key === 'Enter') {
                exp = eval(exp).toString();
            }

            display.textContent = exp;

            key_nums.childNodes.forEach(el => {
                if (el.textContent === e.key) {
                    el.style.backgroundColor = "lightblue";
                }
            });
            key_opt.childNodes.forEach(el => {
                if (el.value === e.key) {
                    el.style.backgroundColor = "lightblue";
                }
                else if (e.key === "Backspace") {
                    const bks = document.getElementById("num20");
                    bks.style.backgroundColor = "lightblue";
                }
                else if (e.key === "Enter") {
                    const bks = document.getElementById("num17");
                    bks.style.backgroundColor = "lightblue";
                }
            });
        });


        window.addEventListener("keyup", (e) => {

            key_nums.childNodes.forEach(el => {
                if (el.textContent === e.key) {
                    el.style.backgroundColor = "#fff";
                }
            });
            key_opt.childNodes.forEach(el => {
                if (el.value === e.key) {
                    el.style.backgroundColor = "#EFEFEF";
                }
                else if (e.key === "Backspace") {
                    const bks = document.getElementById("num20");
                    bks.style.backgroundColor = "#fff";
                }
                else if (e.key === "Enter") {
                    const bks = document.getElementById("num17");
                    bks.style.backgroundColor = "lightcoral";
                }

            });
            display.textContent = exp;
        });

        key_opt.addEventListener("click", (e) => {
            let x = e.target;

            if (!exp.length || !exp[exp.length - 1].match(/[+\-*/]/)) {
                exp += x.value;
            } else if (x.value === '-' && exp[exp.length - 1] !== '-') {
                exp += x.value;
            } else {
                console.log('replace');
                exp = exp.slice(0, -1) + x.value;
            }

            display.textContent = exp;
        });

        key_nums.addEventListener("click", (e) => {
            let x = e.target;
            if (x.textContent.match(/[0-9]/g)) {
                exp += x.textContent;
            }
            else if (x.value === "←") {
                exp = exp.slice(0, -1);
            }
            else if (x.textContent.match("AC")) {
                display.textContent = "0";
                exp = "";
            }
            else if (x.textContent.match(".")) {
                exp += x.textContent;
            }
            display.textContent = exp;
        });


        key_eq.addEventListener("click", (e) => {
            let x = e.target;
            exp = eval(exp).toString();
            display.textContent = exp;
        });
