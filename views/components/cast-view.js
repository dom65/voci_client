import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var cast = model.cast;

      return m(".card", [
        m(".card-image",
          m("figure.image.is-2by3",
            m("img[alt='Placeholder image']", {src: cast.foto})
          )
        ),
        m(".card-content", [
          m(".media", [

            m(".media-content", [
              m("p.title.is-4",
                cast.attore
              ),
              
            ])
          ]),
          m(".content", [
            cast.descrizione,
          ])
        ])
      ])
    }
  }
};
