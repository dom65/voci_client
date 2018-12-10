import m from 'mithril';

export default function(model, actions) {
  return {
    view: function() {
      return m(".columns.is-multiline", model.titles.map(t => {
        return m(".column.is-half", [
          m(".box", m("article.media", [
            m(".media-left",
              m("span.icon.is-large",
                m("i.fas.fa-3x", {
                  class: t.tipo == 'FILM' ? "fa-film" : t.tipo == 'TELEFILM' ? "fa-tv" : t.tipo == 'VIDEOGAME' ? "fa-gamepad" : "fa-film"
                })
              )
            ),
            m(".media-content", [
              m("h4.subtitle",
                m("a", {
                    href: '/title/' + t.id,
                    oncreate: m.route.link
                  },
                  t.titolo
                )
              ),
              m("p", [
                t.tipo, " - ", t.anno
              ])
            ]),
          ]))
        ]);
      }));
    }
  }
};
