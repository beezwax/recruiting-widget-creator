### Feature Request

#### Setup
1. Create a new repo in your personal github account titled `bw-recruiting`
2. Run the following commands to clone and push this project to your newly created repo:
```
git clone git@github.com:beezwax/recruiting-widget-creator.git
cd recruiting-widget-creator
rm .git
git init
git add .
git commit -m 'First commit'
git remote add origin https://github.com/YOUR_USERNAME/bw-recruiting.git
git push origin -u main
```
3. Create a new branch.

#### Exercise Instructions
1. Add validation to the `Widget` class so that the name must be present and unique, and the purpose must be present if the widget is active.
2. Add error messages to the form so that if the record fails validation, the user is shown what to fix, and user values that the user entered are not lost.
3. Create a pull request in your repo showing your changes.
