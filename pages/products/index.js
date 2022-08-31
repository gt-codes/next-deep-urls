import Link from 'next/link';
import React from 'react';
import { data } from '../../data';

export default function ProductsList() {
	return (
		<div>
			{Object.keys(data).map((vehicleType) => (
				<>
					<h1>{vehicleType}</h1>
					<ul>
						{data[vehicleType].map((vehicle) => (
							<li>
								<Link
									href={`/products/${vehicleType}/${vehicle.brand.toLowerCase()}/${vehicle.model.toLowerCase()}/${vehicle.slug.toLowerCase()}`}>
									<a>
										{vehicle.brand} {vehicle.model}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</>
			))}
		</div>
	);
}
