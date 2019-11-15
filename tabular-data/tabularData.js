globalTempChangeFromMean()
async function globalTempChangeFromMean() {
  const response = await fetch('GLB.Ts+dSST.csv')
  const globalTempData = await response.text()
  let globalTempDataClean = globalTempData.trim()
  // const trim = data.trim()
  // console.log(trim)
  // trim didn't work with firefox so I used splice instead of slice.

  const table = globalTempDataClean.split('\n').splice(1)
  table.forEach(row => {
    const columns = row.split(',')
    const year = columns[0]
    const temp = columns[13]
    console.log(year, temp)
    // if (row === "") {
      //   table.trim()
      // }
      // instead of trimming each array element, trim whole text
  })
  // split => array of strings
  // .slice(1) was used but an empty array element populated on my screen at data[3].
  // .splice(1,2) allowed me to edit the array directly at index 1 for 2 elements.
}
