import m from 'mithril';

// components
import Login from './components/login';
import Footer from './components/footer';

export default function(model, actions) {

    var vwLogin = Login(model, actions);

    return {
        onbeforeremove: function(/*vnode*/) {
            console.log('exit animation can start');
            return new Promise(function(resolve) {
                // call after animation completes
                resolve();
            });
        },
        view: function(/*vnode*/) {
            return m("section.hero.is-info.is-fullheight", [
              m(".hero-body", m(vwLogin)),
              //m(".hero-foot", m(Footer))
            ]);
        },
    };
};
