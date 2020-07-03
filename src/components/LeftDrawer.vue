<template>
  <q-list>
    <q-list padding class="menu-list">
      <q-item clickable active v-ripple>
        <q-item-section>Home</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>About</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Privacy</q-item-section>
      </q-item>
    </q-list>
  </q-list>
</template>

<script>
export default {
  name: "DrawerMenu"
};
</script>