import { defineComponent } from "vue";

const props = {
  render: {
    type: Function
  },
  params: {
    type: Object
  }
};

export default defineComponent({
  name: "Renderer",
  props,
  setup(props) {
    return () => <>{props!.render(props.params)}</>;
  }
});
