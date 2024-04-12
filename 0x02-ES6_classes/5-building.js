export default class Building{
	constructor(sqft) {
		if (typeof newsqft !== 'number') {
			throw new TypeError('sqft must be a number')
		}
		else if (this.constructor !== Building && !this.evacuationWarningMessage) {
			throw new Error('Class extending Building must override evacuationWarningMessage');
		}
		this._sqft = sqft;
	}
	get sqft() {
		return this._sqft;
	}
	set sqft(newsqft) {
		if (typeof newsqft !== 'number') {
			throw new TypeError('sqft must be a number');
		}
		this._sqft = newsqft;
	}
}
