import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/HomePage.vue'
import PrivacyPolicyPage from './../components/PrivacyPolicyPage.vue'
import TermsOfServicePage from './../components/TermsOfServicePage.vue'
import CookiePolicyPage from './../components/CookiePolicyPage.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      { path: '/', component: HomePage },
      { path: '/privacy', component: PrivacyPolicyPage },
      { path: '/terms', component: TermsOfServicePage },
      { path: '/cookies', component: CookiePolicyPage },
    ]
})
