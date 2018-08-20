import { matchRoutes } from 'react-router-config'
import Component 		from './route-component'

export const exactMatch = (branch) => {
	return branch.match.isExact === true;
}

export const getRouteData = (location) => {
	return matchRoutes(createRoutes(), location.pathname).find(exactMatch);
}

export const createRoutes = () => {
	return [
				{ 
					path:'/app',
					component: Component.Layout.DashboardLayout,
					routes:[
							{
								component: Component.Module.Dashboard.Home.HomeDashboard,
								path: '/app',
								exact:true,

							},
						    { 	path: '/app/profile/:id',
						        component:Component.Module.Dashboard.Users.Profile,
						    },
							{
								component: Component.Pages.NotFound
							},

					]

				},
				{	
					path:'/',
                    component: Component.Layout.PublicLayout,
                    routes:[
                        { 	
                            path: '/',
                            component:Component.Pages.Home,
                            exact:true,
                        },
                        { 	
                            path: '/home',
                            component:Component.Pages.Home,
                        },
                    ]				
				},
				{	
					path:'/login',
					component: Component.Pages.Login,				
				},
				{
					path:'/singup',
					component: Component.Pages.Singup,
				},

				{
					component: Component.Pages.NotFound
				}

	];
}