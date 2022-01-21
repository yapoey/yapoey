export default function (context) {
  context.store.dispatch("initColorMode", context.req);
}
