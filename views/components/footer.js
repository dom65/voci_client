import m from 'mithril';

export default function(model, actions) {
  return {
    view: function() {

      return m("footer.footer",
        m(".container",
          m(".content.has-text-centered",
            m("p", [
              m("strong",
                "VOCI"
              ),
              " by ",
              m("a[href='mailto:info@kodedonda.it']",
                "Kodedonda"
              ),
              ". The source code is licensed",
              m("a[href='http://opensource.org/licenses/mit-license.php']",
                " MIT"
              ),
              "."
            ])
          )
        )
      )

    }
  }
};
