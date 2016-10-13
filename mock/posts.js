'use strict';

module.exports = {
  'GET /api/posts': function(req, res) {
    setTimeout(function() {
      res.json([
        { "id": 1, "title": "json-server", "author": "typicode", "content": "123" },
        { "id": 2, "title": "aa", "author": "abc", "content": "456" },
        { "id": 3, "title": "bb", "author": "abc", "content": "789" }
      ])
    }, 500)
  }

};
