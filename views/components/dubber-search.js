import m from 'mithril';

export default function(model, actions) {
  return {
    canSubmit: function() {
      console.log("Can Submit Dubber");
      return model.searchDubber.user && model.searchDubber.user != "0" || model.searchDubber.sesso && model.searchDubber.sesso !== "" || model.searchDubber.deno && model.searchDubber.deno != ""
    },
    view: function() {
      return m("form", {
        onsubmit: actions.submitSearchDubber,
        disabled: false,
      }, [
        m(".subtitle.has-text-weight-semibold", "Ricerca Doppiatori"),

        model.login.isadmin == 1 ? m(".field",
          m(".control",
            m("label.checkbox", [
              m("input[type='checkbox']", {
                onclick: m.withAttr("checked", function (v) {
                  actions.clearSearchDubber();
                  if (v) {
                    model.searchDubber.user = 1;
                  } else {
                    model.searchDubber.user = 0;
                  }
                }),
                checked: model.searchDubber.user == 1
              }),
              " Solo i miei tags"
            ])
          )
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control",
            m(".select.is-small",
              m("select", {
                onchange: m.withAttr("value", function (v) {model.searchDubber.tags.voce = v}),
                value: model.searchDubber.tags.voce
              }, [
                m("option", { value: "" }, "Voce"),
                m("option", { value: "Scura" }, "Scura"),
                m("option", { value: "Particolare" }, "Particolare"),
                m("option", { value: "Carattere" }, "Carattere"),
                m("option", { value: "Speaker" }, "Speaker"),
                m("option", { value: "Media" }, "Media")
              ])
            )
          )
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control",
            m(".select.is-small",
              m("select", {
                onchange: m.withAttr("value", function (v) {model.searchDubber.tags.ruolo = v}),
                value: model.searchDubber.tags.ruolo
              }, [
                m("option", { value: "" }, "Ruolo"),
                m("option", { value: "Protagonista" }, "Protagonista"),
                m("option", { value: "Secondario" }, "Secondario"),
                m("option", { value: "Brusio" }, "Brusio")
              ])
            )
          )
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control",
            m(".select.is-small",
              m("select", {
                onchange: m.withAttr("value", function (v) {model.searchDubber.tags.etavoce = v}),
                value: model.searchDubber.tags.etavoce
              }, [
                m("option", { value: "" }, m.trust("Et&agrave; voce")),
                m("option", { value: "15" }, "Fino a 15 anni"),
                m("option", { value: "30" }, "Da 16 a 30 anni"),
                m("option", { value: "45" }, "Da 31 a 45 anni"),
                m("option", { value: "60" }, "Da 46 a 60 anni"),
                m("option", { value: "75" }, "Da 61 a 75 anni"),
                m("option", { value: "90" }, "Da 76 a 90 anni")
              ])
            )
          )
        ) : null,
/*
        model.searchDubber.user == 1 ? m(".field.is-small",
          m(".control",
            m("label.checkbox", [
              m("input[type='checkbox']", {
                onclick: m.withAttr("checked", function (v) {if (v) model.searchDubber.tags.cartoni = 1; else model.searchDubber.tags.cartoni = 0}),
                checked: model.searchDubber.tags.cartoni == 1
              }),
              " Cartoni"
            ])
          )
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control",
            m("label.checkbox", [
              m("input[type='checkbox']", {
                onclick: m.withAttr("checked", function (v) {if (v) model.searchDubber.tags.canta = 1; else model.searchDubber.tags.canta = 0}),
                checked: model.searchDubber.tags.canta == 1
              }),
              " Canta"
            ])
          )
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control",
            m("label.checkbox", [
              m("input[type='checkbox']", {
                onclick: m.withAttr("checked", function (v) {if (v) model.searchDubber.tags.piuvoci = 1; else model.searchDubber.tags.piuvoci = 0}),
                checked: model.searchDubber.tags.piuvoci == 1
              }),
              " Duttile"
            ])
          )
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control",
            m("label.checkbox", [
              m("input[type='checkbox']", {
                onclick: m.withAttr("checked", function (v) {if (v) model.searchDubber.tags.teatro = 1; else model.searchDubber.tags.teatro = 0}),
                checked: model.searchDubber.tags.teatro == 1
              }),
              " Teatro"
            ])
          )
        ) : null,
*/
        model.searchDubber.user != 1 ? m(".field",
          m(".control",
            m(".select.is-small",
              m("select", {
                onchange: m.withAttr("value", model.setSearchDubberSesso),
                value: model.searchDubber.sesso
              }, [
                m("option", {
                  value: ""
                }, "Sesso"),
                m("option", {
                  value: "M"
                }, "Maschio"),
                m("option", {
                  value: "F"
                }, "Femmina")
              ])
            )
          )
        ) : null,
/*
        model.searchDubber.user != 1 ? m(".field", [
          m(".control",
            m(".select.is-small",
              m("select", {
                onchange: m.withAttr("value", model.setSearchDubberAnno),
                value: model.searchDubber.anno
              }, [
                m("option", {
                  value: "0"
                }, m.trust("Et&agrave;")),
                m("option", {
                  value: "15"
                }, "Fino a 15 anni"),
                m("option", {
                  value: "30"
                }, "Da 16 a 30 anni"),
                m("option", {
                  value: "45"
                }, "Da 31 a 45 anni"),
                m("option", {
                  value: "60"
                }, "Da 46 a 60 anni"),
                m("option", {
                  value: "75"
                }, "Da 61 a 75 anni"),
                m("option", {
                  value: "90"
                }, "Da 76 a 90 anni")
              ])
            )
          )
        ]) : null,
*/
        model.searchDubber.user != 1 ? m(".field", [
          m(".control",
            m("input.input.is-small[placeholder='Cognome Attore'][type='text']", {
              oninput: m.withAttr("value", model.setSearchDubberDeno),
              value: model.searchDubber.deno
            })
          )
        ]) : null,

        m(".field.is-grouped",
          [
            m(".control",
              m("button.button.is-block.is-info.is-small", {
                  onclick: actions.submitSearchDubber,
                  disabled: !this.canSubmit(),
                },
                "Cerca"
              )
            ),
            m("button.button.is-text.is-small", {
                onclick: actions.clearSearchDubber
              },
              "Ripulisci"
            ),

          ]
        )

      ]);
    }
  }
};
