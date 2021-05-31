export enum BlockType {
    Text, Heading, Image, Grid, Section, Empty
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
    src: string;
    alt: string;
    width: string;
    height: string;
}
export interface GridBlock extends ElementBlock{
    type: BlockType.Grid
    rows: number;
    cols: number;
    children: BlockChildren;
}
export interface SectionBlock extends ElementBlock {
    type: BlockType.Section;
    children: BlockChildren;
}
export interface EmptyBlock extends ElementBlock{
    type: BlockType.Empty
}

export type BlockChildren = (TextBlock|HeadingBlock|ImageBlock|GridBlock|EmptyBlock)[];
export function isSectionBlock(block: ElementBlock): block is SectionBlock{
    return block.type === BlockType.Section
}
export function isHeadingBlock(block: ElementBlock): block is HeadingBlock{
    return block.type === BlockType.Heading
}
export function isGridBlock(block: ElementBlock): block is GridBlock{
    return block.type === BlockType.Grid
}