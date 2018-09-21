# Learning Github

## Github

Git is an open-source version control system(VCS).

When developers create something like, they may make constant changes to the code.VCS keeps these revisions straight, storing the modifications in a central repository. 

It allows developers to easily collaborate, they can download a new version of the software, make changes, and upload the newest revision. Every developer can see these new changes, download them, and contribute.

## Install
To Install Github,need to download github first and then install it by using the command "sudo apt install git" in terminal.
- sudo - superuser do,it asks root permission
- apt - advance packaging tool,its a package manager.If used with install,it allows to 		      install the package
- install - install the package

we can install more packages by seperating them by commas.

After installing create an github account.Then create a new repository.Along with it create local repository too.

## Github Commands and its uses

1. **git init** - It is used to initialize the git.
2. **git remote add origin "repo-url"** - To specify which remote directory is to be used.When we run this code a new remote created named origin.
   - **git remote add** - To used to add new remote.
3. **git pull origin master** - To get all the data inside the repository.
4. **git commit -m "commit message"** - To commit all changes to the remote repository.
5. **git add filename** - To add file to the remote repository.
6. **git push origin master** - To push all the committed datas or modifications to the remote repository.
7. **git remote set-url origin [repo-url]** - To create 'origin' if it doesnt exist,we can use the set-url subcommand to edit an existing remote.
