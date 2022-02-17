const { test } = QUnit;
//------------ LOJatek
QUnit.module("LOJatek.js fájl tesztjei.", function () {
  QUnit.test("LOJatek class -e?", function (assert) {
    assert.ok("LOJatek", "class");
  });
  QUnit.test("szomszedokValtoztatasa function -e?", function (assert) {
    assert.ok("szomszedokValtoztatasa", "function");
  });
  QUnit.test("ellenorzes function -e?", function (assert) {
    assert.ok("ellenorzes", "function");
  });
  QUnit.test("ujJatek function -e?", function (assert) {
    assert.ok("ujJatek", "function");
  });
  QUnit.test("Minden lámpa felkapcsolva?", (assert) => {
    const lOJatek = new LOJatek(9);
    assert.equal(lOJatek.ellenorzes(), 9);
  });
  QUnit.test("Minden lámpa lekapcsolva?", (assert) => {
    const lOJatek = new LOJatek(0);
    assert.equal(lOJatek.ellenorzes(), 0);
  });
  QUnit.test("Hány lámpa ég éppen? (5)", (assert) => {
    const lOJatek = new LOJatek(5);
    const egoLampa = 9 - lOJatek.ellenorzes();
    assert.equal(egoLampa, 4, "Összesen 4 elme van felkapcsolva");
  });
});
//-----------SZOMSZEDOKVALTOZTATASA METÓDUS
QUnit.module("kattintott lámpa tesztelése",function () {
    QUnit.test("Középső lámpát kapcsoljuk", (assert) => {
      const lOJatek = new LOJatek(0);
      let kattintva = $('.lampa[dataid="4"]');
      kattintva.click();
      assert.ok(kattintva, true);
    });
    QUnit.test("bal felső sorban lévő lámpát kapcsoljuk", (assert) => {
      const lOJatek = new LOJatek(0);
      let kattintva = $('.lampa[dataid="0"]');
      kattintva.click();
      assert.ok(kattintva, true);
    });
    QUnit.test("bal felső sorban lévő lámpát kapcsoljuk", (assert) => {
      const lOJatek = new LOJatek(0);
      let kattintva = $('.lampa[dataid="2"]');
      kattintva.click();
      assert.ok(kattintva, true);
    });
    QUnit.test("bal felső sorban lévő lámpát kapcsoljuk", (assert) => {
      const lOJatek = new LOJatek(0);
      let kattintva = $('.lampa[dataid="6"]');
      kattintva.click();
      assert.ok(kattintva, true);
    });
    QUnit.test("bal felső sorban lévő lámpát kapcsoljuk", (assert) => {
      const lOJatek = new LOJatek(0);
      let kattintva = $('.lampa[dataid="8"]');
      kattintva.click();
      assert.ok(kattintva, true);
    });
    QUnit.test("bal felső sorban lévő lámpát kapcsoljuk", (assert) => {
      const lOJatek = new LOJatek(0);
      let kattintva = $('.lampa[dataid="5"]');
      kattintva.click();
      assert.ok(kattintva, true);
    });
    QUnit.test("bal felső sorban lévő lámpát kapcsoljuk", (assert) => {
      const lOJatek = new LOJatek(0);
      let kattintva = $('.lampa[dataid="3"]');
      kattintva.click();
      assert.ok(kattintva, true);
    });
    QUnit.test("bal felső sorban lévő lámpát kapcsoljuk", (assert) => {
      const lOJatek = new LOJatek(0);
      let kattintva = $('.lampa[dataid="1"]');
      kattintva.click();
      assert.ok(kattintva, true);
    });
    QUnit.test("bal felső sorban lévő lámpát kapcsoljuk", (assert) => {
      const lOJatek = new LOJatek(0);
      let kattintva = $('.lampa[dataid="7"]');
      kattintva.click();
      assert.ok(kattintva, true);
    });
  }
);

//------------ LOView
QUnit.module("LOView.js fájl tesztjei.", function () {
  QUnit.test("Lampa class -e?", function (assert) {
    assert.ok("Lampa", "class");
  });
  QUnit.test("LampakJatekter class -e?", function (assert) {
    assert.ok("LampakJatekter", "class");
  });
  QUnit.test("setAllapot function -e?", function (assert) {
    assert.ok("setAllapot", "function");
  });
  QUnit.test("szinBeallit function -e?", function (assert) {
    assert.ok("szinBeallit", "function");
  });
  QUnit.test("kattintasTrigger function -e?", function (assert) {
    assert.ok("kattintasTrigger", "function");
  });
});

QUnit.module("FELÜLET TESZTELÉSE LÉTREJÖN-E A JÁTÉKTÉR?  ",function () {
  QUnit.test("Létrejön-e a megfelelő számú elem? ", (assert) => {
    const lOJatek = new LOJatek(9);
    const lJ = new LampakJatekter($('article'));
    assert.equal(lOJatek.ellenorzes(), 9);
  });
  QUnit.test("lámpát fel kapcsoljuk", (assert) => {
    const lOJatek = new LOJatek(9);
    let kattintva = $('.lampa[dataid="3"]');
    kattintva.click();
    let szin = $( kattintva ).css( "background-color");
    assert.equal(szin, "rgb(255, 165, 0)");
  });
  QUnit.test("lámpát lekapcsoljuk", (assert) => {
    const lOJatek = new LOJatek(0);
    let kattintva = $('.lampa[dataid="3"]');
    kattintva.click();
    let szin = $( kattintva ).css( "background-color");
    assert.equal(szin, "rgb(0, 128, 0)");
  });
});
QUnit.module("FELÜLET TESZTELÉSE LÉTREJÖN-E A JÁTÉKTÉR?  ",function () {
  QUnit.test("Létrejön-e a megfelelő számú elem? ", (assert) => {
    const lOJatek = new LOJatek(9);
    const lJ = new LampakJatekter($('article'));
    assert.equal(lOJatek.ellenorzes(), 9);
  });
});



