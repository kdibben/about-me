const catFactURL = 'https://cors-anywhere.herokuapp.com/https://catfact.ninja/fact'

// fetch information
const getFact = async () => {
  try {
    const response = await fetch(catFactURL)
    const obj = await response.json()
    console.log(`Fetched: ${obj}`)
    const fact = obj.fact
    return fact
  } catch (error) { 
      console.error(error) 
    }
}

// interact with DOM
const updateWithFact = async (event) => {
  try {
    document.getElementById('catFact').innerHTML = ''
    const result = await getFact()
    document.getElementById('catFact').innerHTML = result
  } catch (error) { 
      console.error(error) 
    }
}

document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getCatFact') { 
        updateWithFact(event) 
    }
  
      const startCount = parseInt(localStorage.getItem('numberOfFetches')) || 0
      const count = startCount + 1
      const countResult = `You have fetched ${count} cat facts.`
      document.getElementById('count').innerHTML = countResult

      localStorage.setItem('numberOfFetches', count)
  })

  document.getElementById('removeCount').addEventListener('click', () => {
      localStorage.removeItem('numberOfFetches')
      updateWithFact(event)
  })