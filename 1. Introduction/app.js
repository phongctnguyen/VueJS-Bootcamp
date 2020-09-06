/* First Example */

// new Vue({
//   el: '#root',
//   data: {styleOne: {}, styleTwo: {}},
//   methods: {
//     onMouseMove(event) {
//       this.styleOne = transform(-event.clientX / event.clientY);
//       this.styleTwo = transform(event.clientX / event.clientY);
//     }
//   }
// })

// function transform(offset) {
//   const cos = Math.cos(offset);
//   const sin = Math.sin(offset);
//   return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
// }

new Vue({
  el: '#app',
  data: {
    // Initialize our list of 'ingredients'
    textInput: '',
    text: 'Hello Phong',
  },
  computed: {
    // Turn data into viewable values
    generateLink() {
      const link = `https://vuejs.org/v2/guide/index.html#${this.textInput}`;
      return link;
    },
  },
  methods: {
    // Use these funtions to change data
    onInput(e) {
      this.textInput = e.target.value;
    },
  },
  // template: `
  //   <div>Hello Phong</div>
  // `
});
