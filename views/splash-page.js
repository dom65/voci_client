import m from "mithril";
import loading_img from "../image/loading.gif";

export default function(vnode) {
  var looper = null;
  var routeToMainInvokedCount = 0;
  return {
    routeToMain() {
      routeToMainInvokedCount++;
      if (vnode.state.dataLoaded) {
        clearTimeout(looper);
        m.route.set('/login');
      }
    },
    oninit() {
      this.dataLoaded = false;
      Promise.all([
        // Fetch all necessary data here
      ]).then(() => {
        this.dataLoaded = true;
        if (routeToMainInvokedCount) {
          this.routeToMain();
        }
      });
    },
    oncreate( /*vnode*/ ) {
      console.log('DOM created');
      looper = setTimeout(this.routeToMain, 2000);
    },
    view: function( /*vnode*/ ) {
      return m("section.hero.is-white.is-fullheight",
        m(".hero-body",
          m(".container.has-text-centered", [
            m("img", {src: loading_img}),
            m("div", "Loading VOCIT ..."),
          ])
        )
      );
    },
  };
};
