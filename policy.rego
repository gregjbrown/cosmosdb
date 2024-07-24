package mongo

import future.keywords.contains
import future.keywords.if
import future.keywords.in

default allow := false

resource_query_response := mongodb.find_one({
    "uri": "mongodb://<connection string here>",
    "database": "permissions",
    "collection": "resources",
    "filter": {
        "endpoint": sprintf("/%s", [concat("/", input.request.path)]),
    },
    "options": {"projection": {"_id": false}}
})

# User is super admin — no need to query the database
admin if "admin" in input.user.roles

allow if admin

# User has role that grants admin privileges for endpoint
allow if {
    not admin
    some role in input.user.roles
    role in resource_query_response.results.allowAdminRoles
}

# Read request, and user has role that grants read privileges for endpoint
allow if {
    not admin
    input.request.method in {"GET", "HEAD"}
    some role in input.user.roles
    role in resource_query_response.document.allowReadRoles
}

# Write request, and user has role that grants write privileges for endpoint
allow if {
    not admin
    input.request.method in {"POST", "PUT"}
    some role in input.user.roles
    role in resource_query_response.document.allowWriteRoles
}