import m from "mithril";
import loading_img from "../image/loading.gif";

import NavBar from './components/navbar';
import Footer from './components/footer';

export default function(model, actions) {
  return {
    view: function(vnode) {
      return m("section.hero.is-fullheight", [
        m(".hero-head", m(NavBar(model, actions))),
        m(".hero-body",
          m(".container.is-fluid",
            m(".columns", [
              m(".column.is-4", vnode.children[0]),
              m(".column.is-8", vnode.children[1])
            ])
          )
        ),
        m(".modal", {class: model.loading ? 'is-active' : ''}, [
          m(".modal-background.has-background-white-ter", {style: {"opacity": "0.6"}}),
          m(".modal-content",
            m(".has-text-centered", [
              m("img", {src: loading_img}),
              m("div", "Loading ..."),
            ])
          ),
        ]),
        m(".hero-foot", m(Footer(model, actions))),


      ]);
    },
  };
};
