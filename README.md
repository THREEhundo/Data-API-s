# Data Manipulation and API's

# fetch()
The fetch API provides an interface for gathering resources. It takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response request, successful or not.


1. Call fetch('/some/path')
2. Response comes in (in the form of a Promise).
  Can be text, blob, JSON etc.
3. Complete & grab data in the 'body' of the response. There is a lot of metadata that comes with the fetch API.

# Tabular Data
Using data from https://data.giss.nasa.gov/gistemp/
Fetching data and manipulating it allows for us to pull from the data, what we want, in whatever context we want.
1. fetch
2. Body.text(): takes a response and reads it to completion.
3. ~


# Reduce()
An array method executes a reducer function on every element of the array, resulting in a single output.

Take a text file with data that needs to be represented in a cleaner way for readability

# fetching live JSON data on the whereabouts of the International Space Station
1. fetch ISS data.
2. Turn into JSON.
3. Plot JSON data onto Leaflet.js map.
4. Have the API update very second to show real time position & speed data of the ISS.
