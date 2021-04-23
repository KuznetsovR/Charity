export interface PageElement {
    tag: Tag;
    children: (PageElement|string)[];
}
export interface Page {
    title: string;
    header: PageElement;
    main: PageElement;
    footer: PageElement;
}
export type Tag = 'header' | 'main' | 'footer' | 'div' | 'nav' | 'ul' | 'li' | 'section' | 'h1' | 'p';
