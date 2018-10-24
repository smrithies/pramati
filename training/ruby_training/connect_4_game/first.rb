$array = Array.new(7) { Array.new(7 ,0)}
$row = 6
$row_top_index = 0
$row_bottom_index = 7
$column_top_index = 0
$column_bottom_index = 7
$flag = 0
$temp = 0
$temp1 = 0
$temp2 = 0
$temp3 = 0

class Read
  def read_input
    while($temp != 4 && $temp1 != 4 && $temp2 != 4) do
      if $flag == 0
        puts "Player 1"
        $x = gets.chomp.to_i
        if $x > 7
          puts "Enter valid column number"
        else
          vertical($x-1,"*",1)
          $flag = 1
         end
      else
        puts "player 2"
        $x = gets.chomp.to_i
        if $x > 7
          puts "Enter valid column number"
        else
          vertical($x-1,"+",2)
          $flag = 0
        end
      end
    end
  end
  def vertical(column,value,player)
   #puts $array[$row][column]
    while($array[$row][column] != 0) do
      $row = $row - 1
    end
    $array[$row][column] = value
    display_array(value, column, player)
  end

  def display_array(value, column, player)
      $array.each do |arr|
         arr.each do |item|
            print "#{item}   "
         end
         print "\n"
      end
      match(value, column, player)
      $row = 6
  end
  def match(value, column, player)
      vertical1(value, column, player)
      horizontal(value, column, player)
      left_diagonal_match(value, column, player)
      right_diagonal_match(value, column, player)
      #checkWinner(value, column, player)
  end

  def vertical1(value, column, player)
    i = 0
    while $temp != 4 && i != 7
      if $array[i][column] == value
        $temp = $temp + 1
      else
        $temp = 0
      end
      if $temp == 4
        checkWinner(player)
      end
      i = i + 1
    end
  end

  def horizontal(value, column, player)
    i = 0
    while $temp1 != 4 && i != 7
      if $array[$row][i] == value
        $temp1 = $temp1 + 1
      else
        $temp1 = 0
     
      end
      if $temp1 == 4
        checkWinner(player)
      end
      i = i + 1
    end
  end

  def right_diagonal_match(value, column, player)
      diagonal_row = $row
      diagonal_column = column
      while diagonal_row > $row_top_index && diagonal_column > $column_bottom_index
        diagonal_row = $row - 1
        diagonal_column = column + 1
      end
      while diagonal_row != $row_bottom_index && diagonal_column != $column_bottom_index  && $temp3 != 4 
        if $array[diagonal_row][diagonal_column] == value
          $temp3 = $temp3 + 1
        else
          $temp3 = 0
        end
        diagonal_row = diagonal_row + 1
        diagonal_column = diagonal_column - 1
        if $temp3 == 4
          checkWinner(player)
        end
      end
    end

    def left_diagonal_match(value, column, player)
      diagonal_row = $row
      diagonal_column = column
      while diagonal_row >= $row_top_index && diagonal_column >= $column_top_index && $temp2 != 4
        #puts $array[diagonal_row][diagonal_column]
        if $array[diagonal_row][diagonal_column] == value
          $temp2 = $temp2 + 1
        else
          $temp2 = 0
        end
        diagonal_row = diagonal_row - 1
        diagonal_column = diagonal_column - 1
        if $temp2 == 4
          checkWinner(player)
        end
      end
      diagonal_row = $row + 1
      diagonal_column = column + 1
      while diagonal_row != $row_bottom_index && diagonal_column != $column_bottom_index  && $temp2 != 4 
        if $array[diagonal_row][diagonal_column] == value
          $temp2 = $temp2 + 1
        else
          $temp2 = 0
        end
        diagonal_row = diagonal_row + 1
        diagonal_column = diagonal_column + 1
        if $temp2 == 4
          checkWinner(player)
        end
      end
    end

  def checkWinner(player)
        print "Player ",player," wins."
        puts
    end
end
  object = Read.new
  object.read_input