let bacofValidator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;
    }
};

let form = document.querySelector('.bacofValidator');

form.addEventListener('submit', bacofValidator.handleSubmit)