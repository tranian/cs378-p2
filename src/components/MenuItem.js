import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
	const imagePath = `${process.env.PUBLIC_URL}/images/${imageName}`;
	console.log(`getting image in ${imagePath}`);
	return (
        <div className="col-12 d-flex align-items-center menu-item">
			<img src={imagePath} alt={title} className="me-3 img-flut rounded"/>
			<div className="w-100">
				<h2 className="h5 fw-bold">{title}</h2>
				<p>{description}</p>
				<div className = "price-and-add">
					<p className="fw-bold mb-0">{price}</p>
					<button className="btn btn-primary btn-sm">Add</button>
				</div>
			</div>
		</div>
    );
};

export default MenuItem;
