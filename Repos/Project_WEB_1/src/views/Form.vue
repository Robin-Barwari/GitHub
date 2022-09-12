<template>
    <header>
        <img alt="Vue logo" src="../assets/logo.png" />

        <form :action="FORM_ENDPOINT" @submit="handleSubmit" method="POST" target="_blank">
            <div>
                <input type="text" placeholder="Your name" name="name" required />
            </div>

            <div>
                <input type="email" placeholder="Email" name="email" required />
            </div>

            <div>
                <textarea placeholder="Your message" name="message" required />
            </div>

            <div>
                <button type="submit">Send a message</button>
            </div>
        </form>

        <div v-if="submitted">
            <h2>Thanks you!</h2>
            <div>We'll be in touch soon.</div>
        </div>
    </header>
</template>
  
  <script>
  export default {
      name: "App",
      data: () => ({
          submitted: false,
          FORM_ENDPOINT: endpointUrl,
      }),
  
      methods: {
          handleSubmit() {
              setTimeout(() => {
                  this.submitted = true;
              }, 100);
          },
      },
  };
  </script>