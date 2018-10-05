import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var t = model.title;


      return m(".card", [

        m(".card-content", [
          m(".media", [
            m(".media-left",
              m("a.button[]", {
                onclick: function() {
                  history.back()
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


          m("hr"),

          m("table.table.is-striped.is-narrow.is-fullwidth.is-size-7", [
            m("thead",
              m("tr", ["stagione", "episodio", "personaggio", "attore", "doppiatore"].map(function(col) {
                return m("th", col.toUpperCase().replace(/_/g, ' '));
              }))
            ),
            m("tbody",
              t.titlenotes.map(function(row) {
                return m("tr", {
                }, [
                  m("td", row.stagione ? row.stagione : ""),
                  m("td", row.episodio ? row.episodio : ""),
                  m("td", row.personaggio ? row.personaggio.toLowerCase() : ""),
                  m("td", [
                    m("a", {
                        href: '/titlenotes/' + row.id + '/' + row.attore,
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
