import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var t = model.title;

      return m(".card", [
        m(".card-image",
          m("figure.image.is-2by3",
            m("img[alt='Placeholder image']", {src: t.poster})
          )
        ),
        m(".card-content", [
          m(".media", [

            m(".media-content", [
              m("p.title.is-4",
                t.titolo
              ),
              m("p.subtitle.is-6",
                t.tipo + " - "+t.anno
              )
            ])
          ]),
          m(".content", [
            t.descrizione,
            m("br"),
          ])
        ])
      ])
    }
  }
};
