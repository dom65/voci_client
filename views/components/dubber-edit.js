import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var d = model.dubberedit;

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
              onsubmit: actions.submitUpdateDubber,
              disabled: false,
            }, [
              m(".title", d.id ? "Modifica Doppiatore" : "Nuovo Doppiatore"),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Nome")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input.is-disabled[placeholder='Nome'][type='text'][required='']", {
                        //disabled: true,
                        oninput: m.withAttr("value", function (v) {d.nome = v}),
                        value: d.nome
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Cognome")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input.is-disabled[placeholder='Cognome'][type='text'][required='']", {
                        //disabled: true,
                        oninput: m.withAttr("value", function (v) {d.cognome = v}),
                        value: d.cognome
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Sesso")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m(".select",
                        m("select", {
                          //disabled: true,
                          onchange: m.withAttr("value", function (v) {d.sesso = v}),
                          value: d.sesso
                        }, [
                          m("option", { value: "" }, "Sesso"),
                          m("option", { value: "M" }, "Maschio"),
                          m("option", { value: "F" }, "Femmina")
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
                      m("input.input[placeholder='Anno di nascita'][type='number'][min='1920'][max='2018']", {
                        oninput: m.withAttr("value", function (v) {d.anno = v}),
                        value: d.anno
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Luogo")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Luogo di nascita'][type='text']", {
                        oninput: m.withAttr("value", function (v) {d.luogo = v}),
                        value: d.luogo
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Telefono")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Telefono'][type='phone']", {
                        oninput: m.withAttr("value", function (v) {d.telefono = v}),
                        value: d.telefono
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Email")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m("input.input[placeholder='Email'][type='email']", {
                        oninput: m.withAttr("value", function (v) {d.email = v}),
                        value: d.email
                      })
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "Madrelingua")
                ),
                m(".field-body",
                  m(".field",
                    m(".control",
                      m(".select",
                        m("select", {
                          onchange: m.withAttr("value", function (v) {d.madrelingua = v}),
                          value: d.madrelingua
                        }, [
                          m("option", { value: "" }, "Madrelingua"),
                          m("option", { value: "Inglese" }, "Inglese"),
                          m("option", { value: "Spagnolo" }, "Spagnolo"),
                          m("option", { value: "Francese" }, "Francese"),
                          m("option", { value: "Tedesco" }, "Tedesco"),
                          m("option", { value: "Portoghese" }, "Portoghese"),
                          m("option", { value: "Russo" }, "Russo"),
                          m("option", { value: "Cinese" }, "Cinese"),
                          m("option", { value: "Arabo" }, "Arabo"),
                          m("option", { value: "Giapponese" }, "Giapponese"),

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
                        onclick: m.withAttr("checked", function (v) {if (v) d.accentistranieri = 1; else d.accentistranieri = 0}),
                        checked: d.accentistranieri == 1
                      }),
                      " Accenti stranieri"
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
                        onclick: m.withAttr("checked", function (v) {if (v) d.accentiregionali = 1; else d.accentiregionali = 0}),
                        checked: d.accentiregionali == 1
                      }),
                      " Accenti regionali"
                    ])
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
                        oninput: m.withAttr("value", function (v) {d.note = v}),
                        value: d.note
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
                  m(".file.has-name",
                    m("label.file-label",
                      [
                        m("input.file-input[name='mediafile'][type='file']", {onchange: actions.uploadDubberImage}),
                        m("span.file-cta",
                          [
                            m("span.file-icon",
                              m("i.fas.fa-upload")
                            ),
                            m("span.file-label",
                              "Carica Foto"
                            )
                          ]
                        ),
                        m("span.file-name",
                          d.foto
                        )
                      ]
                    )
                  )
                )
              ]),

              m(".field.is-horizontal", [
                m(".field-label.is-normal",
                  m("label.label", "")
                ),
                m(".field-body",
                  m(".file.has-name",
                    m("label.file-label",
                      [
                        m("input.file-input[name='mediafile'][type='file']", {onchange: actions.uploadDubberAudio}),
                        m("span.file-cta",
                          [
                            m("span.file-icon",
                              m("i.fas.fa-upload")
                            ),
                            m("span.file-label",
                              "Carica Audio"
                            )
                          ]
                        ),
                        m("span.file-name",
                          d.audio
                        )
                      ]
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
                          onclick: actions.submitUpdateDubber
                        },
                        d.id ? "Modifica" : "Crea"
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
