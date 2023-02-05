import Transition from './components/Transition';
import '../styles/globals.css';
import '../styles/_normalize.css';
import '../styles/transition.css';

function MyApp({ Component, pageProps }) {
	return (
		<Transition>
			<Component {...pageProps} />
		</Transition>
	)
}

export default MyApp;
