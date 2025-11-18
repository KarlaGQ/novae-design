<template>
  <div class="contact-wrapper">
    <div class="contact-card">
      <h2 class="title">
        <MailIcon class="icon" /> Contact Me
      </h2>

      <form @submit.prevent="submitForm">
        
        <label>
          <UserIcon class="label-icon" /> Name
        </label>
        <input v-model="form.name" type="text" required />

        <label>
          <MailIcon class="label-icon" /> Email
        </label>
        <input v-model="form.email" type="email" required />

        <label>
          <MessageSquare class="label-icon" /> Message
        </label>
        <textarea v-model="form.message" rows="5" required></textarea>

        <button type="submit" class="submit-btn">
          <SendHorizontal class="icon" /> Send Message
        </button>
      </form>
    </div>

    <!-- Popup modal -->
    <div v-if="showPopup" class="popup-overlay" @click="showPopup = false">
      <div class="popup-content">
        <CheckCircle class="popup-icon" />
        <h3>Message Sent!</h3>
        <p>Thanks for contacting me. I'll get back to you soon.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  MailIcon,
  UserIcon,
  MessageSquare,
  SendHorizontal,
  CheckCircle
} from "lucide-vue-next";

import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: ""
});

const showPopup = ref(false);

function submitForm() {
  // You can replace this with API request logic
  console.log("Form Data:", form.value);

  // Show popup
  showPopup.value = true;

  // Reset form
  form.value = { name: "", email: "", message: "" };
}
</script>

<style scoped>
.contact-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px;
  background: #f5f6fa;
  min-height: 100vh;
}

.contact-card {
  background: white;
  padding: 30px;
  border-radius: 14px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  margin-bottom: 20px;
}

.icon {
  width: 22px;
  height: 22px;
}

.label-icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
  vertical-align: middle;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 6px;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  margin-bottom: 20px;
  font-size: 15px;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  display: flex;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.submit-btn:hover {
  background: #005fcc;
}

/* Popup */

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: white;
  padding: 30px 40px;
  border-radius: 14px;
  text-align: center;
  animation: pop 0.3s ease;
  max-width: 320px;
}

.popup-icon {
  width: 50px;
  height: 50px;
  color: #0000;
  margin-bottom: 10px;
}

@keyframes pop {
  0% { transform: scale(0.7); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
