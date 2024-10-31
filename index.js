function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visable";
  emailjs
    .sendForm(
      "service_17tdtkb",
      "template_imcfavp",
      event.target,
      "k9XMqnY1N3Y2DCILB"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visable");
      success.classList += " modal__overlay--visable";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visable");
      alert(
        "The email service is temporarily unavailble. Please contact me directly on courtademark@gmail.com"
      );
    });
}

let isModalOpen = false;
function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal__open')
    }
    isModalOpen = true;
    document.body.classList += ' modal__open';
}