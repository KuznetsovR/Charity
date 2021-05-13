export enum BlockType {
    Text, Heading, Image, List, Grid, Section
}
export interface ElementBlock {
    type: BlockType;
    id: string;
}
export interface TextBlock extends ElementBlock{
    type: BlockType.Text;
    content: string;
}
export interface HeadingBlock extends ElementBlock {
    type: BlockType.Heading
    content: string;
    level: HeadingLevel
}
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface ImageBlock extends ElementBlock{
    type: BlockType.Image;
    src: string
    alt: string
}
export interface ListBlock extends ElementBlock{
    type: BlockType.List
    ordered: boolean;
    marker: string;
}
export interface GridBlock extends ElementBlock{
    type: BlockType.Grid
    rows: number;
    cols: number;
}
export interface SectionBlock extends ElementBlock {
    type: BlockType.Section;
    children: (TextBlock|HeadingBlock|ImageBlock|ListBlock|GridBlock)[];
}
export function isSectionBlock(block: ElementBlock): block is SectionBlock{
    return block.type === BlockType.Section
}