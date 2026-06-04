import TasksPage from "@/pages/TasksPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import SummaryPage from "@/pages/SummaryPage.vue";
import NotFoundErrorPage from "@/pages/errors/NotFoundErrorPage.vue";
import Homepage from "@/pages/Homepage.vue";

const routes = [
    {
        path: "/tasks",
        component: TasksPage,
        name: 'tasks'
    },
    {
        path: "/login",
        component: LoginPage,
        name: 'login'
    },
    {
        path: "/register",
        component: RegisterPage,
        name: 'register'
    },
    {
        path: "/summary",
        component: SummaryPage,
        name: 'summary'
    },
    {
        path: "/:notFound(.*)",
        name: "error.404",
        component: NotFoundErrorPage
    },
    {
        path: "/",
        name: "home",
        component: HomePage
    }
]

export default routes