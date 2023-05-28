const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "abc@mail.com",
        },
      ],
    };
  },
});

// Component: friend-contact. It takes 2 arguments. The name of the tag and the object. the object will have the default app data section and others including a mandatory template section that contains the HTML segment. The name of the custom tag name should be more than 1 worded and should have a dash (-) in between so that it won't conflict with the default HTML attributes
app.component("friend-contact", {
  template: `
          <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong>{{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
          </li>`,
  data() {
    return {
      // here we have to use a single object that contains all the data that we want to use in the template. This is because the component is isolated from the app and it can't access the app data directly. So we have to pass the data to the component as an object. And this object is a part of the main app data object.
      detailsAreVisible: false,
      //   it's friend not friends of the main data
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "abc@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

// components are used before mounting the app
app.mount("#app");
