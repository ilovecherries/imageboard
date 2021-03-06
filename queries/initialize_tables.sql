DROP TABLE posts;
DROP TABLE threads;

CREATE TABLE posts(
    -- this id is global and should increment with each post
    id          serial NOT NULL,
    content     varchar(4098) NOT NULL,
    -- this refers to the parent thread that the post is contained in
    parent_id   int NOT NULL,
    -- hash
    tripcode    varchar(128),
    -- this is the URL where the image is stored, this should be replaced with an internal ID later on or ELSE
    -- this could be abused for links from outside the site that could be harmful ?? 
    attachment  varchar(512),
    -- the name that is attached to the person, should be set to "Anonymous" by default
    name varchar(32) DEFAULT 'Anonymous'
);

CREATE TABLE threads(
    -- id of thread
    id          serial NOT NULL
);

