<template>
    <q-item
        @click="currentTask.completed = !currentTask.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple
    >
        <q-item-section side top>
        <q-checkbox v-model="currentTask.completed" />
        </q-item-section>

        <q-item-section>
        <q-item-label
            :class="{ 'text-strike' : task.completed }"
        >
            {{ task.name }}
        </q-item-label>
        </q-item-section>

        <q-item-section side>
        <div class="row">
            <div class="column justify-center">
            <q-icon
                class="q-mr-xs"
                name="event"
                size="18px"
            />
            </div>
            <div class="column">
            <q-item-label
                class="row justify-end"
                caption
            >
                {{ task.dueDate }}
            </q-item-label>
            <q-item-label
                class="row justify-end"
                caption
            >
                <small>{{ task.dueTime }}</small>
            </q-item-label>
            </div>
        </div>
        </q-item-section>
    </q-item>
</template>

<script>
export default {
    props: ['task', 'id'],
        data() {
        return {
            currentTask: this.task
        }
    },
    computed: {
        changeTaskStatus() {
            return !this.task.completed;
        }
    }
}
</script>

<style>

</style>