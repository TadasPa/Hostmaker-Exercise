Implemention comments
I have choosen client side rendering + rest api pattern to fullfil the requirement cause:
-accounts seem to be authenticated users
-accounts page does not seem to be consideration for SEO
-property data seem to be dynamic data and further dynamic manipulation of it may be required, therefore client side rendering seems better fit

I have looked into possibilities to server render this app:
-"react-snapshot" to create static snapshots on build
-"nextjs"
Which might be an options to acctually implement Server Side Rendering if needed.

There is mock property record added ("33 miles away") to test if property is within center radius, notice location pin color red for this one.

Run notes
To run this app on local machine please follow bellow instructions (windows, node, npm):
1. Clone git repository "https://github.com/TadasPa/Hostmaker-Exercise.git"
2. Install dependencies and run api server
    2.1 execute command at cloned folder root location "cd api-server"
    2.2 "npm install"
    2.3 "npm start"
3. On success console will display "App listening on port 3100!"
4. Install dependencies and run the app
    4.1 execute command at cloned folder root location "cd accounts-app"
    4.2 "npm install"
    4.3 "npm start"
5. On success app will be available at "http://localhost:3000/"
6. To execute tests run conlose command "npm test" and hit "a" on a keyboard to run all tests