<template>
  <div>
    <b-sidebar id="sidebar-1" title="Sidebar" no-header visible shadow>
      <div class="pt-4 px-3 py-2">
        <h2>Gest Tarefas</h2>
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Kanban</b-button>
        </div>
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Add Task</b-button>
        </div>
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Manage Categories</b-button>
        </div>
        <div class="pt-3">
          <b-button block variant="outline-secondary" class="w-100">Add Colaborator</b-button>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
