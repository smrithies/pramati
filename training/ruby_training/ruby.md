## Ruby
* A scripting language which is purely object-oriented.
* Programmer's friend since syntax is much easier. 
### Features of Ruby
* Ruby is an open-source and is freely available on the Web.
* Ruby is a general-purpose, interpreted programming language.
* Ruby is a true object-oriented programming language.
* Ruby is a server-side scripting language similar to Python and PERL.
* Ruby can be embedded into Hypertext Markup Language (HTML).
* Ruby is very much scalable and big programs written in Ruby are easily maintainable.
* Ruby can be used for developing Internet and intranet applications.
* Ruby can easily be connected to DB2, MySQL, Oracle, and Sybase.

**Ruby interpreter**
>  Within the IRb shell, can immediately view expression results, line by line.

### Types of Variables
* There are different types of variables in Ruby:
  - Local variables
    - The variables that are defined in a method.
    - Not available outside.
    - Begin with a lowercase letter or _.
  - Instance variables
    - Instance variables are available across methods for any particular instance or object.
    - Change from object to object.
    - Preceded by the at sign (@)
  - Class variables
    - Class variables are available across different objects , belongs to a class and is a characteristic of class.
    - Preceeded by @@.
  - Global variables
    - Available across classes.
    - Preceded by $

### Ruby syntax

* single line comment
```
\# comment
```
* multiline comment
```
=begin
	comments
=end 
```
* To insert computations into text strings
```
The \#{compute} 
eg:- "the \#{1+2}" or cars=30 "the \#{cars}"
```
* To get input from users
```
gets.chomp
gets.chomp.to_i(for integers)
gets.chomp.to_s(to strings)
```
* Print statements
```
print/puts "statement"(puts to print new line)
```
> \+, −, or backslash at the end of a line, they indicate the continuation of a statement.
> newline or ; - end of statement

* BEGIN statement
```
Declares code to be called before the program is run.

	BEGIN {
   code
	}
```
* END statement
```
Declares code to be called at the end of the program.

	END {
   code
	}
```

-> class

class Customer
end

> Creating Objects in Ruby using new Method
* by using the method new of the class.
* method new is a unique type of method and is predefined.
* new method belongs to the class methods.
eg:- object_name = Class_name.new
> Custom Method to Create Ruby Objects
* pass parameters to method new and those parameters can be used to initialize class variables.
* to declare the 'new' method with parameters, you need to declare the method initialize at the time of the class creation.
* initialise method - executed when the new method of the class is called with parameters.
eg:-
class Customer
   @@no_of_customers = 0
   def initialize(id, name, addr)
      @cust_id = id
      @cust_name = name
      @cust_addr = addr
   end
end

cust1 = Customer.new("1", "John", "Wisdom Apartments, Ludhiya")

>Member Functions in Ruby Class
* lowercase letters.
* class Sample
   def function
      statement 1
      statement 2
   end
  end

