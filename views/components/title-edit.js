import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var t = model.titleedit;

      return m(".box", [

        m(".media", [
          m(".media-left",

          m("a.button[]", {
            onclick: function() {history.go(model.backHistoryLevel);}
            //href: '/dubbers',
            //oncreate: m.route.link
          }, [
            m("span.has-text-grey-light", [
              m("i.fas.fa-chevron-left"),
            ]),
          ])

          //  m("p.image.is-64x64",
          //    m("img.is-rounded[src='http://bulma.io/images/placeholders/64x64.png']")
          //  )
          ),
          m(".media-content", [
            m("form", {
              onsubmit: actions.submitUpdateTitle,
              disabled: false,
            }, [
              m(".title", t.id ? "Modifica Titolo" : "Nuovo Titolo"),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Titolo")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input.is-disabled[placeholder='Titolo'][type='text']", {
                        oninput: m.withAttr("value", function (v) {t.titolo = v}),
                        value: t.titolo
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Originale")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input.is-disabled[placeholder='Titolo Originale'][type='text']", {
                        oninput: m.withAttr("value", function (v) {t.originale = v}),
                        value: t.originale
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Tipo")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m(".select",
                        m("select", {
                          onchange: m.withAttr("value", function (v) {t.tipo = v}),
                          value: t.tipo
                        }, [
                          m("option", {value: ""}, "Seleziona Genere"),
                          m("option", {value: "FILM"}, "FILM"),
                          m("option", {value: "TELEFILM"}, "TELEFILM"),
                          m("option", {value: "VIDEOGAME"}, "VIDEOGAME")
                        ])
                      )
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Anno")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Anno'][type='number'][min='1920'][max='2028']", {
                        oninput: m.withAttr("value", function (v) {t.anno = v}),
                        value: t.anno
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Direttore")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Direttore'][type='text']", {
                        oninput: m.withAttr("value", function (v) {t.direttore = v}),
                        value: t.direttore
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Assistente")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Assistente'][type='phone']", {
                        oninput: m.withAttr("value", function (v) {t.assistente = v}),
                        value: t.assistente
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Dialoghi")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Dialoghi'][type='email']", {
                        oninput: m.withAttr("value", function (v) {t.dialoghi = v}),
                        value: t.dialoghi
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Studio")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Studio'][type='email']", {
                        oninput: m.withAttr("value", function (v) {t.studio = v}),
                        value: t.studio
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("a.button.is-block.is-info.is-fullwidth", {
                          onclick: actions.submitUpdateTitle
                        },
                        t.id ? "Modifica" : "Crea"
                      )
                    )
                  )
                )
              ])

            ])
          ]),
        ])
      ]);
    }
  }
};
