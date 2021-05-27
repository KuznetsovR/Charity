import { BlockType, GridBlock, HeadingBlock, HeadingLevel, ImageBlock, SectionBlock, TextBlock } from "./blocks";

export class TextBlockClass implements TextBlock {
    public type: BlockType.Text = BlockType.Text;
    constructor(
        public id: string,
        public content: string,
    ) {
        // this.id = id;
        // this.content = content;
        // this.type = type;
    }
}
export class HeadingBlockClass implements HeadingBlock {
    public type: BlockType.Heading = BlockType.Heading;
    constructor(
        public id: string,
        public content: string,
        public level: HeadingLevel,
    ) { }
}
export class ImageBlockClass implements ImageBlock {
    public type: BlockType.Image = BlockType.Image;
    constructor(
        public id: string,
        public src: string,
        public alt: string,
        public width: string,
        public height: string,
    ) { }
}
export class GridBlockClass implements GridBlock {
    public type: BlockType.Grid = BlockType.Grid;
    constructor(
        public id: string,
        public rows: number,
        public cols: number,
        public children: []
    ) { }
}
export class SectionBlockClass implements SectionBlock {
    public type: BlockType.Section = BlockType.Section
    constructor(
        public id: string,
        public children: (TextBlock | HeadingBlock | ImageBlock | GridBlock)[],
    ) { }
}