$array = Array.new(7) { Array.new(7 ,0)}
$row = 6
$row_top_index = 0
$row_bottom_index = 7
$column_top_index = 0
$column_bottom_index = 7
$flag = 0
$vertical_count = 0
$horizontal_count = 0
$left_diagonal_count = 0
$right_diagonal_count = 0

class ConnectFour
  def read_input
    while($vertical_count != 4 && $horizontal_count != 4 && $left_diagonal_count != 4 && $right_diagonal_count != 4)
      if $flag == 0
        puts "Player 1"
        $x = gets.chomp.to_i
        if $x > 7
          puts "Enter valid column number"
        else
          insert($x-1,"*",1)
          $flag = 1
         end
      else
        puts "player 2"
        $x = gets.chomp.to_i
        if $x > 7
          puts "Enter valid column number"
        else
          insert($x-1,"+",2)
          $flag = 0
        end
      end
    end
  end

  def insert(column,value,player)
    while($array[$row][column] != 0)
      $row = $row - 1
    end
    $array[$row][column] = value
    display_array(column, value, player)
  end

  def display_array(column, value, player)
      $array.each do |arr|
         arr.each do |item|
            print "#{item}   "
         end
         print "\n"
      end
      check(column, value, player)
      $row = 6
  end

  def check(column, value, player)
      vertical_check(column, value, player)
      horizontal_check(column, value, player)
      left_diagonal_check(column, value, player)
      right_diagonal_check(column, value, player)
  end

  def vertical_check(column, value, player)
    i = 0
    while $vertical_count != 4 && i != 7
      if $array[i][column] == value
        $vertical_count = $vertical_count + 1
      else
        $vertical_count = 0
      end
      if $vertical_count == 4
        checkWinner(player)
      end
      i = i + 1
    end
  end

  def horizontal_check(column, value, player)
    i = 0
    while $horizontal_count != 4 && i != 7
      if $array[$row][i] == value
        $horizontal_count = $horizontal_count + 1
      else
        $horizontal_count = 0
     
      end
      if $horizontal_count == 4
        checkWinner(player)
      end
      i = i + 1
    end
  end

  def right_diagonal_check(column, value, player)
    diagonal_row = $row
    diagonal_column = column
    while diagonal_row > $row_top_index && diagonal_column < $column_bottom_index
      diagonal_row = diagonal_row -1
      diagonal_column = diagonal_column + 1
    end
    while diagonal_row != $row_bottom_index && diagonal_column >= $column_top_index  && $right_diagonal_count != 4 
      #puts $array[diagonal_row][diagonal_column]
      if $array[diagonal_row][diagonal_column] == value
        $right_diagonal_count = $right_diagonal_count + 1
      else
        $right_diagonal_count = 0
      end
      diagonal_row = diagonal_row + 1
      diagonal_column = diagonal_column - 1
      if $right_diagonal_count == 4
        checkWinner(player)
      end
    end
  end

  def left_diagonal_check(column, value, player)
    diagonal_row = $row
    diagonal_column = column
    while diagonal_row > $row_top_index && diagonal_column > $column_top_index
      diagonal_row = diagonal_row - 1
      diagonal_column = diagonal_column - 1 
    end
    while diagonal_row != $row_bottom_index && diagonal_column != $column_bottom_index  && $left_diagonal_count != 4 
      if $array[diagonal_row][diagonal_column] == value
        $left_diagonal_count = $left_diagonal_count + 1
      else
        $left_diagonal_count = 0
      end
      diagonal_row = diagonal_row + 1
      diagonal_column = diagonal_column + 1
      if $left_diagonal_count == 4
        checkWinner(player)
      end
    end
  end

  def checkWinner(player)
    print "Player ",player," wins."
    puts
  end
end
  object = ConnectFour.new
  object.read_input