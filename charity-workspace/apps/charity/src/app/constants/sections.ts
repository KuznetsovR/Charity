import { Section, Store } from '../interfaces/interfaces';

export const SECTIONS: readonly Section[] = [
	{
		index: 0,
		header: 'Some text',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad adipisci aspernatur eum ex expedita facere illo inventore ipsa iusto neque, praesentium quaerat, quia quod rem sapiente sit soluta totam!(для чего нужны)'
	},
	{
		index: 1,
		header: 'Some text',
		text: 'My money is in that office, right? If she start giving me some bullshit about it is not there, and we got to go someplace else and get it, I am gonna shoot you in the head then and there. Then I am gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I am talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?'
	},
	{
		index: 2,
		header: 'Наши партнеры',
		storesUrl: '/shop/'
	},
	{
		index: 3,
		header: 'Some text',
		text: 'You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I do not know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I am breaking now. We said we would say it was the snow that killed the other two, but it was not. Nature is lethal but it does not hold a candle to man.'
	}
];
export const STORES: readonly Store[] = [
	{ name: 'Пятерочка', image: 'https://media.rbcdn.ru/media/upload_tmp/2018/1458359505.jpg', id: 1 },
	{ name: 'Перекресток', image: 'https://logosklad.ru/photo/logos/616/1582597280.jpg', id: 2 },
	{ name: 'Карусель', image: 'https://logosklad.ru/photo/logos/578/1532440894.jpg', id: 3 },
	{
		name: 'Ашан ',
		image: 'https://play-lh.googleusercontent.com/iCwizB292Wk1N0F5Q78B9ZbO5UGhJLXfvmRWt7bUjrxtrcha8sVqO6e67haX_blMLw',
		id: 4
	}
];
