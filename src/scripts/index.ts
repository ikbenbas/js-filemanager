/**
 * .......##..######..########.####.##.......########.##.....##....###....##....##....###.....######...########.########.
 * .......##.##....##.##........##..##.......##.......###...###...##.##...###...##...##.##...##....##..##.......##.....##
 * .......##.##.......##........##..##.......##.......####.####..##...##..####..##..##...##..##........##.......##.....##
 * .......##..######..######....##..##.......######...##.###.##.##.....##.##.##.##.##.....##.##...####.######...########.
 * .##....##.......##.##........##..##.......##.......##.....##.#########.##..####.#########.##....##..##.......##...##..
 * .##....##.##....##.##........##..##.......##.......##.....##.##.....##.##...###.##.....##.##....##..##.......##....##.
 * ..######...######..##.......####.########.########.##.....##.##.....##.##....##.##.....##..######...########.##.....##
 */

'use strict';

import { FileManagerConfig } from '../../types';
import Core from './components/core';

/**
 * JSFileManager
 *
 * Manage and upload files and directories given by an API
 * @version 0.1.0
 *
 * @licence GPL-3.0-or-later
 * @author Bas van Wouwen <https://www.mijnnaamisbas.nl>
 */
export class JSFileManager {
  /**
   * @constructor
   *
   * @param {FileManagerConfig|undefined} [configuration] - user configuration
   */
  public constructor(configuration?: FileManagerConfig) {
    /**
     * Create a JSFileManager manager instance
     */
    const JSFileManager = new Core(configuration);
    JSFileManager.init();
  }
}
