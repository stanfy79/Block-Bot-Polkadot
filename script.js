const feedback = document.getElementById("response");
const submitbtn = document.querySelector("#sendCrypto");

// === Scroll observer animation ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("scroll-animate");
        }
    });
});
const animateContent = document.querySelectorAll(".show-animaton");
animateContent.forEach((el) => observer.observe(el));



// === WhatsApp send ===
async function sendWhatsAppNumber() {
  
  const phoneInput = document.getElementById("phone");
  const phone = phoneInput.value.trim();

  // if (!phone.match(/^\d{10,15}$/)) {
  //   feedback.text("Please enter a valid phone number with country code.");
  //   return;
  // }

  try {
    const response = await fetch("https://alpha-apiblbbt.onrender.com/api/send-welcome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phone })
    });
    console.log(phone);

    const result = await response.json();
    if (response.ok && result.success) {
      feedback.textContent = "WhatsApp message sent successfully!";
      feedback.style.color = "green";
      submitbtn.textContent = "Welcome Newbie!";
    } else {
      feedback.textContent = "Failed to send WhatsApp message.";
      feedback.style.color = "red";
      submitbtn.textContent = "Connect To WhatsApp";
      console.error(result);
    }
  } catch (error) {
    feedback.textContent = "An error occurred while sending the message.";
    feedback.style.color = "red";
    submitbtn.textContent = "Connect To WhatsApp";
    console.error("Error:", error);
  }
}


// === Submit button effects ===

submitbtn.addEventListener("click", () => {
  feedback.style.color = "#acacac";
  feedback.textContent = "Initiating Sign Up...";
  submitbtn.textContent = "Connecting To WhatsApp...";
});