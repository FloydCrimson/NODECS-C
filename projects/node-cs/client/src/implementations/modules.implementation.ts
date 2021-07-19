import { FSModule } from './fs.module';
import { PathModule } from './path.implementation';

export interface ModulesImplementation {
  'fs': FSModule,
  'path': PathModule
}
