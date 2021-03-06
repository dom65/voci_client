import m from 'mithril';

export default function(model, actions) {
  return {
    canSubmit: function() {
      console.log("Can Submit Title");
      return model.searchTitle.user && model.searchTitle.user != "0" ||
        model.searchTitle.titolo && model.searchTitle.titolo != "" ||
        model.searchTitle.attore && model.searchTitle.attore !== "" ||
        model.searchTitle.doppiatore && model.searchTitle.doppiatore != "" ||
        model.searchTitle.direttore && model.searchTitle.direttore != "" ||
        model.searchTitle.assistente && model.searchTitle.assistente != ""
    },
    view: function() {
      return m("form", {
        onsubmit: actions.submitSearchTitle,
        disabled: false,
      }, [
        m(".subtitle.has-text-weight-semibold", "Ricerca Titoli"),

        model.login.isadmin == 1 ? m(".field",
          m(".control",
            m("label.checkbox", [
              m("input[type='checkbox']", {
                onclick: m.withAttr("checked", function (v) {if (v) model.searchTitle.user = 1; else model.searchTitle.user = 0}),
                checked: model.searchTitle.user == 1
              }),
              " Solo le mie distribuzioni"
            ])
          )
        ) : null,

        m(".field", [
          m("label.label.is-small", "Titolo"),
          m(".control",
            m("input.input.is-small[placeholder='Titolo'][type='text']", {
              oninput: m.withAttr("value", model.setSearchTitleTitle),
              value: model.searchTitle.titolo
            })
          )
        ]),

        m(".field", [
          m("label.label.is-small", "Attore originale"),
          m(".control",
            m("input.input.is-small[placeholder='Attore originale'][type='text']", {
              oninput: m.withAttr("value", model.setSearchTitleActor),
              value: model.searchTitle.attore
            })
          )
        ]),
        m(".field", [
          m("label.label.is-small", "Doppiatore"),
          m(".control",
            m("input.input.is-small[placeholder='Doppiatore'][type='text']", {
              oninput: m.withAttr("value", model.setSearchTitleDubber),
              value: model.searchTitle.doppiatore
            })
          )
        ]),
        m(".field", [
          m("label.label.is-small", "Direttore"),
          m(".control",
            m("input.input.is-small[placeholder='Direttore'][type='text']", {
              oninput: m.withAttr("value", model.setSearchTitleDirector),
              value: model.searchTitle.direttore
            })
          )
        ]),
        m(".field", [
          m("label.label.is-small", "Assistente"),
          m(".control",
            m("input.input.is-small[placeholder='Assistente'][type='text']", {
              oninput: m.withAttr("value", model.setSearchTitleAssistant),
              value: model.searchTitle.assistente
            })
          )
        ]),
        m(".field", [
          m("label.label.is-small", "Genere"),
          m(".control",
            m(".select.is-small",
              m("select", {
                onchange: m.withAttr("value", model.setSearchTitleTipo),
                value: model.searchTitle.tipo
              }, [
                m("option", {value: ""}, ""),
                m("option", {value: "FILM"}, "FILM"),
                m("option", {value: "TELEFILM"}, "TELEFILM"),
                m("option", {value: "VIDEOGAME"}, "VIDEOGAME")
              ])
            )
          )
        ]),

        m(".field.is-grouped",
          [
            m(".control",
              m("button.button.is-block.is-info.is-small", {
                  onclick: actions.submitSearchTitle,
                  disabled: !this.canSubmit(),
                },
                "Cerca"
              )
            ),
            m("button.button.is-text.is-small", {
                onclick: actions.clearSearchTitle
              },
              "Ripulisci"
            ),

          ]
        ),

      ]);
    }
  }
};
