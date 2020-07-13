<template>
  <q-list>
    <q-list padding class="menu-list">
      <q-item clickable v-ripple to="/">
        <q-item-section>GoodPassphrase.com</q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/about">
        <q-item-section>About</q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/privacy">
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