import { createContext, useCallback, useContext } from 'react';

import { useLocalStorage } from '../../hooks';

const AuthState = createContext(null);
const AuthDispatch = createContext(null);

const AuthContext = ({ children }) => {
	const [auth, setAuth] = useLocalStorage('auth', { user: null, isLoading: true });

	const login = useCallback((user) => {
		setAuth((prev) => ({ ...prev, isLoading: true }));

		return fetch('http://localhost:4000/login', {
			body: JSON.stringify(user),
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		}).then(async (response) => {
			if (!response.ok) {
				setAuth({ user: null, isLoading: false });
				throw new Error('You shall not pass!');
			}

			const loggedUser = await response.json();
			setAuth({ isLoading: false, user: loggedUser });
		});
	}, []);

	const logout = useCallback(() => {
		setAuth({ user: null, isLoading: false });
	}, []);

	return (
		<AuthState.Provider value={auth}>
			<AuthDispatch.Provider value={{ login, logout }}>{children}</AuthDispatch.Provider>
		</AuthState.Provider>
	);
};

const useAuthState = () => {
	const context = useContext(AuthState);
	if (context === undefined) {
		throw new Error('Cannot use useAuthState outside AuthContext');
	}

	return context;
};

const useAuthDispatch = () => {
	const context = useContext(AuthDispatch);
	if (context === undefined) {
		throw new Error('Cannot use useAuthDispatch outside AuthContext');
	}

	return context;
};

const useAuthContext = () => [useAuthState(), useAuthDispatch()];

export { AuthContext, useAuthState, useAuthDispatch, useAuthContext };
