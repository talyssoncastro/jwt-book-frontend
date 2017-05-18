"use strict";
var editora_list_component_1 = require('./editora-list.component');
var editora_form_component_1 = require('./editora-form.component');
var auth_guard_service_1 = require("../auth-guard.service");
exports.EditoraRoutes = [
    { path: 'editora', component: editora_list_component_1.EditoraListComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'editora/:id/edit', component: editora_form_component_1.EditoraFormComponent },
    { path: 'editora/new', component: editora_form_component_1.EditoraFormComponent }
];
//# sourceMappingURL=editora.routes.js.map