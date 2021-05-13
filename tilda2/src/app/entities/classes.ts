import { BlockType, GridBlock, HeadingBlock, ImageBlock, ListBlock, TextBlock } from "./blocks";

export class TextBlockClass implements TextBlock {
    constructor(
        public id, 
        public content, 
        public type: BlockType.Text
    ){
        // this.id = id;
        // this.content = content;
        // this.type = type;
    }
}
export class HeadingBlockClass implements HeadingBlock {
    constructor(
        public id, 
        public content, 
        public level,
        public type: BlockType.Heading
    ){}
}
export class ImageBlockClass implements ImageBlock {
    constructor(
        public id, 
        public src,
        public alt, 
        public type: BlockType.Image,
    ){}
}
export class ListBlockClass implements ListBlock {
    constructor(
        public id, 
        public ordered,
        public marker, 
        public type: BlockType.List,
    ){}
}
export class GridBlockClass implements GridBlock {
    constructor(
        public id, 
        public rows,
        public cols, 
        public type: BlockType.Grid,
    ){}
}