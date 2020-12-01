class CreateNeopets < ActiveRecord::Migration[5.2]

  def change

    create_table :neopets do |t|
      t.string :name
      t.integer :weight 

      # t.timestamps  
      # t.datatype (:column_name)
    end

  end

end

# Migration files are instructions written in Ruby to be executed by AR to do SQL stuff
# Migrations determine the structure of our tables (columns, tables)
  # NOT the rows
# Ruby class that inherits from AR
# < ActiveRecord::Migration[5.2] (This is the inheritance)