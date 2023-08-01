db.createUser(
    {
        user: "root",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "project-aaeo"
            }
        ]
    }
);

db = new Mongo().getDB("project-aaeo");