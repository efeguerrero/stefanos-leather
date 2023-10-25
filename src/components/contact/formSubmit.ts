//Function for integrating form with Web3 Forms

export const formSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  setFormStatus: React.Dispatch<React.SetStateAction<string>>,
) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  setFormStatus("Sending message. Please wait.");

  const res = await fetch("/api/formCall", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    },
    body: json,
  });

  const apiRes = await res.json();
  setFormStatus(apiRes.message);
  console.log("Form API Response: ", apiRes.message);

  form.reset();
  setTimeout(() => {
    setFormStatus("");
  }, 5000);
};
