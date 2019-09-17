# Data Manipulation and API's

# fetch()
The fetch API provides an interface for gathering resources. It takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response request, successful or not.


1. Call fetch('/some/path')
2. Response comes in (in the form of a Promise).
  Can be text, blob, JSON etc.
3. Complete & grab data in the 'body' of the response. There is a lot of metadata that comes with the fetch API.
