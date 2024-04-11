export default class HolbertonCourse{
	Constructor(name,length,students){
		this._name = name
		this._length = length
		this._students = students
	}
	get name() {
		return this._name;
	}
	set name(newname) {
		if (typeof newname !== 'string') {
			throw new TypeError('Name must be a string');
		}
		this._name = newname;
	}
	get length() {
		return this._length;
	}
        set length(newlength) {
                if (typeof newlength !== 'number') {
			throw new TypeError('Length must be a number');
		}
                this._length = newlength;
        }
	get students() {
                return this._students;
        }
        set students(newstudents) {
                if (Array.isArray(_students)) {
			this._students = newstudents
		}
		throw new TypeError('students must be an Array of strings');
        }
}