//getData()

async function getData() {
  const response = await fetch('../ZonAnn.Ts+dSST.csv')
  const data = await response.text()

  const table = data.split('\n').slice(1)
  // splits data every time a new line is created.
  //slice is used to edit out the heading, which doesn't need to be parsed.
  table.forEach(row => {
    const columns = row.split(',')
    // split array data even further by commas
    const year = columns[0]
    const temp = columns[1]
    console.log(year, temp)
  })
}

globalMeans()
//GLB.Ts+dSST.csv
async function globalMeans() {
  const response = await fetch('../GLB.Ts+dSST.csv')
  const bodyData = await response.text()
  const tableForm = bodyData.split('\n').slice(1)

  tableForm.forEach(row => {
    const columns = row.split(',')
    const year = columns[0]
    const tempDiff = columns[1]
    console.log(year, tempDiff)
  })
}
