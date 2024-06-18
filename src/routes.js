const { addNoteHandler, showNotesHandler, showNoteHandler, editNoteHandler, deleteNoteHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: showNotesHandler,
  },
  {
    method: "DELETE",
    path: "/notes",
    handler: () => {},
  },
  {
    method : "GET",
    path : "/notes/{id}",
    handler : showNoteHandler
  },
  {
    method : "PUT",
    path : "/notes/{id}",
    handler : editNoteHandler
  },
  {
    method : "DELETE",
    path : "/notes/{id}",
    handler : deleteNoteHandler
  }
];

module.exports = routes;
