    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "message sent successfully!";
        status.classList.add('success');
        setTimeout(() => {status.classList.remove('success');
        form.reset()}, 4000);
      }).catch(error => {
        status.innerHTML = "there was a problem sending your message..."
        status.classList.add('error');
      });
    }
    form.addEventListener("submit", handleSubmit)