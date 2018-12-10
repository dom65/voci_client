import m from 'mithril';

import placeholderF from "../../image/img_avatarF.jpg";
import placeholderM from "../../image/img_avatarM.jpg";

export default function(model, actions) {
  return {
    view: function() {
      return m(".columns.is-multiline", model.dubbers.map(d => {
        return m(".column.is-one-third", [
          m(".box", m("article.media", [
            m(".media-left",
              m("figure.image.is-64x64",
                m("img.is-rounded", {
                  style: "object-fit:cover; border-radius:50%; width:64px; height:64px",
                  src: d.foto ? model.mediaOptions.url + d.foto
                  : d.sesso == 'F' ? placeholderF : placeholderM
                })
              )
            ),
            m(".media-content", [
              m("p.subtitle.is-6",
                m("a", {
                    href: '/dubber/' + d.id,
                    oncreate: m.route.link
                  },
                  d.nome + " " + d.cognome
                )
              ),
              d.anno ? d.anno : m.trust("&nbsp;"),
              d.luogo ? " - " + d.luogo : m.trust("&nbsp;"),
              m("br"),
            ]),
          ]))
        ]);
      }));
    },
  }
};
