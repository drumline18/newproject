# newproject

This is a simple cli utility that you can install with npm.
```
npm install -g @drumline18/newproject
```
It initializes a project with chosen packages using npm and then opens the project in VSCode.

__It's not very useful.__

## Usage
```
Small utility to create npm packages.
If you dont provide a name, it will create one for you.

Usage:
  newproject
  newproject [packages...]
  newproject -n project_name [packages...]
  newproject --help

Options:
  -n --name <name>     Specify a name for the package.
  -h --help            Shows this screen.
```
### Example
```
newproject webpack webpack-cli @babel/core @babel/preset-env babel-loader 
```
```
newproject --name MyProjectName webpack webpack-cli vue
```
