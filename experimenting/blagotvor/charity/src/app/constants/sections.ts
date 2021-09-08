import {Section, Store} from '../interfaces/interfaces';

export const SECTIONS: readonly Section[] = [
	{
		index: 0,
		header: 'Some text',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad adipisci aspernatur eum ex expedita facere illo inventore ipsa iusto neque, praesentium quaerat, quia quod rem sapiente sit soluta totam!(для чего нужны)'
	},
	{
		index: 1,
		header: 'Some text',
		text: 'My money\'s in that office, right? If she start giving me some bullshit about it ain\'t there, and we got to go someplace else and get it, I\'m gonna shoot you in the head then and there. Then I\'m gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I\'m talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?'
	},
	{
		index: 2,
		header: 'Наши партнеры',
		images: [
			'https://media.rbcdn.ru/media/upload_tmp/2018/1458359505.jpg',
			'https://logosklad.ru/photo/logos/616/1582597280.jpg',
			'https://logosklad.ru/photo/logos/578/1532440894.jpg',
			'https://play-lh.googleusercontent.com/iCwizB292Wk1N0F5Q78B9ZbO5UGhJLXfvmRWt7bUjrxtrcha8sVqO6e67haX_blMLw'
		]
	},
	{
		index: 3,
		header: 'Some text',
		text: 'You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don\'t know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I\'m breaking now. We said we\'d say it was the snow that killed the other two, but it wasn\'t. Nature is lethal but it doesn\'t hold a candle to man.'
	}
];
export const STORES: readonly Store[] = [
	{ name: 'Пятерочка', image: 'https://media.rbcdn.ru/media/upload_tmp/2018/1458359505.jpg' },
	{ name: 'Перекресток', image: 'https://logosklad.ru/photo/logos/616/1582597280.jpg' },
	{ name: 'Карусель', image: 'https://logosklad.ru/photo/logos/578/1532440894.jpg' },
	{ name: 'Ашан ', image: 'https://play-lh.googleusercontent.com/iCwizB292Wk1N0F5Q78B9ZbO5UGhJLXfvmRWt7bUjrxtrcha8sVqO6e67haX_blMLw' },
];
