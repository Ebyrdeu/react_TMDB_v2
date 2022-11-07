import {useEffect, useState} from 'react';

export const useLocalStorage = (initialValue, key) => {

	const getValue = () => {
		const storage = localStorage.getItem(key);
		if (!storage) return initialValue;

		return JSON.parse(storage);
	};

	const [value, setValue] = useState(getValue);

	useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value]);

	return [value, setValue];
};
