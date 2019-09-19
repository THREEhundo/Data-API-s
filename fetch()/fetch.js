/*  Asynchronous function -> fetch takes time for a response to come back.
 *  1. call fetch(path) -> a response comes back!
 *  2. we get a response as part of a promise.
 *    i. that response needs to be read and stored.
 *    ii. kinds of data to be stored -> text, blob, and json.
 *  3. Complete the data stream. Grab the data from the 'body' of the response.
 */

//fetch() API
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
   let response = await fetch('cali.jpg')
   let blob = await response.blob()
   document.getElementById('cali').src = URL.createObjectURL(blob)
 }
