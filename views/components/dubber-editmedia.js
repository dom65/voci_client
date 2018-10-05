import m from 'mithril';

export default function(model, actions) {
  return {
    view: function(vnode) {

      var d = model.dubberedit;

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
              m("p", [m("strong", "Anno nascita: "), (d.anno ? d.anno : "")]),
              m("p", [m("strong", "Luogo nascita: "), (d.luogo ? d.luogo : "")]),
              model.login.isadmin == 1 ? m("p", [m("strong", "Telefono: "), (d.telefono ? d.telefono : "")]) : null,
              model.login.isadmin == 1 ? m("p", [m("strong", "Email: "), (d.email ? d.email : "")]) : null,
              m("p", [m("strong", "Madrelingua: "), (d.madrelingua ? d.madrelingua : "")]),
              m("p", [m("strong", "Accenti stranieri: "), (d.accentistranieri == 1 ? "Si" : d.accentistranieri == 0 ? "No" : "")]),
              m("p", [m("strong", "Accenti regionali: "), (d.accentiregionali == 1 ? "Si" : d.accentiregionali == 0 ? "No" : "")]),
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
          ]),


        ])
      ])
    }
  }
};
