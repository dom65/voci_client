import m from 'mithril';

import placeholderF from "../../image/img_avatarF.jpg";
import placeholderM from "../../image/img_avatarM.jpg";

export default function(model, actions) {
  return {
    view: function(vnode) {

      var d = model.dubber;

      return m(".card", [
        m(".card-image",
          m("figure.image",
            m("img[alt='Placeholder image']", {
              style: "object-fit:cover; object-position: center;",
              src: d.foto ? model.mediaOptions.url + d.foto
              : d.sesso == 'F' ? placeholderF : placeholderM
            })
          )
        ),
        m(".card-content", [
          m(".media", [

            m(".media-content", [
              m("p.title.is-4",
                (d.nome ? d.nome + " " : "") + (d.cognome ? d.cognome : "")
              ),

              m("p", [m("strong", "Anno nascita: "), (d.anno ? d.anno : "")]),
              m("p", [m("strong", "Luogo nascita: "), (d.luogo ? d.luogo : "")]),
              model.login.isadmin == 1 || model.login.email == d.email ? m("p", [m("strong", "Telefono: "), (d.telefono ? d.telefono : "")]) : null,
              model.login.isadmin == 1 || model.login.email == d.email ? m("p", [m("strong", "Email: "), (d.email ? d.email : "")]) : null,
              //m("p", [m("strong", "Madrelingua: "), (d.madrelingua ? d.madrelingua : "")]),
              //m("p", [m("strong", "Accenti stranieri: "), (d.accentistranieri == 1 ? "Si" : d.accentistranieri == 0 ? "No" : "")]),
              //m("p", [m("strong", "Accenti regionali: "), (d.accentiregionali == 1 ? "Si" : d.accentiregionali == 0 ? "No" : "")]),
              model.login.isadmin == 1 || model.login.email == d.email ? m("p", [m("strong", "Categoria: "), (d.cat ? d.cat : "")]) : null,
              m("p", [m("strong", "Note: "), (d.note ? d.note : "")]),
              m("hr"),
            ])
          ]),

          m(".content", [
            d.audio ? m("audio", {
              controls: "controls",
              src: model.mediaOptions.url + d.audio,
              type: "audio/mp3"
            }) : null,
            m("p"),
            model.login.isadmin == 1 || model.login.email == d.email ?
            m(".level.is-mobile", [
              m(".level-left", ""),
              m(".level-right",
                [
                  m("a.button.is-info.level-item.is-small", {
                    href: '/dubberedit/' + vnode.attrs.id,
                    oncreate: m.route.link
                  }, [
                    m("span.icon",
                      m("i.far.fa-lg.fa-edit")
                    ),
                    m("span", "Modifica Dati")
                  ]),
                ]
              )
            ]) :
            null,

            m("hr"),
            model.login.isadmin == 1 && d.dubbernotes ? m("p.title.is-6", "Tags") : null,
            model.login.isadmin == 1 && d.dubbernotes ? d.dubbernotes.map(n => {
              return m(".card", [

                m(".card-content", [
                  m(".content", [
                    m("p", [m("strong", "Voce: "), (n.voce ? n.voce : "")]),
                    m("p", [m("strong", "Ruolo: "), (n.ruolo ? n.ruolo : "")]),
                    m("p", [m("strong", m.trust("Et&agrave; voce: ")), (n.etavoce ? n.etavoce : "")]),
                    //m("p", [m("strong", "Cartoni: "), (n.cartoni == 1 ? "Si" : "No")]),
                    //m("p", [m("strong", "Canta: "), (n.canta == 1 ? "Si" : "No")]),
                    //m("p", [m("strong", "Duttile: "), (n.piuvoci == 1 ? "Si" : "No")]),
                    //m("p", [m("strong", "Teatro: "), (n.teatro == 1 ? "Si" : "No")]),
                    //m("p", [m("strong", "Sinch: "), (n.sync ? n.sync : "")]),
                    //m("p", [m("strong", "Giudizio: "), (n.giudizio ? n.giudizio : "")]),
                    m("p", [m("strong", "Note: "), (n.note ? n.note : "")]),
                  ]),
                  m(".subtitle is-size-7.is-pulled-right", n.user.email),
                ]),

              ])
            }) : null,
          ]),

          model.login.isadmin == 1 ?
          m(".level.is-mobile", [
            m(".level-left", ""),
            m(".level-right",
              [
                m("a.button.is-info.level-item.is-small", {
                  href: '/dubbernoteedit/' + vnode.attrs.id,
                  oncreate: m.route.link
                }, [
                  m("span.icon",
                    m("i.far.fa-lg.fa-comment")
                  ),
                  m("span", d.dubbernotes.length > 0 ? "Modifica Tags" : "Aggiungi Tags")
                ]),
              ]
            )
          ]) :
          null,

        ])
      ])
    }
  }
};
