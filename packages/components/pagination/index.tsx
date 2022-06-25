import props from "./props";
import { defineComponent, ref } from "vue";

const PaginationRef = ref();

export default defineComponent({
  name: "PurePagination",
  props,
  setup(props, { slots, attrs }) {
    return () => (
      <el-pagination {...props} {...attrs} ref={PaginationRef}>
        {slots.default ? slots.default({ props, attrs }) : null}
      </el-pagination>
    );
  }
});
