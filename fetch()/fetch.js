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
fetch('cali.jpg')
 .then(response => {
   console.log(response)
   return response.blob()
 })
 // .then(pic => console.log(pic))
 .then((cali) => {
   console.log(cali)
   document.getElementById('cali').src = URL.createObjectURL(cali)
 })

/*
 * ASYNC & AWAIT
 */
 caliPic()
  .then(response => console.log(`Done!`))
  .catch(error => {
    console.log(`error`)
    console.error(error)
  })

 async function caliPic() {
   const response = await fetch('cali.jpg')
   const blob = await response.blob()
   document.getElementById('cali').src = URL.createObjectURL(blob)
 }

txt()

async function txt() {
  const response = await fetch('placeholder.txt')
  const textHolder = await response.text()
  const newP = document.createElement('p')
  newP.innerText = textHolder
  document.body.appendChild(newP)
    console.log(newP)
}
