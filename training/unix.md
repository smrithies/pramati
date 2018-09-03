=&gt;UNIX

> The Unix operating system is a set of programs that act as a link
> between the computer and the user. Users communicate with the kernel
> through a program known as the shell. The shell is a command line
> interpreter; it translates commands entered by the user and converts
> them into a language that is understood by the kernel. Several people
> can use a Unix computer at the same time; hence Unix is called a
> multiuser system. A user can also run multiple programs at the same
> time; hence Unix is a multitasking environment. In Unix, there are
> three basic types of files

    * Ordinary Files − An ordinary file is a file on the system that contains data, text, or program instructions.
    * Directories − Directories store both special and ordinary files. For users familiar with Windows or Mac OS, Unix directories are equivalent to folders.
    * Special Files − Some special files provide access to hardware such as hard drives, CD-ROM drives, modems, and Ethernet adapters. Other special files are similar to aliases or shortcuts and enable you to access a single file using different names.

> Standard Unix Streams- \* stdin -file descriptor 0 \* stdout -file
> descriptor 1 \* stderr -file descriptor 2 Commands: \* Calender- "cal"

-   Change password- "\$passwd"

-   Listing directories and files-
    1.  "ls or ls -l"(with date created, rwxr-xr--(rwx-owner,-xr(group
        file),r--(other users)),starting with d are directories)
    2.  Metacharacters -'*,?' -"\$ls *.txt | \$ls *.md | \$ls ch*.md"
    3.  To list hidden files(sh,ksh,csh) -"\$ls -a"
-   Who am I- "whoami"

-   Others logged into same computer- "\$who | \$users | \$w"

-   Logout- "logout"

-   System shutdown-

    1.  "halt" -Brings the system down immediately
    2.  "init 0" -Powers off the system using predefined scripts to
        synchronize and clean up the system prior to shutting down
    3.  "init 6" -Reboots the system by shutting it down completely and
        then restarting it
    4.  "poweroff" -Shuts down the system by powering off
    5.  "reboot" -Reboots the system
    6.  "shutdown" -Shuts down the system
-   Creating files-
    1.  "vi filename" -created file
    2.  "i" -to enter into edit mode
    3.  "esc"key -to escape from edit mode
    4.  "shift+zz" -to entirely come out of file
-   Moving inside files-(out of esc)
    1.  "l" key -to move to the right side.
    2.  "h" key -to move to the left side.
    3.  "k" key to move upside in the file.
    4.  "j" key to move downside in the file
-   Display the content-
    1.  cat filename
    2.  cat -b filename -listed content with numbers
-   Counting words in a file-
    1.  "\$wc filename" -display lines,words and characters in file
    2.  "\$wc file1 file2" -multiple files
-   Copying files-
    1.  "\$cp source\_file destinatn\_file"
    2.  "\$cp" filename copyfile -already existing file with same name
-   Rename file-
    1.  "\$mv old\_name new\_name"
-   Deleting files-
    1.  "$rm filename" | "$rm -i filename"
    2.  "\$rm file1 file2"
-   Home Directory-
    1.  "\$cd \~" -return to home directory
    2.  "\$cd \~username" -to other user
    3.  "\$cd -" -to last directory
-   "\$pwd" -Current working directory
-   "\$ls dir\_name" -listing files inside directory
-   Creating and deleting directories-
    1.  "\$mkdir dir\_name"
    2.  "\$mkdir dir1 dir2"
    3.  "\$mkdir /temp/dir\_name"
    4.  "\$mkdir -p /temp/dir\_name" -if temp not existing and create it
    5.  "$rmdir dir_name" | "$rmdir dir1 dir2" -deleting directories
-   Changing file or directory permissions-

i.  chmod in symbolic mode
    1.  "\$chmod o+wx filename" -&gt; "+"-Adds the
        designated permission(s) to a file or directory.
    2.  "\$chmod u-r|w|x filename" -&gt; "-"-Removes the
        designated permission(s) from a file or directory.
    3.  "\$chmod g = rx filename" -&gt; Sets the
        designated permission(s).
    4.  \$chmod o+wx,u-x,g = rx testfile - in a single line ii.chmod in
        absolute permissions The second way to modify permissions with
        the chmod command is to use a number to specify each set of
        permissions for the file.

    Number Octal Permission Representation Ref 0 No permission --- 1
    Execute permission --x 2 Write permission -w- 3 Execute and write
    permission: 1 (execute) + 2 (write) = 3 -wx 4 Read permission r-- 5
    Read and execute permission: 4 (read) + 1 (execute) = 5 r-x 6 Read
    and write permission: 4 (read) + 2 (write) = 6 rw- 7 All
    permissions: 4 (read) + 2 (write) + 1 (execute) = 7 rwx

    eg:-"\$chmod 755 testfile" \$ls -l testfile -rwxr-xr-x 1 amrood
    users 1024 Nov 2 00:10 testfile

-   Changing Owners(chown) and Groups(chgrp)
    1.  "\$chown username testfile"
    2.  "\$chgrp group name testfile"
-   SUID and SGID file permission
    1.  "\$ chmod ug+s dirname"
-   Environment variables
    1.  "$TEST="Unix Programming" ,$echo \$TEST" - set a variable called
        TEST and assigned a value and acces using echo. These variables
        retain their values until we come out of the shell.\
-   Printing Files Text formatters to format text before printing(nroff
    and troff)
    1.  The pr Command - "\$pr option(s) filename(s)" - display only on
        screen, doesnot modify orginal file pr -k - Produces k columns
        of output

        pr -d - Double-spaces the output (not on all pr versions)

        pr -h "header" - Takes the next item as a report header

        pr -t - Eliminates the printing of header and the top/bottom
        margins

        pr -l PAGE\_LENGTH - Sets the page length to PAGE\_LENGTH (66)
        lines. The default number of lines of text is 56

        pr -o MARGIN - Offsets each line with MARGIN (zero) spaces

        pr -w PAGE\_WIDTH - Sets the page width to PAGE\_WIDTH (72)
        characters for multiple text-column output only
    2.  lp and lpr command - to print a file
        1.  "lp/lpr filename"
        2.  "lp -nNUM filename" - NUM no of copies
        3.  "lpr -NUM filename" - NUM no of copies
        4.  "lp -dprinter\_name filename / lpr -Pprinter\_name
            filename" - if there are more printers

    3.  "lpstat or lpstat -o" - displays printing requests in waiting
        queue also others
    4.  "lpq" - same as lpstat display printer status also
    5.  For cancelling printing requests
        1.  "cancel printer\_name/id" - for lp requests
        2.  "lprm id" - for lpr requests and display which file deleted

-   Sending an email
    1.  "mail \[-s subject\] \[-c cc-addr\] \[-b bcc-addr\] to-addr"
        eg:- mail -s "text it" smrithies@gmail.com
    2.  "mail -s "subject" "smrithies@gmail.com &lt; unix.txt" - sending
        an entire file(&lt; - redirect operator)
    3.  "mail" - to check incoming mail

