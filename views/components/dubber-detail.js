import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var d = model.dubber;

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
              m("p.subtitle",
                d.nome + " " + d.cognome
              ),
            ])
          ]),

          m("hr"),

          m(".content", [
            //m("h4.subtitle.is-4", "casts"),
            m("table.table.is-striped.is-narrow.is-fullwidth.is-size-7", [
              m("thead",
                m("tr", ["personaggio", "attore", "titolo"].map(function(col) {
                  return m("th", col);
                }))
              ),
              m("tbody",
                d.casts.sort(function(a, b) {
                  return b.title.anno - a.title.anno
                }).map(function(row) {
                  return m("tr", [
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
                      m("a", {
                          href: '/title/' + row.title.id,
                          oncreate: m.route.link
                        },
                        row.title.titolo
                      )
                    ]),
                    //m("td", row.title.anno),
                    //m("td", row.title.tipo),

                  ])
                })
              )
            ]),
          ]),
        ])
      ])
    }
  }
};
