import m from 'mithril';
import placeholderM from "../../image/img_avatarM.jpg";

export default function(model, actions) {
  return {
    canSubmitTitlenote: function() {
      return model.titlenoteedit.personaggio && model.titlenoteedit.personaggio != "" && model.titlenoteedit.attore && model.titlenoteedit.attore !== "" && model.titlenoteedit.doppiatore && model.titlenoteedit.doppiatore != ""
    },

    view: function(vnode) {

      var t = model.title;
      var user = model.login;

      return m(".card", [

        m(".card-content", [
          m(".media", [
            m(".media-left",
              m("a.button[]", {
                onclick: function() {
                  history.go(model.backHistoryLevel);
                }
              }, [
                m("span.has-text-grey-light", [
                  m("i.fas.fa-chevron-left"),
                ]),
              ]),
            ),
            m(".media-content", [
              m("h4.subtitle", t.titolo),
              m("p", t.originale ? '(' + t.originale + ')' : ''),

              m("p", t.tipo, " - ", t.anno),
              m("p", "Direttore: " + t.direttore + " Assistente: " + t.assistente + " Dialoghi: " + t.dialoghi),
            ]),
          ]),

          m("hr"),

          user.isadmin == 1 && t.titlenotes.length == 0 && !model.titlenoteedit.id ? m(".level.is-mobile", [
            m(".level-left", ""),
            m(".level-right",
              [
                m("a.button.is-info.level-item", {
                  onclick: function() {
                    model.titlenoteedit.id = '0';
                  },
                }, [
                  m("span.icon",
                    m("i.far.fa-lg.fa-edit")
                  ),
                  m("span", "Create your distribution")
                ]),
              ]
            )
          ]) :
          null,

          user.isadmin == 1 && (t.titlenotes.length > 0 || model.titlenoteedit.id) ? m(".card.events-card", [
              m("header.card-header", [
                  m("p.card-header-title", "Distribuzione"),
                  m("a.card-header-icon[aria-label='more options'][href='']",
                    m("span.icon",
                      m("i.fa.fa-angle-down[aria-hidden='true']")
                    )
                  )
                ]
              ),
              m(".card-table",
                m(".content", m("form",
                  m("table.table.is-striped.is-narrow.is-fullwidth.is-size-7", [
                    m("thead",
                      m("tr", (t.tipo == "TELEFILM" ?
                        ["stagione", "episodio", "personaggio", "foto", "attore", "doppiatore", ""] : ["personaggio", "foto", "attore", "doppiatore", ""]).map(function(col) {
                        return m("th", col.toUpperCase().replace(/_/g, ' '));
                      }))
                    ),
                    m("tbody", [
                      t.titlenotes.filter(function(row) {
                        return row.id != model.titlenoteedit.id;
                      }).map(function(row) {
                        return m("tr", {key: row.id}, [
                          t.tipo == "TELEFILM" ? m("td", row.stagione ? row.stagione : "") : null,
                          t.tipo == "TELEFILM" ? m("td", row.episodio ? row.episodio : "") : null,
                          m("td", {style: "vertical-align:middle;"}, row.personaggio ? row.personaggio.toLowerCase() : ""),
                          m("td", {style: "vertical-align:middle;"},
                            m("figure.image.is-64x64",
                              m("img.is-rounded", {
                                style: "object-fit:cover; border-radius:50%; width:64px; height:64px",
                                src: row.fotop ? model.mediaOptions.url + row.fotop
                                : placeholderM
                              })
                            )
                          ),
                          m("td", {style: "vertical-align:middle;"}, [
                            m("a", {
                                href: '/titlenotes/' + row.id + '/' + row.attore,
                                oncreate: m.route.link
                              },
                              row.attore
                            )
                          ]),
                          m("td", {style: "vertical-align:middle;"}, [
                            row.dubber ? m("a", {
                                href: '/dubber/' + row.dubber.id,
                                oncreate: m.route.link
                              },
                              row.dubber.nome + " " + row.dubber.cognome
                            ) : row.doppiatore
                          ]),
                          m("td", {style: "vertical-align:middle;"}, [
                            m("a.is-small", {
                                onclick: function() {
                                  return actions.editTitlenote(row);
                                }
                              },
                              m("span.icon",
                                m("i.fa.fa-edit")
                              )
                            ),
                            m("a.is-small", {
                                onclick: function() {
                                  return actions.submitDeleteTitlenote(row.id);
                                }
                              },
                              m("span.icon",
                                m("i.fa.fa-trash")
                              )
                            ),
                          ]),
                        ])
                      }),

                      m("tr", {key: '0'}, [
                        t.tipo == "TELEFILM" ? m("td", {style: "vertical-align:middle;"},
                          m(".field",
                            m(".control",
                              m("input.input.is-small[placeholder='Stagione'][type='number'][min='1'][max='15']", {
                                oninput: m.withAttr("value", function (v) {model.titlenoteedit.stagione = v}),
                                value: model.titlenoteedit.stagione || ""
                              })
                            )
                          )
                        ) : null,
                        t.tipo == "TELEFILM" ? m("td", {style: "vertical-align:middle;"},
                          m(".field",
                            m(".control",
                              m("input.input.is-small[placeholder='Episodio'][type='number'][min='1'][max='15']", {
                                oninput: m.withAttr("value", function (v) {model.titlenoteedit.episodio = v}),
                                value: model.titlenoteedit.episodio || ""
                              })
                            )
                          )
                        ) : null,
                        m("td", {style: "vertical-align:middle;"},
                          m(".field",
                            m(".control",
                              m("input.input.is-small[placeholder='Personaggio'][type='text']", {
                                oninput: m.withAttr("value", function (v) {model.titlenoteedit.personaggio = v}),
                                value: model.titlenoteedit.personaggio || ""
                              })
                            )
                          )
                        ),
                        m("td", {style: "vertical-align:middle;"},
                          m("nav.level",
                            m(".level-left", [
                              m(".level-item",
                                m("figure.image.is-64x64",
                                  m("img.is-rounded", {
                                      style: "object-fit:cover; border-radius:50%; width:64px; height:64px",
                                      src: model.titlenoteedit.fotop ? model.mediaOptions.url + model.titlenoteedit.fotop : placeholderM
                                    }
                                  )
                                )
                              ),
                              m(".level-item",
                                m(".field",
                                  m(".file.is-small",
                                    m("label.file-label",
                                      [
                                        m("input.file-input[name='mediafile'][type='file']", {onchange: actions.uploadTitlenoteImage}),
                                        m("span.file-cta",
                                          [
                                            m("span.file-icon",
                                              m("i.fas.fa-upload")
                                            ),
                                            m("span.file-label",
                                              "Image..."
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  )
                                )
                              )
                            ])
                          )
                        ),
                        m("td", {style: "vertical-align:middle;"},
                          m(".field",
                            m(".control",
                              m("input.input.is-small[placeholder='Attore'][type='text']", {
                                oninput: m.withAttr("value", function (v) {model.titlenoteedit.attore = v}),
                                value: model.titlenoteedit.attore || ""
                              })
                            )
                          )
                        ),
                        m("td", {style: "vertical-align:middle;"},
                          m(".field",
                            m(".control",
                              m("input.input.is-small[placeholder='Doppiatore'][type='text']", {
                                oninput: m.withAttr("value", function (v) {model.titlenoteedit.doppiatore = v}),
                                onchange: m.withAttr("value", actions.changeTitlenoteDubber),
                                value: model.titlenoteedit.doppiatore || ""
                              })
                            )
                          )
                        ),
                        m("td", {style: "vertical-align:middle;"}, [
                          m("a.button.is-small", {
                            onclick: actions.submitUpdateTitlenote,
                            disabled: !this.canSubmitTitlenote(),
                          },
                            m("span.icon",
                              m("i.fa.fa-plus")
                            )
                          ),

                        ]),
                      ]),

                    ])
                  ])
                ))
              ),
              m("footer.card-footer",
                m("a.button.card-footer-item[href='']", {disabled: true},
                  "Esporta distribuzione"
                )
              )
            ]
          ) : null,

          m("hr"),

          m("table.table.is-striped.is-narrow.is-fullwidth.is-size-7", [
            m("thead",
              m("tr", ["personaggio", "attore", "doppiatore"].map(function(col) {
                return m("th", col.toUpperCase().replace(/_/g, ' '));
              }))
            ),
            m("tbody",
              t.casts.map(function(row) {
                return m("tr", {
                  class: model.searchTitle.attore && row.attore.toLowerCase().indexOf(model.searchTitle.attore.toLowerCase()) !== -1 ? "is-selected" : model.searchTitle.doppiatore && row.dubber && row.dubber.cognome.toLowerCase().indexOf(model.searchTitle.doppiatore.toLowerCase()) !== -1 ? "is-selected" : model.searchDubber.deno && row.dubber && row.dubber.cognome.toLowerCase().indexOf(model.searchDubber.deno.toLowerCase()) !== -1 ? "is-selected" : ""
                }, [
                  m("td", row.personaggio ? row.personaggio.toLowerCase() : ""),
                  m("td", [
                    m("a", {
                        href: '/casts/' + row.id + '/' + row.attore,
                        oncreate: m.route.link
                      },
                      row.attore
                    )
                  ]),
                  m("td", [
                    row.dubber ? m("a", {
                        href: '/dubber/' + row.dubber.id,
                        oncreate: m.route.link
                      },
                      row.dubber.nome + " " + row.dubber.cognome
                    ) : row.doppiatore
                  ]),
                ])
              })
            )
          ]),




        ]),
      ]);
    }
  }
};
