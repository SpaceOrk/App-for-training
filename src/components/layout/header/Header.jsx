import { IoMdArrowBack } from 'react-icons/io'
import { FaRegUser } from "react-icons/fa";
import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({ backLink }) => {

	const {pathname} = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/'  ?  (
			<button onClick={() => {navigate(backLink || '/')}}>
				<IoMdArrowBack fill='#fff' fontSize={29} />
			</button>
			) : <button
			onClick={()=> {navigate(isAuth? '/profile' : '/auth')}}>
				<FaRegUser  fill='white' fontSize={27} />
			</button> }
			<Hamburger />
		</header>
	)
}

export default Header
