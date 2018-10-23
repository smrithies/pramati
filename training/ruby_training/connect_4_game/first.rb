$array = Array.new(7) { Array.new(7 ,0)}
$row = 6
$row_top_index = 0
$row_bottom_index = 6
$column_top_index = 0
$column_bottom_index = 6
$flag = 0
$ = 0
$temp1 = 0
$temp2 = 0
class Read
  def read_input
		while($temp != 4 && $temp1 !=4 && $temp2 != 4) do
			if $flag == 0
				puts "Player 1"
				$x = gets.chomp.to_i
        if $x > 7
          puts "Enter proper column number"
        else
				  vertical($x,"*",1)
				  $flag = 1
        end
			else
				puts "player 2"
				$x = gets.chomp.to_i
        if $x > 7
          puts "Enter proper column number"
        else
				  vertical($x,"+",2)
				  $flag = 0
        end
			end
	   end
   end
	def vertical(column, value, player)
		#puts $array[$row][column]
		while($array[$row][column] != 0) do
			$row = $row - 1
		end
		$array[$row][column] = value
    display_array
    vertical_match(value, column, player)
    horizontal_match(value, column, player)
    # left_diagonal_match(value, column, player)
    winner_check(player)
    $row = 6
	end

	def display_array
		$array.each do |arr|
    	arr.each do |item|
        print "#{item}   "
 		  end
 		  print "\n"
 		end
  end

  def vertical_match(value, column, player)
    for i in 0..6
      if $array[i][column] == value
         $temp = $temp + 1
      else
        $temp = 0
      end
    end
  end
  def horizontal_match(value, column, player)
    for i in 0..6
      if $array[$row][i] == value
        $temp1 = $temp1 + 1
      else
        $temp1 = 0
      end
    end
      print $temp1
  end
    # def left_diagonal_match(value, column, player)
    #   diagonal_row = $row
    #   diagonal_column = column
    #   while diagonal_row != $row_top_index && diagonal_column != $column_top_index
    #     if $array[diagonal_row][diagonal_column] == value
    #       $temp2 = $temp2 + 1
    #     else
    #       $temp2 = 0
    #     end
    #     diagonal_row = diagonal_row - 1
    #     diagonal_column = diagonal_column - 1
    #   end
    #   diagonal_row = $row + 1
    #   diagonal_column = column + 1
    #   while diagonal_row != $row_bottom_index && diagonal_column != $column_bottom_index  
    #     if $array[diagonal_row][diagonal_column] == value
    #       $temp2 = $temp2 + 1
    #     else
    #       $temp2 = 0
    #     end
    #     diagonal_row = diagonal_row + 1
    #     diagonal_column = diagonal_column + 1
    #   end
    # end

    #def right_diagonal_match(value, column, player)
    #  diagonal_row = $row
    #  diagonal_column = column
    #  while diagonal_row!=
   # end

  def winner_check(player)
    #print $temp1
    if($temp == 4 || $temp1 == 4 || $temp2 == 4)
      puts "Player ",player," wins."
      end
    end
  end
  object = Read.new
  object.read_input
