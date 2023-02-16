export const DTRegisterTypes = [
    {
        id: 'business',
        title: 'Are You a Business ?',
        process: [
            'Register your Company',
            'Create a Searchable Listing',
            'Connect with our Investor Database'
        ],
        button: {
            routerLink: '/auth/signup/issuer',
            label: 'Get Listed Today'
        }
    },
    {
        id: 'investor',
        title: 'Are You an Investor ?',
        process: [
            'Register Your Profile',
            'Search Relevant Listings',
            "Make an 'Expression of Interest'"
        ],
        button: {
            routerLink: '/auth/signup/investor',
            label: 'Register Today !'
        }
    },
    {
        id: 'accredit',
        title: 'Are You an Accredited Investor ?',
        process: [
            'List',
            'Research Issuers',
            'Specify your Investment Criteria'
        ],
        button: {
            routerLink: '/auth/signup/accredited',
            label: 'Register Today !'
        }
    }
]