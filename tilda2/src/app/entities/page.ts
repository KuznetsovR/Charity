export interface PageElement {
    tag: Tag;
    children: (PageElement | string)[];
}
export interface Page {
    title: string;
    header: PageElement;
    main: PageElement;
    footer: PageElement;
}
export interface TextBlock {
    content: string;
}
export interface SectionBlock {
    children: (TextBlock|HeadingBlock)[];
}
export interface HeadingBlock {
    content: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
}
export type Tag = 'header' | 'main' | 'footer' | 'div' | 'nav' | 'ul' | 'li' | 'section' | 'h1' | 'p';
