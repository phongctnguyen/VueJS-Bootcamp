const vm = new Vue({
  el: '#root',
  data() {
    return { open: true };
  },
  methods: {
    showDropdown() {
      this.open = !this.open;
    },
  },
  template: `
    <div>
      <a v-if="open" class='dropdown-button btn' href='#' @click="showDropdown">Open</a>
      
      <ul v-else class='dropdown-content'>
        <li @click="showDropdown"><a href="#!">one</a></li>
        <li @click="showDropdown"><a href="#!">two</a></li>
        <li class="divider"></li>
        <li @click="showDropdown"><a href="#!">three</a></li>
      </ul>
    </div>
  `,
});
