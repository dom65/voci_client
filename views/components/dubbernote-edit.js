import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var n = model.dubbernoteedit;

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
              onsubmit: actions.submitUpdateDubberNote,
              disabled: false,
            }, [
              m(".title", "Modifica Tags"),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Voce")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m(".select",
                        m("select", {
                          onchange: m.withAttr("value", function (v) {n.voce = v}),
                          value: n.voce
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
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Ruolo")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m(".select",
                        m("select", {
                          onchange: m.withAttr("value", function (v) {n.ruolo = v}),
                          value: n.ruolo
                        }, [
                          m("option", { value: "" }, ""),
                          m("option", { value: "Protagonista" }, "Protagonista"),
                          m("option", { value: "Carattere" }, "Carattere"),
                          m("option", { value: "Secondari" }, "Secondari"),
                          m("option", { value: "Brusio" }, "Brusio")
                        ])
                      )
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", m.trust("Et&agrave; voce "))
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m(".select",
                        m("select", {
                          onchange: m.withAttr("value", function (v) {n.etavoce = v}),
                          value: n.etavoce
                        }, [
                          m("option", { value: "" }, ""),
                          m("option", { value: "Bambina" }, "Bambina"),
                          m("option", { value: "Giovane" }, "Giovane"),
                          m("option", { value: "Matura" }, "Matura"),
                          m("option", { value: "Anziana" }, "Anziana")
                        ])
                      )
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
                    m(".control", [
                      m("input[type='checkbox']", {
                        onclick: m.withAttr("checked", function (v) {if (v) n.cartoni = 1; else n.cartoni = 0}),
                        checked: n.cartoni == 1
                      }),
                      " Cartoni"
                    ])
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "")
                ),
                m(".field-body",
                  m(".field",
                    m(".control", [
                      m("input[type='checkbox']", {
                        onclick: m.withAttr("checked", function (v) {if (v) n.canta = 1; else n.canta = 0}),
                        checked: n.canta == 1
                      }),
                      " Canta"
                    ])
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "")
                ),
                m(".field-body",
                  m(".field",
                    m(".control", [
                      m("input[type='checkbox']", {
                        onclick: m.withAttr("checked", function (v) {if (v) n.piuvoci = 1; else n.piuvoci = 0}),
                        checked: n.piuvoci == 1
                      }),
                      " Duttile"
                    ])
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "")
                ),
                m(".field-body",
                  m(".field",
                    m(".control", [
                      m("input[type='checkbox']", {
                        onclick: m.withAttr("checked", function (v) {if (v) n.teatro = 1; else n.teatro = 0}),
                        checked: n.teatro == 1
                      }),
                      " Teatro"
                    ])
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Sinch")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Sinch'][type='number'][min='1'][max='5']", {
                        oninput: m.withAttr("value", function (v) {n.sync = v}),
                        value: n.sync
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Giudizio")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Giudizio'][type='number'][min='1'][max='10']", {
                        oninput: m.withAttr("value", function (v) {n.giudizio = v}),
                        value: n.giudizio
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Note")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("textarea.textarea[placeholder='Note'][rows='3']", {
                        oninput: m.withAttr("value", function (v) {n.note = v}),
                        value: n.note
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
                          onclick: actions.submitUpdateDubberNote
                        },
                        "Salva"
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
