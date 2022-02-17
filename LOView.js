class Lampa {
    constructor(szuloelem, dataId) {
        szuloelem.append("<div class='lampa'></div>");
        this.elem = szuloelem.children("div:last");
        this.allapot = false; /**true:a lámpa fel  van kapcsolva  false: le van kapcsolva*/
        this.szinBeallit();
        this.dataId = dataId;
        this.elem.attr("dataId", dataId);
        this.elem.on("click", () => {
            //console.log(this);
            this.setAllapot();
            this.kattintasTrigger();
        });
    }
    setAllapot() {
        this.allapot = !this.allapot;
        this.szinBeallit();
    }
    szinBeallit() {
        if (this.allapot) {
            this.elem.css("background-color", "green");
        } else {
            this.elem.css("background-color", "orange");
        }
    }

    kattintasTrigger() {
        let esemeny = new CustomEvent("kapcsolas", {
            detail: this,
        });
        window.dispatchEvent(esemeny);
    }
}

class LampakJatekter {
    constructor(szuloelem) {
        szuloelem.empty();
        for (let index = 0; index < meret * meret; index++) {
            const lampa = new Lampa(szuloelem, index);
            lampak.push(lampa);
        }
    }
}
