import m from 'mithril';

export default function(model, actions) {
  return {
    view: function() {

      return m(".container.has-text-centered", [
        m(".column.is-6.is-offset-3", [
          m("h1.title",
            "VOCI"
          ),
          m("h2.subtitle",
            "Oltre 1500 dopppiatori, la loro faccia, i loro titoli."
          )
        ]),
        m(".column.is-6.is-offset-3", [
          m(".box", [
            m("form", {
              onsubmit: actions.submitLogin,
              disabled: false,
            }, [
              
              m(".field",
                m(".control",
                  m("input.input[name='user'][autofocus=''][placeholder='Your Email'][type='email'][required]", {
                    oninput: m.withAttr("value", model.setEmail),
                    value: model.user.email,
                  })
                )
              ),
              m(".field",
                m(".control",
                  m("input.input[name='password'][placeholder='Your Password'][type='password'][required]", {
                    autocomplete: true,
                    oninput: m.withAttr("value", model.setPassword),
                    value: model.user.password,
                  })
                )
              ),
              m(".field",
                m("label.checkbox", [
                  m("input[type='checkbox']"),
                  " Remember me"
                ])
              ),
              m("a.button.is-block.is-info.is-fullwidth", {
                  onclick: actions.submitLogin
                },
                "Login"
              )
            ])
          ]),
          m("p.has-text-grey", [
            m("a[href='../']",
              "Forgot Password"
            ),
            " · ",
            m.trust("&nbsp;"),
            m("a[href='../']",
              "Need Help?"
            )
          ])
        ])
      ]);
    }
  }
};
