Steps:

1.  Node-express backend npm package consists of mysql for db connection and express for routing.
2.  App.js is the main javascript of the backend. You can handle connecting to the db here or separate into and export/import a db.js, probably preferable to do the latter at scale.
3.  Make sure to set the proxy in the react front-end's package.json to the appropriate place, it will proxy requests that are not static HTML/CSS through express basicaly.
4.  Fetch is in the react app component here but would likely be an action-reducer pairing in proper production.

Resources:
https://blog.cloudboost.io/react-express-the-nodejs-way-of-reacting-and-expressing-7a518e4da3
https://medium.com/@avanthikameenakshi/crud-react-express-99025f03f06e
https://gist.github.com/clarle/3180770
https://www.terlici.com/2015/08/13/mysql-node-express.html

Most of all:
https://www.w3schools.com/nodejs/nodejs_mysql.asp
