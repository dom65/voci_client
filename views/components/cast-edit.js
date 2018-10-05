import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var c = model.casts;
      var cast = model.cast;

      return m(".box", [

        m(".media", [
          m(".media-left",

          m("a.button[]", {
            onclick: function() {history.back()}

            //href: '/titles',
            //oncreate: m.route.link
          }, [
            m("span.has-text-grey-light", [
              m("i.fas.fa-chevron-left"),
            ]),
          ])

          //  m("p.image.is-64x64",
          //    m("img.is-rounded[src='http://bulma.io/images/placeholders/128x128.png']")
          //  )
          ),
          m(".media-content", [
            m("h4.subtitle", cast.attore),
            m("hr"),
            m("table.table.is-striped.is-narrow.is-fullwidth.is-size-7", [
              m("thead",
                m("tr", ["personaggio", "doppiatore", "titolo", "anno"].map(function(col) {
                  return m("th", col.toUpperCase().replace(/_/g, ' '));
                }))
              ),
              m("tbody",
                c.map(function(row) {
                  return m("tr", [
                    m("td", row.personaggio),
                    m("td", [
                      row.dubber ? m("a", {
                          href: '/dubber/' + row.dubber.id,
                          oncreate: m.route.link
                        },
                        row.dubber.nome + " " + row.dubber.cognome
                      ) : row.doppiatore
                    ]),
                    m("td", [
                      m("a", {
                          href: '/title/' + row.title.id,
                          oncreate: m.route.link
                        },
                        row.title.titolo
                      )
                    ]),
                    m("td", row.title.anno),


                  ])
                })
              )
            ]),
          ]),
        ])
      ]);
    }
  }
};
