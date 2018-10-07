import GraphClient from "mithril-graphql";
import m from "mithril";

export default createDataApi

var settings = undefined
var client = undefined;

function createDataApi(s) {
  settings = s;
  client = new GraphClient(settings.graphql_options);

  return {
    login: login,
    dubbers: dubbers,
    dubber: dubber,
    findDubber: findDubber,
    updateDubber: updateDubber,
    updateDubberNote: updateDubberNote,
    uploadDubberImage: uploadDubberImage,
    uploadDubberAudio: uploadDubberAudio,

    titles: titles,
    title: title,

    titlenote: titlenote,
    updateTitlenote: updateTitlenote,
    deleteTitlenote: deleteTitlenote,
    uploadTitlenoteImage: uploadTitlenoteImage,

    casts: casts,
    cast: cast,
  }

  function login(email, password) {
    console.log("DataApi: login " + email + " " + password);
    return client.post(settings.graphql_mutations.login, {
      "email": email,
      "password": password
    });
  }

  function dubbers(deno, sesso, anno, user, tags) {
    return client.post(settings.graphql_queries.dubbers, {
      "deno": deno,
      "sesso": sesso,
      "anno": anno,
      "user": user,
      "tags": tags,
    });
  }

  function dubber(id) {
    return client.post(settings.graphql_queries.dubber, {
      "id": id,
    });
  }

  function findDubber(deno) {
    return client.post(settings.graphql_queries.dubbers, {
      "deno": deno,
    });
  }

  function updateDubber(dubber) {
    console.log("DataApi: updateDubber " + dubber.id);
    return client.post(settings.graphql_mutations.updateDubber, {
      "id": dubber.id,
      "nome": dubber.nome,
      "cognome": dubber.cognome,
      "sesso": dubber.sesso,
      "telefono": dubber.telefono,
      "anno": dubber.anno,
      "luogo": dubber.luogo,
      "note": dubber.note,
      "email": dubber.email,
      "madrelingua": dubber.madrelingua,
      "accentistranieri": dubber.accentistranieri,
      "accentiregionali": dubber.accentiregionali,
      "foto": dubber.foto,
      "audio": dubber.audio,
    });
  }

  function updateDubberNote(id_dubber, dubbernote, id_user) {
    console.log("DataApi: updateDubberNote " + id_dubber);

    if (dubbernote.id) {
      return client.post(settings.graphql_mutations.updateDubbernote, {
        "id": dubbernote.id,
        "voce": dubbernote.voce,
        "ruolo": dubbernote.ruolo,
        "etavoce": dubbernote.etavoce,
        "cartoni": dubbernote.cartoni,
        "canta": dubbernote.canta,
        "piuvoci": dubbernote.piuvoci,
        "teatro": dubbernote.teatro,
        "sync": dubbernote.sync,
        "giudizio": dubbernote.giudizio,
        "note": dubbernote.note,
        "id_dubber": id_dubber,
        "id_user": id_user,
      });
    } else {
      return client.post(settings.graphql_mutations.createDubbernote, {
        "voce": dubbernote.voce,
        "ruolo": dubbernote.ruolo,
        "etavoce": dubbernote.etavoce,
        "cartoni": dubbernote.cartoni,
        "canta": dubbernote.canta,
        "piuvoci": dubbernote.piuvoci,
        "teatro": dubbernote.teatro,
        "sync": dubbernote.sync,
        "giudizio": dubbernote.giudizio,
        "note": dubbernote.note,
        "id_dubber": id_dubber,
        "id_user": id_user,
      });
    }
  }

  function uploadDubberImage(data) {
    return m.request({
      method: "POST",
      url: "mediaupload",
      data: data,
    })
  }

  function uploadDubberAudio(data) {
    return m.request({
      method: "POST",
      url: "mediaupload",
      data: data,
    })
  }

  function titles(titolo, attore, doppiatore, tipo, user) {
    return client.post(settings.graphql_queries.titles, {
      "titolo": titolo ? titolo : undefined,
      "attore": attore ? attore : undefined,
      "doppiatore": doppiatore ? doppiatore : undefined,
      "tipo": tipo ? tipo : undefined,
      "user": user,
    });
  }

  function title(id) {
    return client.post(settings.graphql_queries.title, {
      "id": id,
    });
  }

  function titlenote(id) {
    return client.post(settings.graphql_queries.titlenote, {
      "id": id,
    });
  }

  function updateTitlenote(id_title, titlenote, id_user) {
    console.log("DataApi: updateTitlenote " + titlenote);

    if (titlenote.id && titlenote.id != '0') {
      return client.post(settings.graphql_mutations.updateTitlenote, {
        "id": titlenote.id,
        "stagione": titlenote.stagione,
        "episodio": titlenote.episodio,
        "personaggio": titlenote.personaggio,
        "fotop": titlenote.fotop,
        "attore": titlenote.attore,
        "doppiatore": titlenote.doppiatore,
        "id_dubber": titlenote.id_dubber,
        "id_title": id_title,
        "id_user": id_user,
      });
    } else {
      return client.post(settings.graphql_mutations.createTitlenote, {
        "stagione": titlenote.stagione,
        "episodio": titlenote.episodio,
        "personaggio": titlenote.personaggio,
        "fotop": titlenote.fotop,
        "attore": titlenote.attore,
        "doppiatore": titlenote.doppiatore,
        "id_dubber": titlenote.id_dubber,
        "id_title": id_title,
        "id_user": id_user,
      });
    }
  }

  function deleteTitlenote(id) {
    return client.post(settings.graphql_mutations.deleteTitlenote, {
      "id": id,
    });
  }

  function uploadTitlenoteImage(data) {
    return m.request({
      method: "POST",
      url: "mediaupload",
      data: data,
    })
  }

  function casts(attore) {
    return client.post(settings.graphql_queries.casts, {
      "attore": attore,
    });
  }

  function cast(id) {
    return client.post(settings.graphql_queries.cast, {
      "id": id,
    });
  }
}
