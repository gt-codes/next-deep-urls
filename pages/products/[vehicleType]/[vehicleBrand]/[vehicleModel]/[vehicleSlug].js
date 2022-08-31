import React from 'react';
import { useRouter } from 'next/router';
import { data } from '../../../../../data';

export const getStaticPaths = async () => {
	const paths = Object.keys(data).reduce((paths, vehicleType) => {
		const vehicles = data[vehicleType];
		const vehiclePaths = vehicles.map((vehicle) => ({
			params: {
				vehicleType,
				vehicleBrand: vehicle.brand.toLowerCase(),
				vehicleModel: vehicle.model.toLowerCase(),
				vehicleSlug: vehicle.slug.toLowerCase(),
			},
		}));

		return [...paths, ...vehiclePaths];
	}, []);

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			...params,
		},
	};
};

export default function Comments(props) {
	const router = useRouter();

	const handleBack = () => router.back();

	return (
		<div>
			<button onClick={handleBack}>Go Back</button>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	);
}
