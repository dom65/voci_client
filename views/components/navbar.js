import m from 'mithril';
import brand_img from '../../image/voci.png'

export default function(model, actions) {
  return {
    view: function() {

      return m("nav.navbar.is-primary[aria-label='main navigation'][role='navigation']", [

        m(".navbar-brand", [
          m(".navbar-item",
            //m("img[alt='Voci'][height='29'][width='112']", {src: brand_img})
            m(".title.has-text-white", "VOCI"),
          ),
          m('a.navbar-burger', {
            class: model.mainMenuToggle ? 'is-active' : '',
            onclick: actions.toggleMainMenu
          }, [
            m('span', ''),
            m('span', ''),
            m('span', '')
          ]),
        ]),

        m(".navbar-menu", {
          class: model.mainMenuToggle ? 'is-active' : ''
        }, [
          m(".navbar-start", [
            m(".navbar-item.has-dropdown.is-hoverable", [
              m("a.navbar-link", [
                model.login.email
              ]),
              m(".navbar-dropdown", [
                m("a.navbar-item[disabled = !model.user.idAdmin][href='/admin']", {
                  oncreate: m.route.link
                }, [
                  m("i.fa.fa-id-card.fa-2"),
                  "  Profile"
                ]),
                m("a.navbar-item[href='/logout']", {
                  oncreate: m.route.link
                }, [
                  m("i.fa.fa-sign-out.fa-2"),
                  "  Logout"
                ])
              ])
            ]),
          ]),
          m(".navbar-end",
            m(".navbar-item",
              m(".field.is-grouped", [
                m("p.control",
                  m("a.button.is-primary[href='/dubbers']", {
                    oncreate: m.route.link
                  }, [
                    m("span.icon",
                      m("i.fas.fa-microphone")
                    ),
                    m("span",
                      "Dubbers"
                    )
                  ])
                ),
                m("p.control",
                  m("a.button.is-primary[href='/titles']", {
                    oncreate: m.route.link
                  }, [
                    m("span.icon",
                      m("i.fas.fa-film")
                    ),
                    m("span",
                      "Titles"
                    )
                  ])
                )
              ])
            )
          ),
        ])
      ]);
    }
  }
};
