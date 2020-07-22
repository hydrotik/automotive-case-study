/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

const getData = async (url: string): Promise<object> => {
	const response = await fetch(url);
	const data = await response.json();

	return (data as object);
};

export default async (req: any, res: any): Promise<void> => {
	const { lng, lat } = req.query;
	const radius = 1000;

	const apiPlaceURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Land%20Rover&inputtype=textquery&fields=name,geometry&locationbias=circle%3A${radius}%40${lng}%2C${lat}&key=${process.env.GOOGLE_API_KEY}`;
	const data = await getData(apiPlaceURL);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
};
