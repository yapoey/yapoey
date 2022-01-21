const middleware = {}

middleware['init'] = require('../middleware/init.js')
middleware['init'] = middleware['init'].default || middleware['init']

export default middleware
