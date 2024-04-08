const scriptURL = '<https://script.google.com/macros/s/AKfycbyFfNTnTQG0FauhlWzmBW5NJB0uRnioQSixru7YElv7oe__XxTJ2a05h1qLkKvrbOqM/exec>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })