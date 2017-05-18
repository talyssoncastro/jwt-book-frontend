"use strict";
var livro_list_component_1 = require('./livro-list.component');
var livro_form_component_1 = require('./livro-form.component');
exports.LivroRoutes = [
    { path: 'livro', component: livro_list_component_1.LivroListComponent },
    { path: 'livro/:id/edit', component: livro_form_component_1.LivroFormComponent },
    { path: 'livro/new', component: livro_form_component_1.LivroFormComponent }
];
//# sourceMappingURL=livro.routes.js.map