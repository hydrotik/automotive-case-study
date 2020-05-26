export function numberWithCommas(x: number | string): string {
	// return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return x.toLocaleString('en-US');
}

export function currency(x: number | string): string {
	return `$${x.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2 })}`;
}
