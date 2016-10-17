'use strict';

module.exports = {
  'GET /api/posts': function(req, res) {
    setTimeout(function() {
      res.json([
        { "id": '0.b82q7lhna4', "title": "json-server", "author": "typicode", "content": "123" },
        { "id": '0.16qh65otjqo', "title": "aa", "author": "abc", "content": "456" },
        { "id": '0.u7qvv0rqr0g', "title": "bb", "author": "abc", "content": "789" }
      ])
    }, 500)
  }

};
