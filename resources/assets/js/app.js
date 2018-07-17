require('./bootstrap');
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


window.Vue = require('vue');

library.add(faSave)
library.add(faEdit)
library.add(faTrash)
library.add(faCheck)
library.add(faEllipsisH)
library.add(faChevronDown)
library.add(faWindowClose)

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('login', require('./components/auth/Login.vue'));
Vue.component('register', require('./components/auth/Register.vue'));

Vue.component('admin-teacher', require('./components/admin/Teacher.vue'));
Vue.component('admin-student', require('./components/admin/Student.vue'));

Vue.component('teacher-home', require('./components/teacher/Home.vue'));
Vue.component('teacher-courses', require('./components/teacher/ListCourses.vue'));

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    // router
});
