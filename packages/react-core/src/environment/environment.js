import development  from './development.js'
import production   from './production.js'

export default process.env.NODE_ENV =='production'?production:development