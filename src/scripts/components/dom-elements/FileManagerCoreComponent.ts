import CoreComponent from './CoreComponent';
import { FileManagerConfig } from '../../../../types';
import '../../../styles/main.css';

export class FileManagerCoreComponent extends CoreComponent {
  public constructor(configuration?: FileManagerConfig) {
    super(configuration);
  }

  public render(): void {
    if (
      this.configuration.targetElement &&
      typeof this.configuration.targetElement === 'string'
    ) {
      const targetElement = document.querySelector(
        this.configuration.targetElement,
      );
      targetElement.addEventListener('click', () => {
        const container = this._renderContainer();
        const wrapper = this._renderWrapper();
        const header = this._renderHeading();
        const body = this._renderBody();

        wrapper.append(header);
        wrapper.append(body);
        container.append(wrapper);

        document.querySelector('body').append(container);
      });
    }
  }

  // private _renderStyling(): HTMLStyleElement {
  //   /**
  //    * Load CSS
  //    */
  //   // const styles = require('../../../styles/main.css');

  //   /**
  //    * Make tag
  //    */
  //   const tag = $.make('style', null, {
  //     textContent: styles.toString(),
  //   });

  //   /**
  //    * Append styles at the top of HEAD tag
  //    */
  //   $.prepend(document.head, tag);
  // }

  private _renderContainer(): HTMLDivElement {
    const container: HTMLDivElement = document.createElement('div');
    container.classList.add('js-filemanager');

    return container;
  }

  private _renderWrapper(): HTMLDivElement {
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('js-filemanager--wrapper');

    return wrapper;
  }

  private _renderHeading(): HTMLElement {
    const header: HTMLElement = document.createElement('header');
    header.classList.add('js-filemanager--wrapper--header');

    const title: HTMLHeadingElement = document.createElement('h2');
    title.innerHTML = 'JS File Manager';

    header.append(title);

    return header;
  }

  private _renderBody(): HTMLDivElement {
    const body: HTMLDivElement = document.createElement('div');
    body.classList.add('js-filemanager--wrapper--body');

    const sideBar = this._renderSideBar();
    const contentSection = this._renderContentSection();

    body.append(sideBar);
    body.append(contentSection);

    return body;
  }

  private _renderSideBar(): HTMLDivElement {
    const sideBar: HTMLDivElement = document.createElement('div');
    sideBar.classList.add('js-filemanager--wrapper--body--side-bar');

    return sideBar;
  }

  private _renderContentSection(): HTMLDivElement {
    const contentWrapper: HTMLDivElement = document.createElement('div');
    contentWrapper.classList.add(
      'js-filemanager--wrapper--body--content-wrapper',
    );

    return contentWrapper;
  }
}
