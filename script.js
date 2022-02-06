class Validator  {
constructor (element) {
  this.formElement = element
  this.buttonElement = document.querySelector('.comment')
  
  this.#listenHandlers()
}

  #listenHandlers () {
    this.formElement.addEventListener('submit', this.#handleFormSubmit.bind(this))
    this.buttonElement.addEventListener('click', this.handleClickButton.bind(this))
  }
  handleClickButton () {
    if (this.buttonElement) {
      const error = new Error('test.email@.ru')
      console.error(error)

      return
    }
    }

  #handleFormSubmit (event) {
    if (!this.formElement.checkValidity()) {
     event.preventDefault()
    }
    this.formElement.classList.add('needs-validation')
  }
}

new Validator(form)