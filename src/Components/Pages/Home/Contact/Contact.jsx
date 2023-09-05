import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-black text-yellow-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-400">Creating a fashion design website is a great way to showcase </div>
		</div>
		<img src="https://i.ibb.co/1fSq49D/istockphoto-665394574-612x612.jpg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form novalidate="" className="space-y-6">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-yellow-500 hover:bg-lime-400">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default Contact;