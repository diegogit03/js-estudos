"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var nome = 'Diego';
nome = (_readOnlyError("nome"), 2);
