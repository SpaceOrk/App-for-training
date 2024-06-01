import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		IsAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		IsAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		IsAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		IsAuth: false
	} /* 
	{
		path: '/new-exercise',

		component: NewExercise,
		IsAuth: true,
	},

	{
		path: '/workout/:id',

		component: SingleWorkout,
		IsAuth: true,
	},
	{
		path: '/workouts',

		component: ListWorkouts,
		IsAuth: true,
	},
	{
		path: '/exercise/:id',

		component: SingleExercise,
		IsAuth: true,
	}, */
]
