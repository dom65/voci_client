import m from 'mithril';

export default function(model, actions) {
  return {
    canSubmit: function() {
      console.log("Can Submit Dubber");
      return model.searchDubber.user && model.searchDubber.user != "0" || model.searchDubber.anno && model.searchDubber.anno !== "0" || model.searchDubber.deno && model.searchDubber.deno != ""
    },
    view: function() {
      return m("form", {
        onsubmit: actions.submitSearchDubber,
        disabled: false,
      }, [
        m(".title", "Search Dubbers"),

        m(".field",
          m(".control", [
            m("input[type='checkbox']", {
              onclick: m.withAttr("checked", function (v) {if (v) model.searchDubber.user = 1; else model.searchDubber.user = 0}),
              checked: model.searchDubber.user == 1
            }),
            " Only my tags"
          ])
        ),

        model.searchDubber.user == 1 ? m(".field",
          m(".control",
            m(".select",
              m("select", {
                onchange: m.withAttr("value", function (v) {model.searchDubber.tags.voce = v}),
                value: model.searchDubber.tags.voce
              }, [
                m("option", { value: "" }, "Voice"),
                m("option", { value: "Nera" }, "Nera"),
                m("option", { value: "Scura" }, "Scura"),
                m("option", { value: "Rauca" }, "Rauca"),
                m("option", { value: "Leggera" }, "Leggera"),
                m("option", { value: "Pulita" }, "Pulita"),
                m("option", { value: "Speaker" }, "Speaker")
              ])
            )
          )
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control",
            m(".select",
              m("select", {
                onchange: m.withAttr("value", function (v) {model.searchDubber.tags.ruolo = v}),
                value: model.searchDubber.tags.ruolo
              }, [
                m("option", { value: "" }, "Role"),
                m("option", { value: "Protagonista" }, "Protagonista"),
                m("option", { value: "Carattere" }, "Carattere"),
                m("option", { value: "Secondari" }, "Secondari"),
                m("option", { value: "Brusio" }, "Brusio")
              ])
            )
          )
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control",
            m(".select",
              m("select", {
                onchange: m.withAttr("value", function (v) {model.searchDubber.tags.etavoce = v}),
                value: model.searchDubber.tags.etavoce
              }, [
                m("option", { value: "" }, m.trust("Et&agrave; voce")),
                m("option", { value: "Bambina" }, "Bambina"),
                m("option", { value: "Giovane" }, "Giovane"),
                m("option", { value: "Matura" }, "Matura"),
                m("option", { value: "Anziana" }, "Anziana")
              ])
            )
          )
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control", [
            m("input[type='checkbox']", {
              onclick: m.withAttr("checked", function (v) {if (v) model.searchDubber.tags.cartoni = 1; else model.searchDubber.tags.cartoni = 0}),
              checked: model.searchDubber.tags.cartoni == 1
            }),
            " Cartoni"
          ])
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control", [
            m("input[type='checkbox']", {
              onclick: m.withAttr("checked", function (v) {if (v) model.searchDubber.tags.canta = 1; else model.searchDubber.tags.canta = 0}),
              checked: model.searchDubber.tags.canta == 1
            }),
            " Canta"
          ])
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control", [
            m("input[type='checkbox']", {
              onclick: m.withAttr("checked", function (v) {if (v) model.searchDubber.tags.piuvoci = 1; else model.searchDubber.tags.piuvoci = 0}),
              checked: model.searchDubber.tags.piuvoci == 1
            }),
            " Duttile"
          ])
        ) : null,

        model.searchDubber.user == 1 ? m(".field",
          m(".control", [
            m("input[type='checkbox']", {
              onclick: m.withAttr("checked", function (v) {if (v) model.searchDubber.tags.teatro = 1; else model.searchDubber.tags.teatro = 0}),
              checked: model.searchDubber.tags.teatro == 1
            }),
            " Teatro"
          ])
        ) : null,

        m(".field", [
          m(".control",
            m(".select",
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
        ]),

        m(".field", [
          m(".control",
            m(".select",
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
        ]),

        m(".field", [
          m(".control",
            m("input.input[placeholder='Dubber name'][type='text']", {
              oninput: m.withAttr("value", model.setSearchDubberDeno),
              value: model.searchDubber.deno
            })
          )
        ]),

        m(".field.is-grouped",
          [
            m(".control",
              m("button.button.is-block.is-info.is-fullwidth", {
                  onclick: actions.submitSearchDubber,
                  disabled: !this.canSubmit(),
                },
                "Search"
              )
            ),
            m("button.button.is-text", {
                onclick: actions.clearSearchDubber
              },
              "Clear"
            ),

          ]
        )

      ]);
    }
  }
};
