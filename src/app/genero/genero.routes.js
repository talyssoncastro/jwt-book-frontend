"use strict";
var genero_list_component_1 = require('./genero-list.component');
var genero_form_component_1 = require('./genero-form.component');
exports.GeneroRoutes = [
    { path: 'genero', component: genero_list_component_1.GeneroListComponent },
    { path: 'genero/:id/edit', component: genero_form_component_1.GeneroFormComponent },
    { path: 'genero/new', component: genero_form_component_1.GeneroFormComponent }
];
//# sourceMappingURL=genero.routes.js.map