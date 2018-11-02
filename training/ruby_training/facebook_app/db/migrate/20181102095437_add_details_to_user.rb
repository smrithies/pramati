class AddDetailsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :sur_name, :string
    add_column :users, :birthday, :date
    add_column :users, :gender, :string
  end
end
