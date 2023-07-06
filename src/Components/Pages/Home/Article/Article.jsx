import React from 'react';
import home1 from '../../../../assets/images/home/fashion-design-studio-sewing-cutting.avif';
import home2 from '../../../../assets/images/home/depositphotos_7146367-stock-photo-fashion-designer.jpg';
import home3 from '../../../../assets/images/home/fashion-design-studio-sewing-cutting.avif';
import home4 from '../../../../assets/images/home/fashion-designing-steps.webp';
import home5 from '../../../../assets/images/home/home1.jpg';
import home6 from '../../../../assets/images/home/nyfwsketches-1567608885.jpg';
import home7 from '../../../../assets/images/home/photo-1573879500655-98f2012dd1db.avif';

const Article = () => {
    return (
        <div>
       {/* <section className="dark:bg-gray-800 dark:text-gray-100"> */}
       <section className="bg-black text-white p-4">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src={home1} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Fashion design blogs. </h3>
				<span className="text-xs dark:text-gray-400">February 19, 2021</span>
				<p>Find Online Fashion Designing Now While Searching Multiple Engines. Search for Online fashion designing at FindYourAnswers.co. Instant Search. Latest Results. Discover Quality Results.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={home2} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline"> John Frieda</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p>Accordingly, fashion is a famous aesthetic expression, especially in clothing, lifestyle, accessories, makeup, hairstyle, and body. John Frieda is one of the amazing fashion designer blogs focusing on quality results for dazzling cuts and styles for hair.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={home3} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Good On You</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p>Most people opt for apparel that reflects their personality. Therefore, designing functional and aesthetically pleasing clothes is necessary to meet every individual’s demands.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={home4} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">NSS Mage</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p>Fashion designers have great influence trends for the current and upcoming seasons. These fashion designer blogs are useful if you’re looking for inspiration.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={home5} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">We Wore What</h3>
					<span className="text-xs dark:text-gray-400">January 24, 2021</span>
					<p>Fashion designers have great influence trends for the current and upcoming seasons. These fashion designer blogs are useful if you’re looking for inspiration.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={home6} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Who What Wear</h3>
					<span className="text-xs dark:text-gray-400">January 25, 2021</span>
					<p>Fashion designers have great influence trends for the current and upcoming seasons. These fashion designer blogs are useful if you’re looking for inspiration.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={home7} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Flacon Magazine
</h3>
					<span className="text-xs dark:text-gray-400">January 26, 2021</span>
					<p>Fashion designers have great influence trends for the current and upcoming seasons. These fashion designer blogs are useful if you’re looking for inspiration.</p>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div>
	</div>
</section>
</div>   
       
    );
};

export default Article;