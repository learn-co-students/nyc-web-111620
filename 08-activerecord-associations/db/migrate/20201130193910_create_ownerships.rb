class CreateOwnerships < ActiveRecord::Migration[5.2]

  def change
    create_table :ownerships do |t|
      t.string :color
      t.integer :neopet_id
      t.integer :user_id
    end
  end
  
end
