
import { DrenagensController } from './controllers/drenagens.js';
import { DrenagensView } from './views/drenagens.js';
import { DrenagensModel } from './models/drenagens.js';
import { UnidadesHidrograficasController} from './controllers/unidades-hidrograficas.js';
import { UnidadesHidrograficasModel } from './models/unidades-hidrograficas.js';
import { UnidadesHidrograficasView } from './views/unidades-hidrograficas.js';

let UnidadesHidrograficas = new UnidadesHidrograficasModel()

new DrenagensController(new DrenagensModel(), new DrenagensView(), UnidadesHidrograficas);
new UnidadesHidrograficasController(UnidadesHidrograficas, new UnidadesHidrograficasView())





