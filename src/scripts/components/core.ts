import { FileManagerConfig } from '../../../types';
import { FileManagerCoreComponent } from './dom-elements';

/**
 * @class Core
 *
 * @classdesc JSFileManager core class
 *
 * @property this.configuration - all settings
 *
 * @type {Core}
 */
export default class Core {
  /**
   * JSFileManager configuration set by the user
   */
  public configuration: FileManagerConfig;

  public constructor(configuration?: FileManagerConfig) {
    this.configuration = configuration;
  }

  public init(): void {
    new FileManagerCoreComponent(this.configuration).render();
  }
}
