import { FileManagerConfig } from '~/types';

export default class CoreComponent {
  /**
   * JSFileManager configuration set by the user
   */
  public configuration: FileManagerConfig;

  public constructor(configuration?: FileManagerConfig) {
    this.configuration = configuration;
  }
}
