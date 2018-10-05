import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var titlenote = model.titlenote;

      return m(".card", [
        m(".card-image",
          m("figure.image.is-2by3",
            m("img[alt='Placeholder image']", {src: titlenote.foto})
          )
        ),
        m(".card-content", [
          m(".media", [

            m(".media-content", [
              m("p.title.is-4",
                titlenote.attore
              ),

            ])
          ]),
          m(".content", [
            titlenote.descrizione,
          ])
        ])
      ])
    }
  }
};
