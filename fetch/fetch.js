/*  Asynchronous function -> fetch takes time for a response to come back.
 *  1. call fetch(path) -> a response comes back!
 *  2. we get a response as part of a promise.
 *    i. that response needs to be read and stored.
 *    ii. kinds of data to be stored -> text, blob, and json.
 *  3. Complete the data stream. Grab the data from the 'body' of the response.
 */

 /*     Fetch API
  * Provides a generic definition Request and Response objects.
  * Can be used for service workers, Cache API
  */

/*****WindowOrWorkerGlobalScope.fetch()****
 * fetch() method -> fetches a resouce from the network, returning a promise.
 * A fetch() promise only rejects when a network error is encountered.(permissions issue)
 * Doesn't reject on HTTP errors. then handler checks Response.ok(boolean) & Response.status(200)
 */
// fetch('cali.jpg')
//   .then(response => response.blob())
//   .then(cali => {
//     document.getElementById('cali').src = URL.createObjectURL(cali)
//     document.getElementById('cali').width = '300'
//   })
placeTxt()

async function placeTxt() {
  let txt = await fetch('cali.txt')
  let sheet = await txt.text()
  let header = document.createElement('h1')
  header.innerText = sheet
  document.body.appendChild(header)
}

caliDream()

async function caliDream() {
  let dream = await fetch('cali.jpg')
  let extract = await dream.blob()
  let img = document.getElementById('cali').src = URL.createObjectURL(extract)
  console.log(img)
  document.getElementById('cali').width = '470'
}

rearrange()
function rearrange() {
  const body = document.body
  const h1 = body.childNodes[5]
  h1.body.insertBefore(childNodes[4], childNodes[1])
}
// childNode[4].parentNode.insertBefore(childNode[4], childNode[1]);
