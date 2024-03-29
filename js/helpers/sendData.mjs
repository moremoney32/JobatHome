/**
 * Fonction qui envoie des donnees au serveur
 * @param {string} url
 * @param {formData} data
 * @return {Promise}
 */

export function sendData(url, data) {
  return new Promise((resolve) => {
    // const myHeaders = new Headers();

    const dataToSend = {
      method: "POST",
      // headers: myHeaders,
      // mode: 'cors',
      // cache: 'default',
      body: data,
    };

    // const c = await fetch(url, dataToSend);
    // const y = await c.json();
    // return y;
    fetch(url, dataToSend)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        resolve(error);
      });
  });
}
