import m from 'mithril';

export default createActions

var settings = undefined;
var model = undefined;
var dataApi = undefined


function createActions(sets, mdl, api) {
  settings = sets;
  model = mdl;
  dataApi = api;

  return {
    onNavigateTo: onNavigateTo,

    submitLogin: submitLogin,

    dubbers: dubbers,
    submitSearchDubber: submitSearchDubber,
    clearSearchDubber: clearSearchDubber,

    dubber: dubber,
    submitUpdateDubber: submitUpdateDubber,
    submitUpdateDubberNote: submitUpdateDubberNote,
    uploadDubberImage: uploadDubberImage,
    uploadDubberAudio: uploadDubberAudio,

    titles: titles,
    submitSearchTitle: submitSearchTitle,
    clearSearchTitle: clearSearchTitle,

    title: title,
    editTitlenote: editTitlenote,
    changeTitlenoteDubber: changeTitlenoteDubber,
    submitUpdateTitlenote: submitUpdateTitlenote,
    submitDeleteTitlenote: submitDeleteTitlenote,
    uploadTitlenoteImage: uploadTitlenoteImage,

    toggleMainMenu: toggleMainMenu,

  }

  function onNavigateTo(routeName, params, route) {
    console.log("onNavigateTo: " + route);
    console.log("last route: " + m.route.get());

    if (m.route.get() && (m.route.get().indexOf("/dubberedit/") >=0 || m.route.get().indexOf("/dubbernoteedit/") >=0)) {
      model.backHistoryLevel = model.backHistoryLevel-2;
    } else if (route == m.route.get()) {
      model.backHistoryLevel--;
    } else {
      model.backHistoryLevel = -1;
    }

    if (!model.login.token) {
      model.loading = false;
      model.mainMenuToggle = false;
      console.log("in onNavigateTo: redirect to login");
      m.route.set("/login");
      return;
    }

    if (routeName == "logout") {
      model.loading = false;
      model.mainMenuToggle = false;

      model.login.token = undefined;
      model.user.password = undefined;
      model.dubbers = [];
      model.dubber = {
        nome: "",
        cognome: "",
        foto: "",
        casts: []
      };
      model.dubberedit = {};
      model.dubbernoteedit = {};

      model.titles = [];
      model.title = {
        titolo: "",
        poster: "",
        casts: []
      };
      model.titlenoteedit = {};

      model.casts = [];
      model.attore = {
        attore: "",
        descrizione: "",
        foto: ""
      };

      settings.graphql_options.headers = {};
      console.log("in onNavigateTo: user logged out");
    } else if (routeName == "dubbers") {
      model.mainMenuToggle = false;
    } else if (routeName == "titles") {
      model.mainMenuToggle = false;
    } else if (routeName == "dubber") {
      model.mainMenuToggle = false;
      return dubber(params.id)
    } else if (routeName == "dubberedit") {
      model.mainMenuToggle = false;
      return dubberedit(params.id)
    } else if (routeName == "dubbernoteedit") {
      model.mainMenuToggle = false;
      return dubbernoteedit(params.id)
    } else if (routeName == "title") {
      model.mainMenuToggle = false;
      model.titlenoteedit = {};
      return title(params.id)
    } else if (routeName == "titlenotes") {
      model.mainMenuToggle = false;
      return titlenotes(params.id, params.attore)
    } else if (routeName == "casts") {
      model.mainMenuToggle = false;
      return casts(params.id, params.attore)
    }
  }

  function login(email, password) {
    settings.graphql_options.headers = {};
    return dataApi.login(email, password)
      .then(function(res) {
        if (!res.errors) {
          model.login = res.data.login;
          console.log(res.data);
        }
      })
      .catch(function(err) {
        console.error(err)
      })
  }

  function submitLogin(e) {
    if (e) {
      e.preventDefault();
    }
    return login(model.user.email, model.user.password)
      .then(function(res) {
        settings.graphql_options.headers = {
          "Authorization": "Bearer " + model.login.token
        };
        m.route.set("/dubbers");
      })
      .catch(function(err) {
        console.error(err)
      })
  }

  function dubbers(deno, sesso, anno, user, tags) {
    return dataApi.dubbers(deno, sesso, anno, user, tags)
      .then(function(res) {
        if (!res.errors) {
          model.dubbers = res.data.dubbers;
        }
        model.loading = false;
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function dubber(id) {
    return dataApi.dubber(id)
      .then(function(res) {
        if (!res.errors) {
          model.dubber = res.data.dubber;
        }
        model.loading = false;
      })
      .catch(function(err) {
        console.error(err)
        model.loading = false;
      })
  }

  function dubberedit(id) {
    return dataApi.dubber(id)
      .then(function(res) {
        if (!res.errors) {
          model.dubberedit = res.data.dubber;
          console.log(model.dubberedit);
        }
        model.loading = false;
      })
      .catch(function(err) {
        console.error(err)
        model.loading = false;
      })
  }

  function dubbernoteedit(id) {
    return dataApi.dubber(id)
      .then(function(res) {
        if (!res.errors) {
          model.dubberedit = res.data.dubber;
          model.dubbernoteedit = res.data.dubber.dubbernotes && res.data.dubber.dubbernotes[0] ? res.data.dubber.dubbernotes[0] : {}
          console.log(model.dubbernoteedit);
        }
        model.loading = false;
      })
      .catch(function(err) {
        console.error(err)
        model.loading = false;
      })
  }

  function titles(titolo, attore, doppiatore, tipo, user) {
    return dataApi.titles(titolo, attore, doppiatore, tipo, user)
      .then(function(res) {
        if (!res.errors) {
          model.titles = res.data.titles.sort(function(a, b) {
            return b.anno - a.anno
          });
        }
        model.loading = false;
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function title(id) {
    return dataApi.title(id)
      .then(function(res) {
        if (!res.errors) {
          model.title = res.data.title;
        }
        model.loading = false;
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function casts(id, attore) {
    return dataApi.casts(attore)
      .then(function(res) {
        if (!res.errors) {
          model.casts = res.data.casts.sort(function(a, b) {
            return b.title.anno - a.title.anno
          });
        }
        return dataApi.cast(id)
          .then(
            function(res) {
              if (!res.errors) {
                model.cast = res.data.cast;
              }
              model.loading = false;
            }
          )
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function titlenotes(id, attore) {
    return dataApi.casts(attore)
      .then(function(res) {
        if (!res.errors) {
          model.casts = res.data.casts.sort(function(a, b) {
            return b.title.anno - a.title.anno
          });
        }
        return dataApi.titlenote(id)
          .then(
            function(res) {
              if (!res.errors) {
                model.titlenote = res.data.titlenote;
              }
              model.loading = false;
            }
          )
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function submitSearchDubber(e) {
    if (e) {
      e.preventDefault();
    }
    model.loading = true;
    m.redraw();
    console.log(model.searchDubber);
    return dubbers(model.searchDubber.deno, model.searchDubber.sesso, model.searchDubber.anno, model.searchDubber.user, model.searchDubber.tags);
  }

  function clearSearchDubber(e) {
    if (e) {
      e.preventDefault();
    }
    model.setSearchDubberDeno('');
    model.setSearchDubberSesso('');
    model.setSearchDubberAnno('0');
    model.setSearchDubberUser(0);
    model.searchDubber.tags = {};
  }

  function submitSearchTitle(e) {
    if (e) {
      e.preventDefault();
    }
    model.loading = true;
    m.redraw();
    console.log(model.searchTitle);
    return titles(model.searchTitle.titolo, model.searchTitle.attore, model.searchTitle.doppiatore, model.searchTitle.tipo, model.searchTitle.user);
  }

  function clearSearchTitle(e) {
    if (e) {
      e.preventDefault();
    }
    model.setSearchTitleActor('');
    model.setSearchTitleTitle('');
    model.setSearchTitleDubber('');
    model.setSearchTitleTipo('');
    model.setSearchTitleUser(0);
  }

  function submitUpdateDubber(e) {
    if (e) {
      e.preventDefault();
    }
    model.loading = true;
    m.redraw();
    return dataApi.updateDubber(model.dubberedit)
      .then(function(res) {
        if (!res.errors) {
          console.log(res);
        }
        model.loading = false;
        m.route.set("/dubber/" + model.dubberedit.id);
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function submitUpdateDubberNote(e) {
    if (e) {
      e.preventDefault();
    }
    model.loading = true;
    m.redraw();
    return dataApi.updateDubberNote(model.dubberedit.id, model.dubbernoteedit, model.login.id)
      .then(function(res) {
        if (!res.errors) {
          console.log(res);
        }
        model.loading = false;
        m.route.set("/dubber/" + model.dubberedit.id);
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function uploadDubberImage(e) {
    if (e) {
      e.preventDefault();
    } else {
      return;
    }
    var file = e.target.files[0]

    var data = new FormData()
    data.append("mediafile", file)

    model.loading = true;
    m.redraw();

    return dataApi.uploadDubberImage(data)
      .then(function(res) {
        if (!res.error) {
          console.log(res);
        }
        model.loading = false;
        model.dubberedit.foto = res.destination;
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function uploadDubberAudio(e) {
    if (e) {
      e.preventDefault();
    } else {
      return;
    }
    var file = e.target.files[0]

    var data = new FormData()
    data.append("mediafile", file)

    model.loading = true;
    m.redraw();

    return dataApi.uploadDubberAudio(data)
      .then(function(res) {
        if (!res.error) {
          console.log(res);
        }
        model.loading = false;
        model.dubberedit.audio = res.destination;
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function editTitlenote(titlenote) {
    console.log("Edit Titlenote: " + titlenote);
    model.titlenoteedit.id = titlenote.id;
    model.titlenoteedit.stagione = titlenote.stagione;
    model.titlenoteedit.episodio = titlenote.episodio;
    model.titlenoteedit.personaggio = titlenote.personaggio;
    model.titlenoteedit.fotop = titlenote.fotop;
    model.titlenoteedit.attore = titlenote.attore;
    model.titlenoteedit.doppiatore = titlenote.doppiatore;
  }

  function changeTitlenoteDubber(doppiatore) {
    model.loading = true;
    m.redraw();
    return dataApi.findDubber(doppiatore)
      .then(function(res) {
        if (!res.errors) {
          console.log(res);
        }
        model.loading = false;
        model.titlenoteedit.id_dubber = res.data.dubbers[0].id
        model.titlenoteedit.doppiatore = res.data.dubbers[0].nome + ' ' + res.data.dubbers[0].cognome;
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
        model.titlenoteedit.id_dubber = null;
      })
  }

  function submitUpdateTitlenote(e) {
    if (e) {
      e.preventDefault();
    }
    model.loading = true;
    m.redraw();
    return dataApi.updateTitlenote(model.title.id, model.titlenoteedit, model.login.id)
      .then(function(res) {
        if (!res.errors) {
          console.log(res);
        }
        model.loading = false;
        m.route.set("/title/" + model.title.id);
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
        model.titlenoteedit = {};
      })
  }

  function submitDeleteTitlenote(id) {
    model.loading = true;
    m.redraw();
    return dataApi.deleteTitlenote(id)
      .then(function(res) {
        if (!res.errors) {
          console.log(res);
        }
        model.loading = false;
        m.route.set("/title/" + model.title.id);
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }

  function uploadTitlenoteImage(e) {
    if (e) {
      e.preventDefault();
    } else {
      return;
    }
    var file = e.target.files[0]

    var data = new FormData()
    data.append("mediafile", file)

    model.loading = true;
    m.redraw();

    return dataApi.uploadTitlenoteImage(data)
      .then(function(res) {
        if (!res.error) {
          console.log(res);
        }
        model.loading = false;
        model.titlenoteedit.fotop = res.destination;
      })
      .catch(function(err) {
        console.error(err);
        model.loading = false;
      })
  }


  function toggleMainMenu() {
    model.mainMenuToggle = !model.mainMenuToggle;
  }


}
