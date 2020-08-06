const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
      { path: "/privacy", component: () => import("pages/Privacy.vue") }
    ]
  }
];

// Always leave this as last one
routes.push({
  path: "*",
  component: () => import("pages/Error404.vue")
});

export default routes;
