class ChangeGenderToBeBooleanInUsers < ActiveRecord::Migration[5.2]
  def change
  	change_column :user, :gender, :boolean
  end
end
