import m from 'mithril';
import brand_img from '../../image/logo_anad.png'

export default function(model, actions) {
  return {
    view: function() {

      return m("nav.navbar.is-primary[aria-label='main navigation'][role='navigation']", {
        style: 'height: 3.50rem;',
      }, [

        m(".navbar-brand", [

          m(".navbar-item",

            m("a.has-text-white", {
                href: '/dubbers',
                oncreate: m.route.link,
              }, [
              m("img[alt='ANAD']", {
                src: brand_img,
              }),
              m("span.is-size-4.has-text-weight-bold", m.trust(" &nbsp;VocIT")),
            ]),

          ),


          //m(".navbar-item",
            //m("img[alt='Voci'][height='29'][width='112']", {src: brand_img})
          //  m(".title.has-text-white", "VOCIT"),
          //),
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
                model.login.isadmin == 1
                ? m("a.navbar-item[href='/dubbercreate']", {
                  oncreate: m.route.link
                }, [
                  m("span.icon",
                    m("i.fas.fa-microphone")
                  ),
                  m("span",
                    "Nuovo Doppiatore"
                  )
                ]) : null,
                model.login.isadmin == 1
                ? m("a.navbar-item[href='/titlecreate']", {
                  oncreate: m.route.link
                }, [
                  m("span.icon",
                    m("i.fas.fa-film")
                  ),
                  m("span",
                    "Nuovo Titolo"
                  )
                ]) : null,
                model.login.email != 'guest'
                ? m("a.navbar-item[]", {
                  disabled: true,
                  //oncreate: m.route.link
                }, [
                  m("span.icon",
                    m("i.fas.fa-id-card")
                  ),
                  m("span",
                    "Profilo"
                  )
                ]) : null,
                m("a.navbar-item[href='/logout']", {
                  oncreate: m.route.link
                }, [
                  m("span.icon",
                    m("i.fas.fa-sign-out-alt")
                  ),
                  m("span",
                    "Esci"
                  )
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
                      "Doppiatori"
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
                      "Titoli"
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
