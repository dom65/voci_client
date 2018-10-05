export default createModel

var settings = undefined;
var searchDubber = {deno: undefined, sesso: undefined, anno: undefined, user: undefined, tags: {}};
var searchTitle = {titolo: undefined, attore: undefined, doppiatore: undefined, tipo: undefined, user: undefined};
var user = {email: undefined, password: undefined};

function createModel(s) {
  settings = s;

  return {

    mediaOptions: {url: '/'},

    loading: false,
    mainMenuToggle: false,


    login: {email: "", token: undefined},
    user: user,

    setLogin: setLogin,
    setEmail: setEmail,
    setPassword: setPassword,

    dubbers: [],
    dubber: {nome: "", cognome: "", sesso: "", foto: "", casts: []},
    dubberedit: {},
    dubbernoteedit: {},
    progressUploadDubberImage: 0,

    titles: [],
    title: {titolo: "", poster: "", casts: []},
    titlenote: {attore: "", personaggio: "", foto: undefined},
    titlenoteedit: {},

    casts: [],
    cast: {attore: "", personaggio: "", foto: undefined},

    setSearchDubberDeno: setSearchDubberDeno,
    setSearchDubberSesso: setSearchDubberSesso,
    setSearchDubberAnno: setSearchDubberAnno,
    setSearchDubberUser: setSearchDubberUser,

    setSearchTitleTitle: setSearchTitleTitle,
    setSearchTitleActor: setSearchTitleActor,
    setSearchTitleDubber: setSearchTitleDubber,
    setSearchTitleTipo: setSearchTitleTipo,
    setSearchTitleUser: setSearchTitleUser,


    searchDubber: searchDubber,
    searchTitle: searchTitle,

  }

  function setLogin(_login) {
    login = _login;
  }

  function setEmail(_email) {
    user.email = _email;
  }

  function setPassword(_password) {
    user.password = _password;
  }

  function setSearchDubberDeno(_deno) {
    searchDubber.deno = _deno;
  }

  function setSearchDubberSesso(_sesso) {
    searchDubber.sesso = _sesso;
  }

  function setSearchDubberAnno(_anno) {
    searchDubber.anno = _anno;
  }

  function setSearchDubberUser(_user) {
    searchDubber.user = _user;
  }

  function setSearchTitleTitle(_titolo) {
    searchTitle.titolo = _titolo;
  }

  function setSearchTitleActor(_attore) {
    searchTitle.attore = _attore;
  }

  function setSearchTitleDubber(_doppiatore) {
    searchTitle.doppiatore = _doppiatore;
  }

  function setSearchTitleTipo(_tipo) {
    searchTitle.tipo = _tipo;
  }

  function setSearchTitleUser(_user) {
    searchTitle.user = _user;
  }

}
