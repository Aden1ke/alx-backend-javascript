import Currency from './3-currency.js';
export default class Pricing {
	constructor(amount, currency) {
		if (typeof amount !== 'number') {
			throw new TypeError('amount must be a number');
		} else if (!(currency instanceof Currency)) {
			throw new TypeError('currency must of type Currency');
		}
		this._amount = amount;
		this._currency = currency;
	}
	get amount() {
		return this._amount;
	}
	set amount(newAmount) {
		if (typeof newAmount !== 'number') {
			throw new TypeError('amount must be a number');
		}
		this._amount = newAmount;
	}
	get currency() {
		return this._currency;
	}
	set currency(newCurrency) {
		if (!(newCurrency instanceof Currency)) {
			throw new TypeError('currency must of type Currency');
		}
		this._currency = newCurrency;
	}
	displayFullPrice () { 
		return `${this._amount} ${this._currency.name} (${this._currency.code})`
	}
	static convertPrice(amount, conversionRate) {
		if (typeof amount !== 'number') {
			throw new TypeError('Amount must be a number');
		}
		else if (typeof conversionRate !== 'number') {
			throw new TypeError('Conversion rate must be a number');
		}
		return `${this._amount} x ${conversionRate}`
	}
}
