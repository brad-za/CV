import React from "react";

const Columnar = () => {
	return (
		<div
			id="Columnar"
			className="bg-emerald- absolute top-[400vh] right-0 flex h-[100vh] w-1/2 flex-col  text-right text-3xl"
		>
			<span className="Columnar" />
			<div className="-mt-20 flex h-full flex-col items-center justify-center ">
				<h2 className="text-right text-3xl">
					Columns are better, hear me out.
				</h2>
				<h3 className="bold italic "> its more than visual</h3>
				<div className="mt-10 text-2xl [&>h3]:mt-3">
					<h3>Take a look at your keyboard.</h3>
					<h3>Phones, laptops and most other keyboards </h3>
					<h3> all have a staggered column layout.</h3>
					<h3>Why you may ask? Typewriters</h3>
					<h3>
						<br /> I decided this was not good enough. Welcome,
						Columnar.
					</h3>
					<h3>A columnar layout felt instantly natural</h3>
					<h3>while opening the gate for our next topic.</h3>
				</div>
				<div className="mt-20">I love a good numpad.</div>
			</div>
		</div>
	);
};

export default Columnar;
