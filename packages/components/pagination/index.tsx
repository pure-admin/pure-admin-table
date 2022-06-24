import props from "./props";
import { defineComponent, ref } from "vue";

const PaginationRef = ref();

export default defineComponent({
  name: "PurePagination",
  props,
  methods: {
    /** Get Pagination Methods */
    getPaginationRef() {
      return PaginationRef.value;
    }
  },
  setup(props, { slots, attrs }) {
    return () => (
      <>
        <el-pagination {...props} {...attrs} ref={PaginationRef}>
          {slots.default ? slots.default() : ""}
        </el-pagination>
      </>
    );
  }
});
