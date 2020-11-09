new Vue({
  el: "#editor", // id가 editor인 태그에서 html tag를 만든다.
  data: {
    input: "# 환영해요!!!", // data input 항목에 문자열을 입력한다.
  },
  computed: {
    // compiledMarkdown v-html 항목에서 함수를 실행한다.
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true }); // marked.js의  marked 함수를 사용한다. 입력한 마크다운에 따라서 글자 디자인이 달라지게 한다.
    },
  },
  methods: {
    update: _.debounce(function (e) {
      // 입력한 시간동안 기다리는 debounced function을 생성한다.
      this.input = e.target.value; // data input 항목을 입력한 값으로 수정한다.
    }, 300), // 300 밀리세컨드를 기다린다.
  },
});
