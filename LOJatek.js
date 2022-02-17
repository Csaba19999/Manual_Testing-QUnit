$(function () {
    new LOJatek(kezdetiDb);
    $(".uj").on("click", function () {
        new LOJatek(kezdetiDb);
    });
});

const kezdetiDb = 4;
const lampak = [];
const meret = 3;

class LOJatek {
    constructor(kezdetiDb) {
        this.kezdetiDb = kezdetiDb;
        $(".infoSzoveg").html(this.kezdetiDb);
        this.ujJatek();
        $(window).on("kapcsolas", (event) => {
            let aktId = event.detail.dataId;
            this.szomszedokValtoztatasa(aktId);
            console.log("aktId = " +aktId)
            $(".infoSzoveg").html(this.ellenorzes());
        });
    }
    szomszedokValtoztatasa(aktId) {
        if (aktId > meret - 1) {
            lampak[aktId - meret].setAllapot();
        }
        if (aktId < meret * meret - meret) {
            lampak[aktId + meret].setAllapot();
        }

        if (aktId % meret !== 0) {
            lampak[aktId - 1].setAllapot();
        }
        if (aktId % meret !== meret - 1) {
            lampak[aktId + 1].setAllapot();
        }
    }
    ellenorzes() {
        let db = 0;
        for (let index = 0; index < meret * meret; index++) {
            if (lampak[index].allapot) {
                db++;
            }
        }
        console.log(db);
        return db;
    }
    ujJatek() {
        let db = 0;
        lampak.splice(0, lampak.length);
        new LampakJatekter($("article"));
        console.log(this.kezdetiDb);
        while (db < this.kezdetiDb) {
            let index = Math.floor(Math.random() * 9);

            if (!lampak[index].allapot) {
                lampak[index].setAllapot();
                db++;
            }
        }
    }
}
