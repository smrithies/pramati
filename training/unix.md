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
> descriptor 1 \* stderr -file descriptor 2 Commands: \* Calender-
> "\$cal"

-   Change password- "\$passwd"

-   Listing directories and files-
    1.  "\$ls or ls -l"(with date created, rwxr-xr--(rwx-owner,-xr(group
        file),r--(other users)),starting with d are directories)
    2.  Metacharacters -'*,?' -"\$ls *.txt | \$ls *.md | \$ls ch*.md"
    3.  To list hidden files(sh,ksh,csh) -"\$ls -a"
-   Who am I- "\$whoami"

-   Others logged into same computer- "\$who | \$users | \$w"

-   Logout- "\$logout"

-   System shutdown-

    1.  "\$halt" -Brings the system down immediately
    2.  "\$init 0" -Powers off the system using predefined scripts to
        synchronize and clean up the system prior to shutting down
    3.  "\$init 6" -Reboots the system by shutting it down completely
        and then restarting it
    4.  "\$poweroff" -Shuts down the system by powering off
    5.  "\$reboot" -Reboots the system
    6.  "\$shutdown" -Shuts down the system
-   Creating files-
    1.  "\$vi filename" -created file
    2.  "\$i" -to enter into edit mode
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

