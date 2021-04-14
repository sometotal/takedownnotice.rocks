module.exports = {
  name: "Take Down Notice",
  shortDesc:
    "A show about music.",
  url: "",
  authorEmail: "hello@takedownnotice.rocks",
  // authorHandle: "@TakeDownNotice",
  authorName: "Ike and Joe",
  episodesPerPage: 8,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "white",
      text: "black",
      highlight: "#666",
    },
    secondary: {
      background: "black",
      text: "white",
      highlight: "#666",
    },
  },

  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
