### General Information
* Creating aliases for ubuntu commands temporarily:-
```
alias new_name = 'command'
```
*  Creating alias permanently
```
1.  Open bash.rc file -> nano -Bu ~/.bashrc
2. Edit the file - > enter the aliases -> alias new_name='command'
3. Save the file
4. Run the command -> . ~/.bashrc
```
* Install terminator
```
sudo apt-get install terminator
```
* Non-prompt password in psql
```
1. nano ~/.pgpass
2. Provide -> localhost:port:database:user_name:password
3. Execute command -> chmod 600 ~/.pgpass    #600 read and write permission only for owner
   * setting read and write permissions only for owner.Prevent other users from reading the file.
```