# passport_authentication and user prifile update 
# codeial 
# db connectivity -
config-> mongoose.js-> your db urls 
# prerequest -
npm install ( all required in package.json)
# run 
npm start 
# API ROOT
http://localhost:8000/
http://localhost:8000/users/sign-up
http://localhost:8000/users/sign-in

# internal root 
router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));

