import { BlockType } from "./blocks";
import { Page } from "./page";

export const EXAMPLE_PAGE: Page = {
    title: 'example',
    sections: [
        {
            type: BlockType.Section,
            id: '0000',
            children: [
                {
                    type: BlockType.Heading,
                    content: 'tt',
                    level: 1,
                    id: '0000'
                },
                {
                    type: BlockType.Text,
                    content: '123',
                    id: '0001'
                }
            ]
        }, {
            type: BlockType.Section,
            id: '0001',
            children: [
                {
                    type: BlockType.Heading,
                    content: 'tt',
                    level: 1,
                    id: '0000'

                },
                {
                    type: BlockType.Text,
                    content: '123',
                    id: '0001'
                },
                {
                    type: BlockType.Grid,
                    rows: 2,
                    cols:3,
                    id: '0002', 
                    children: [
                        {
                            type: BlockType.Text,
                            content: '123',
                            id: '0000'
                        },
                        {
                            type: BlockType.Text,
                            content: '2',
                            id: '0001'
                        },
                        {
                            type: BlockType.Text,
                            content: '3',
                            id: '0002'
                        },
                        {
                            type: BlockType.Text,
                            content: '4',
                            id: '0003'
                        },
                        {
                            type: BlockType.Text,
                            content: '5',
                            id: '0004'
                        },
                        {
                            type: BlockType.Heading,
                            content: 'tt',
                            level: 1,
                            id: '0006'
        
                        },
                    ]
                }
            ]
        }
    ]
    // header: {
    //     tag: 'header',
    //     children: [
    //         {
    //             tag: 'nav',
    //             children: [
    //                 {
    //                     tag: 'ul',
    //                     children: [
    //                         {
    //                             tag: 'li',
    //                             children: ['1']
    //                         }, {
    //                             tag: 'li',
    //                             children: ['2']
    //                         }, {
    //                             tag: 'li',
    //                             children: ['3']
    //                         }, {
    //                             tag: 'li',
    //                             children: ['4']
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // main: {
    //     tag: 'main',
    //     children: [
    //         {
    //             tag: 'section',
    //             children: [
    //                 {
    //                     tag: 'h1',
    //                     children:['tt']
    //                 },
    //                 {
    //                     tag: 'p',
    //                     children:['123']
    //                 }
    //             ]
    //         },{
    //             tag: 'section',
    //             children: [
    //                 {
    //                     tag: 'h1',
    //                     children:['tt']
    //                 },
    //                 {
    //                     tag: 'p',
    //                     children:['123']
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // footer: {
    //     tag: 'footer',
    //     children: [
    //         {
    //             tag: 'ul',
    //             children: [
    //                 {
    //                     tag: 'li',
    //                     children: ['where']
    //                 }, {
    //                     tag: 'li',
    //                     children: ['when']
    //                 }, {
    //                     tag: 'li',
    //                     children: ['why']
    //                 }
    //             ]
    //         }
    //     ]
    // },
}