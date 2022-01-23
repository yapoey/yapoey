export default function ({ store, req }) {
  store.dispatch("initColorMode", req);
}
