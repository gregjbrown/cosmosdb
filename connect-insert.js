db = connect('mongodb://<connection string here>');
db.resources.insertMany([
    {
        endpoint: '/finance',
        allowReadRoles: ['finance-admin'],
        allowWriteRoles: ['finance-admin'],
        allowAdminRoles: ['finance-admin'],
    },
    {
        endpoint: '/finance/reports',
        allowReadRoles: ['finance-admin', 'reports-admin', 'reports-reader'],
        allowWriteRoles: ['finance-admin', 'reports-admin', 'reports-writer'],
        allowAdminRoles: ['finance-admin', 'reports-admin'],
    },
    {
        endpoint: '/finance/reports/q1-2021.pdf',
        allowReadRoles: ['finance-admin', 'reports-admin', 'reports-reader'],
        allowWriteRoles: ['finance-admin', 'reports-admin', 'reports-writer'],
        allowAdminRoles: ['finance-admin', 'reports-admin'],
    },
    {
        endpoint: '/finance/reports/q2-2021.pdf',
        allowReadRoles: ['finance-admin', 'reports-admin', 'reports-reader'],
        allowWriteRoles: ['finance-admin', 'reports-admin', 'reports-writer'],
        allowAdminRoles: ['finance-admin', 'reports-admin'],
    },
])