import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var d = model.dubberedit;
      var n = model.dubbernoteedit;

      return m(".card", [
        m(".card-image",
          m("figure.image",
            m("img[alt='Placeholder image']", {
              style: "object-fit:cover; object-position: center;",
              src: model.mediaOptions.url + d.foto
            })
          )
        ),

        m(".card-content", [
          m(".media", [
            m(".media-content", [
              m("p.title.is-4",
                d.nome + " " + d.cognome
              ),
            ])
          ]),

          m(".content", [
            m("hr"),
            //m(".card", [

              //m(".card-content", [
                //m(".content", [
                  m("p", [m("strong", "Voce: "), (n.voce ? n.voce : "")]),
                  m("p", [m("strong", "Ruolo: "), (n.ruolo ? n.ruolo : "")]),
                  m("p", [m("strong", m.trust("Et&agrave; voce: ")), (n.etavoce ? n.etavoce : "")]),
                  m("p", [m("strong", "Cartoni: "), (n.cartoni == 1 ? "Si" : n.cartoni == 0 ? "No" : "")]),
                  m("p", [m("strong", "Canta: "), (n.canta == 1 ? "Si" : n.canta == 0 ? "No" : "")]),
                  m("p", [m("strong", "Duttile: "), (n.piuvoci == 1 ? "Si" : n.piuvoci == 0 ? "No" : "")]),
                  m("p", [m("strong", "Teatro: "), (n.teatro == 1 ? "Si" : n.teatro == 0 ? "No" : "")]),
                  m("p", [m("strong", "Sinch: "), (n.sync ? n.sync : "")]),
                  m("p", [m("strong", "Giudizio: "), (n.giudizio ? n.giudizio : "")]),
                  m("p", [m("strong", "Note: "), (n.note ? n.note : "")]),
                //]),
                m(".subtitle is-size-7.is-pulled-right", model.login.email),
              //]),

            //]),
          ]),

        ])
      ])
    }
  }
};
