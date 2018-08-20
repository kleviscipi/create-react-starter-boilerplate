
/**
 * Layout
 */
import DashboardLayout 	from '../../components/layout/Dashboard.jsx'
import PublicLayout     from '../../components/layout/Public.jsx'
/**
 * Public Pages
 */
import Home         from '../../components/public-pages/home/Home.jsx'
import Login 		from '../../components/public-pages/auth/Login'
import Singup 		from '../../components/public-pages/auth/Singup'
import NotFound 	from '../../components/public-pages/error/NotFound';
import NotAuthorized from '../../components/public-pages/error/NotAuthorized';

/**
 * Modules
 *
 * Dashboard Module Pages
 */
import HomeDashboard 	from '../../components/modules/dashboard/home/Home.jsx';
import Profile 	from '../../components/modules/dashboard/users/Profile';

let Component =  {

	Layout:{
        DashboardLayout,
        PublicLayout
	},

	Pages:{
		Login,
		Singup,
		Home,
        NotFound,
        NotAuthorized 
	},

	Module:{
        Dashboard:{
            Home:{
                HomeDashboard
            },
            Users:{
                Profile
            }
        }
	}
}


export default Component;

