//Function for integrating form with Web3 Forms

export const formSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  setFormStatus: React.Dispatch<React.SetStateAction<string>>,
) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  setFormStatus("Sending message. Please wait.");

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      if (response.ok) {
        setFormStatus("Message sent successfully!");
      } else {
        setFormStatus("Something went wrong! Please try again later.");
      }
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        setFormStatus("");
      }, 6000);
    });
};
