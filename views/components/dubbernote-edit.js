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
                          m("option", { value: "" }, ""),
                          m("option", { value: "Scura" }, "Scura"),
                          m("option", { value: "Particolare" }, "Particolare"),
                          m("option", { value: "Carattere" }, "Carattere"),
                          m("option", { value: "Speaker" }, "Speaker"),
                          m("option", { value: "Media" }, "Media")
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
                          m("option", { value: "Secondario" }, "Secondario"),
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
                          m("option", { value: "15" }, "Fino a 15 anni"),
                          m("option", { value: "30" }, "Da 16 a 30 anni"),
                          m("option", { value: "45" }, "Da 31 a 45 anni"),
                          m("option", { value: "60" }, "Da 46 a 60 anni"),
                          m("option", { value: "75" }, "Da 61 a 75 anni"),
                          m("option", { value: "90" }, "Da 76 a 90 anni")
                        ])
                      )
                    )
                  )
                )
              ]),
/*
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
                  m(".field.is-grouped", [
                    m(".control.is-expanded",
                      m("input.input[placeholder='Sinch'][type='range'][min='1'][max='5'][step='1']", {
                        oninput: m.withAttr("value", function (v) {n.sync = v}),
                        value: parseInt(n.sync)
                      })
                    ),
                    m(".control",
                      m("input.input[readonly='']", {
                        value: parseInt(n.sync)
                      })
                    )
                  ])
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Giudizio")
                ),
                m(".field-body",
                  m(".field.is-grouped", [
                    m(".control.is-expanded",
                      m("input.input[placeholder='Giudizio'][type='range'][min='1'][max='10'][step='1']", {
                        oninput: m.withAttr("value", function (v) {n.giudizio = v}),
                        value: parseInt(n.giudizio)
                      })
                    ),
                    m(".control",
                      m("input.input[readonly='']", {
                        value: parseInt(n.giudizio)
                      })
                    )
                  ])
                )
              ]),
*/
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
