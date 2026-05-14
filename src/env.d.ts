/// <reference path="../.astro/types.d.ts" />

declare module '@pagefind/default-ui' {
  export type PagefindUIOptions = {
    element?: string | HTMLElement;
    bundlePath?: string;
    pageSize?: number;
    resetStyles?: boolean;
    showImages?: boolean;
    showSubResults?: boolean;
    excerptLength?: number;
    debounceTimeoutMs?: number;
    autofocus?: boolean;
    focusOnSlash?: boolean;
  };

  export class PagefindUI {
    constructor(options: PagefindUIOptions & Record<string, unknown>);
    triggerSearch(term: string): void;
    destroy(): void;
  }
}

declare module '@pagefind/default-ui/css/ui.css';

declare module '@utahdts/utah-design-system-header/css';
