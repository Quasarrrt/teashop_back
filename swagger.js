const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/auth.js',
	'./routes/category.js',
	'./routes/payment.js',
	'./routes/order.js',
	'./routes/product.js',
	'./routes/user.js',
]

swaggerAutogen(outputFile, endpointsFiles)
