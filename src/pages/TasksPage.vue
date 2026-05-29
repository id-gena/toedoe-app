<template>
    <main style="min-height: 50vh; margin-top: 2rem">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask @added="handleAddedTask"/>
                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTasks" @updated="handleUpdatedTask"/>
                    <!-- show toggle button -->
                    <div
                        class="text-center my-3"
                        v-show="showToggleCompletedBtn">
                        <button
                            class="btn btn-sm btn-secondary"
                            @click="showCompletedTasks = !showCompletedTasks">
                            <span v-if="!showCompletedTasks"
                                >Show completed</span>
                            <span v-else>Hide completed</span>
                        </button>
                    </div>
                    <!-- list of completed tasks -->
                    <Tasks :tasks="completedTasks" :show="completedTasksIsVisible && showCompletedTasks"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

import { computed, onMounted, ref } from "vue";
import { allTasks, createTask, updateTask } from "../http/task-api"
import Tasks from "../components/tasks/Tasks.vue";
import NewTask from "@/components/tasks/NewTask.vue";
import axios from "axios";

const tasks = ref([])

onMounted(async () => {
    const { data } = await allTasks()
    tasks.value = data.data
})

const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))
const completedTasks = computed(() => tasks.value.filter(task => task.is_completed))
const showToggleCompletedBtn = computed(() => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0)
const completedTasksIsVisible = computed(() => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0)
const showCompletedTasks = ref(completedTasksIsVisible.value)

const handleAddedTask = async (newTask) => {
    await axios.get(
        // @todo Make it in more elegant way.
        'http://localhost:8000/sanctum/csrf-cookie',
        { withCredentials: true }
    )
    const { data:createdTask } = await createTask(newTask)
    // Add newly created task to the start of the tasks list
    tasks.value.unshift(createdTask.data)
}

const handleUpdatedTask = async (task) => {
    await axios.get(
        // @todo Make it in more elegant way.
        'http://localhost:8000/sanctum/csrf-cookie',
        { withCredentials: true }
    )
    const { data:updatedTask } = await updateTask(task.id, {
        name: task.name
    })
    const currentTask = tasks.value.find(item => item.id === task.id)
    currentTask.name = updatedTask.data.name
}
</script>
