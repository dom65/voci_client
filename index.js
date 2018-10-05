import m from "mithril";

import createModel from "./model";
import createDataApi from "./dataApi";
import createActions from "./actions";

import SplashPage from './views/splash-page';
import LoginPage from './views/login-page';
import SearchLayout from './views/search-layout';

import DubberSearch from './views/components/dubber-search';
import DubberList from './views/components/dubber-list';
import DubberView from './views/components/dubber-view';
import DubberDetail from './views/components/dubber-detail';
import DubberEdit from './views/components/dubber-edit';
import DubberEditMedia from './views/components/dubber-editmedia';

import DubberNoteEdit from './views/components/dubbernote-edit';
import DubberNoteEditMedia from './views/components/dubbernote-editmedia';

import TitleSearch from './views/components/title-search';
import TitleList from './views/components/title-list';
import TitleView from './views/components/title-view';
import TitleDetail from './views/components/title-detail';
import TitleEdit from './views/components/title-edit';

import TitlenoteView from './views/components/titlenote-view';
import TitlenoteDetail from './views/components/titlenote-detail';

import CastView from './views/components/cast-view';
import CastDetail from './views/components/cast-detail';
import CastEdit from './views/components/cast-edit';


var settings = {

  graphql_options: {
    url: '/graphql',
    //url: 'http://localhost:3000/graphql',
  },

  graphql_queries: {
    dubbers: 'query($deno: String, $sesso: String, $anno: Int, $user: Int, $tags: DubbernoteFilter) {\
	     dubbers(where: {deno: $deno, sesso: $sesso, anno: $anno, user: $user}, tags: $tags) {\
         id, nome, cognome, sesso, anno, luogo, foto\
       }\
    }',

    dubber: 'query($id: ID!) {\
    	dubber(id: $id) {\
        id, nome, cognome, sesso, telefono, foto, audio, anno, luogo, note, email, madrelingua, accentistranieri, accentiregionali, casts {\
          id, personaggio, attore, title {\
            id, titolo, tipo, anno\
          }\
        }\
        dubbernotes{\
          id, voce, ruolo, etavoce, cartoni, canta, piuvoci, teatro, sync, giudizio, note, user {\
            id, email\
          }\
        }\
        dubberfiles{\
          id, path, type, user {\
            id, email\
          }\
        }\
      }\
    }',

    titles: 'query($titolo: String, $attore: String, $doppiatore: String, $tipo: String, $user: Int) {\
	     titles(where: {titolo: $titolo, attore: $attore, doppiatore: $doppiatore, tipo: $tipo, user: $user}) {\
         id, titolo, originale, tipo, anno\
       }\
    }',

    title: 'query ($id: ID!) {\
      title (id: $id) {\
        id, titolo, originale, direttore, assistente, dialoghi, anno, tipo, poster, descrizione, casts {\
          id, personaggio, attore, doppiatore, dubber {\
            id, nome, cognome, sesso, telefono, foto,\
          }\
        }\
        titlenotes{\
          id, stagione, episodio, personaggio, foto, attore, doppiatore, dubber {\
            id, nome, cognome, sesso, telefono, foto,\
          }\
        }\
      }\
    }',

    titlenote: 'query ($id: ID) {\
      titlenote(id: $id) {\
        attore, descrizione, foto,\
      }\
    }',

    casts: 'query($attore: String!) {\
	     casts(where: {attore: $attore}) {\
         id, personaggio, attore, doppiatore, dubber {\
           id, nome, cognome, sesso, telefono, foto,\
         }, title {\
           id, titolo, tipo, anno\
         }\
       }\
    }',

    cast: 'query ($id: ID) {\
      cast(id: $id) {\
        attore, descrizione, foto,\
      }\
    }',
  },

  graphql_mutations: {
    login: 'mutation($email: String, $password: String) {\
      login(input: {email: $email, password: $password}) {\
        id email isadmin token\
      }\
    }',

    updateDubber: 'mutation($id: ID!, $nome: String!, $cognome: String!, $sesso: String!, $telefono: String, $anno: Int, $luogo: String, $note: String, $email: String, $madrelingua: String, $accentistranieri: Int, $accentiregionali: Int, $foto: String, $audio: String) {\
      updateDubber(id: $id, input: {nome: $nome, cognome: $cognome, sesso: $sesso, telefono: $telefono, anno: $anno, luogo: $luogo, note: $note, email: $email, madrelingua: $madrelingua, accentistranieri: $accentistranieri, accentiregionali: $accentiregionali, foto: $foto, audio: $audio})\
    }',

    createDubbernote: 'mutation($voce: String, $ruolo: String, $etavoce: String, $cartoni: Int, $canta: Int, $piuvoci: Int, $teatro: Int, $sync: Int, $giudizio: Int, $note: String, $id_dubber: ID!, $id_user: ID!) {\
      createDubbernote(input: {voce: $voce, ruolo: $ruolo, etavoce: $etavoce, cartoni: $cartoni, canta: $canta, piuvoci: $piuvoci, teatro: $teatro, sync: $sync, giudizio: $giudizio, note: $note, id_dubber: $id_dubber, id_user: $id_user}) {\
        id\
      }\
    }',

    updateDubbernote: 'mutation($id: ID!, $voce: String, $ruolo: String, $etavoce: String, $cartoni: Int, $canta: Int, $piuvoci: Int, $teatro: Int, $sync: Int, $giudizio: Int, $note: String, $id_dubber: ID!, $id_user: ID!) {\
      updateDubbernote(id: $id, input: {voce: $voce, ruolo: $ruolo, etavoce: $etavoce, cartoni: $cartoni, canta: $canta, piuvoci: $piuvoci, teatro: $teatro, sync: $sync, giudizio: $giudizio, note: $note, id_dubber: $id_dubber, id_user: $id_user})\
    }',

  },

};

var model = createModel(settings),
  dataApi = createDataApi(settings),
  actions = createActions(settings, model, dataApi);

var vwLogin = LoginPage(model, actions),
  vwSearchLayout = SearchLayout(model, actions),
  vwDubberSearch = DubberSearch(model, actions),
  vwDubberList = DubberList(model, actions),
  vwDubberView = DubberView(model, actions),
  vwDubberDetail = DubberDetail(model, actions),
  vwDubberEdit = DubberEdit(model, actions),
  vwDubberEditMedia = DubberEditMedia(model, actions),
  vwDubberNoteEdit = DubberNoteEdit(model, actions),
  vwDubberNoteEditMedia = DubberNoteEditMedia(model, actions),
  vwTitleSearch = TitleSearch(model, actions),
  vwTitleList = TitleList(model, actions),
  vwTitleView = TitleView(model, actions),
  vwTitleEdit = TitleEdit(model, actions),
  vwTitleDetail = TitleDetail(model, actions),
  vwTitlenoteView = TitlenoteView(model, actions),
  vwTitlenoteDetail = TitlenoteDetail(model, actions),
  vwCastView = CastView(model, actions),
  vwCastEdit = CastEdit(model, actions),
  vwCastDetail = CastDetail(model, actions);



//actions.login("angela.paoletti@localtransit.biz", "changeme")
//  .then(function(res) {
//    settings.graphql_options.headers = {
//      "Authorization": "Bearer " + model.login.token
//    };
//  });

// Patch router to scroll top
m.route.setOrig = m.route.set;
m.route.set = function(path, data, options) {
	m.route.setOrig(path, data, options);
	window.scrollTo(0,0);
};

m.route.linkOrig = m.route.link;
m.route.link = function(vnode) {
	m.route.linkOrig(vnode);
	window.scrollTo(0,0);
};

m.route(document.body, '/splash', {
  '/splash': SplashPage,
  '/login': {
    render: function() {
      return m(vwLogin);
    },
  },
  '/logout': {
    onmatch: function(params, route) {
      return actions.onNavigateTo("logout", params, route)
    },
    render: function() {
      return m(vwLogin);
    },
  },
  '/dubbers': {
    onmatch: function(params, route) {
      return actions.onNavigateTo("dubbers", params, route)
    },
    render: function() {
      return m(vwSearchLayout, [m(vwDubberSearch), m(vwDubberList)]);
    },
  },
  '/dubber/:id': {
    onmatch: function(params, route) {
      model.loading = true;
      m.redraw();
      console.log(params);
      return actions.onNavigateTo("dubber", params, route)
    },
    render: function(vnode) {
      return m(vwSearchLayout, vnode.attrs, [
        m(vwDubberView, vnode.attrs),
        m(vwDubberDetail, vnode.attrs)
      ]);
    },
  },
  '/dubberedit/:id': {
    onmatch: function(params, route) {
      model.loading = true;
      m.redraw();
      console.log(params);
      return actions.onNavigateTo("dubberedit", params, route)
    },
    render: function(vnode) {
      return m(vwSearchLayout, vnode.attrs, [
        m(vwDubberEditMedia, vnode.attrs),
        m(vwDubberEdit, vnode.attrs)
      ]);
    },
  },
  '/dubbernoteedit/:id': {
    onmatch: function(params, route) {
      model.loading = true;
      m.redraw();
      return actions.onNavigateTo("dubbernoteedit", params, route)
    },
    render: function(vnode) {
      return m(vwSearchLayout, vnode.attrs, [
        m(vwDubberNoteEditMedia, vnode.attrs),
        m(vwDubberNoteEdit, vnode.attrs)
      ]);
    },
  },
  '/titles': {
    onmatch: function(params, route) {
      return actions.onNavigateTo("titles", params, route)
    },
    render: function() {
      return m(vwSearchLayout, [
        m(vwTitleSearch),
        m(vwTitleList)
      ]);
    },
  },
  '/title/:id': {
    onmatch: function(params, route) {
      model.loading = true;
      m.redraw();
      return actions.onNavigateTo("title", params, route)
    },
    render: function(vnode) {
      return m(vwSearchLayout, vnode.attrs, [
        m(vwTitleView, vnode.attrs),
        m(vwTitleDetail, vnode.attrs)
      ]);
    },
  },
  '/titlenotes/:id/:attore': {
    onmatch: function(params, route) {
      model.loading = true;
      m.redraw();
      return actions.onNavigateTo("titlenotes", params, route)
    },
    render: function(vnode) {
      return m(vwSearchLayout, vnode.attrs, [
        m(vwTitlenoteView, vnode.attrs),
        m(vwTitlenoteDetail, vnode.attrs)
      ]);
    },
  },
  '/casts/:id/:attore': {
    onmatch: function(params, route) {
      model.loading = true;
      m.redraw();
      return actions.onNavigateTo("casts", params, route)
    },
    render: function(vnode) {
      return m(vwSearchLayout, vnode.attrs, [
        m(vwCastView, vnode.attrs),
        m(vwCastDetail, vnode.attrs)
      ]);
    },
  },
});
