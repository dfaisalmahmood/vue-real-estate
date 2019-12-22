export default {
    data() {
        return {
            navItems: [{
                    text: 'Basic Information',
                    icon: 'mdi-information',
                    link: '/user/profile/basic'
                },
                {
                    text: 'Authentication',
                    icon: 'mdi-lock-open',
                    link: '/user/profile/auth'
                },
                {
                    text: 'Billing Information',
                    icon: 'mdi-cash-usd',
                    link: '/user/profile/billing'
                },
                {
                    text: 'User settings',
                    icon: 'mdi-settings',
                    link: '/user/profile/settings'
                }
            ]
        }
    }
}