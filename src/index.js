new Vue({
  el: "#editor",
  data: {
    input: "# 환영해요!!!",
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
    }, 300),
  },
});
