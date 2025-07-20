const feedback = document.getElementById("response");

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

  if (!phone.match(/^\d{10,15}$/)) {
    alert("Please enter a valid phone number with country code.");
    return;
  }

  try {
    const response = await fetch("https://alpha-apiblbbt.onrender.com/api/send-welcome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phone })
    });

    const result = await response.json();
    if (response.ok && result.success) {
      feedback.textContent = "WhatsApp message sent successfully!";
    } else {
      feedback.textContent = "Failed to send WhatsApp message.";
      console.error(result);
    }
  } catch (error) {
    feedback.textContent = "An error occurred while sending the message.";
    console.error("Error:", error);
  }
}


// === Submit button effects ===
const submitbtn = document.querySelector("#sendCrypto");
const popup = document.querySelector(".coming-soon");

submitbtn.addEventListener("click", () => {

  submitbtn.textContent = "Welcome Newbie!";
  feedback.textContent = "Initiating Sign Up..."
  popup.style.display = "block";
  setTimeout( () => {
      popup.style.display = "none";
      submitbtn.textContent = "Connect To WhatsApp";
  }, 4000)
});