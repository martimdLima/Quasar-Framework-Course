import ModalButtons from "../components/Tasks/Modals/Shared/ModalButtons.vue";
import ModalDueDate from "../components/Tasks/Modals/Shared/ModalDueDate.vue";
import ModalDueTime from "../components/Tasks/Modals/Shared/ModalDueTime.vue";
import ModalHeader from "../components/Tasks/Modals/Shared/ModalHeader.vue";
import ModalTaskName from "../components/Tasks/Modals/Shared/ModalTaskName.vue";

export default {
  methods: {
    submitForm() {
      this.$refs.taskForm.validate().then((success) => {
        if (success) {
          this.submitTask();
        }
      });

      // to reset validations:
      this.$refs.taskForm.resetValidation();
    },
  },
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons,
  },
};
